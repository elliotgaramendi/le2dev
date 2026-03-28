import express from 'express';
import foodsDB from '../data/foods.js';
import { validateData } from '../middleware/security.js';
import { validateCreateFood, validateUpdateFood } from '../validators/foodValidator.js';

const foodRouter = express.Router();

foodRouter.get('/', async (req, res) => {
  try {
    let allFoods = await foodsDB.getAllFoods();
    let filteredFoods = allFoods;

    if (req.query.spicy !== undefined) {
      const isSpicy = req.query.spicy === 'true';
      filteredFoods = filteredFoods.filter(food => food.isSpicy === isSpicy);
    }

    if (req.query.category) {
      filteredFoods = filteredFoods.filter(food =>
        food.category.toLowerCase() === req.query.category.toLowerCase()
      );
    }

    if (req.query.maxPrice) {
      const maxPrice = parseInt(req.query.maxPrice);
      if (!isNaN(maxPrice)) {
        filteredFoods = filteredFoods.filter(food => food.price <= maxPrice);
      }
    }

    if (req.query.search) {
      const searchTerm = req.query.search.toLowerCase();
      filteredFoods = filteredFoods.filter(food =>
        food.name.toLowerCase().includes(searchTerm) ||
        food.description.toLowerCase().includes(searchTerm)
      );
    }

    res.json({
      total: filteredFoods.length,
      totalAvailable: allFoods.length,
      filters: req.query,
      foods: filteredFoods
    });
  } catch (error) {
    res.status(500).json({
      error: "Server error! 🚨",
      message: "Failed to retrieve foods",
      details: error.message
    });
  }
});

foodRouter.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        error: "Invalid ID format! 📝",
        message: "ID must be a number",
        example: "/api/foods/1"
      });
    }

    const food = await foodsDB.getFoodById(id);

    if (!food) {
      return res.status(404).json({
        error: "Food not found! 🔍",
        message: `No food found with ID: ${id}`,
        suggestion: "Check available foods at /api/foods"
      });
    }

    const allFoods = await foodsDB.getAllFoods();
    const relatedFoods = allFoods
      .filter(f => f.id !== id && f.category === food.category)
      .slice(0, 3)
      .map(f => ({ id: f.id, name: f.name }));

    res.json({
      ...food,
      relatedFoods: relatedFoods.length > 0 ? relatedFoods : null
    });
  } catch (error) {
    res.status(500).json({
      error: "Server error! 🚨",
      message: "Failed to retrieve food",
      details: error.message
    });
  }
});

foodRouter.post('/', validateData(validateCreateFood), async (req, res) => {
  try {
    const newFood = await foodsDB.createFood(req.body);

    res.status(201).json({
      message: "Food created successfully! 🎉",
      food: newFood,
      links: {
        self: `/api/foods/${newFood.id}`,
        all: "/api/foods"
      }
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to create food! 🚨",
      message: "Something went wrong while saving",
      details: error.message
    });
  }
});

foodRouter.put('/:id', validateData(validateUpdateFood), async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        error: "Invalid ID format! 📝",
        message: "ID must be a number"
      });
    }

    const updatedFood = await foodsDB.updateFood(id, req.body);

    if (!updatedFood) {
      return res.status(404).json({
        error: "Food not found! 🔍",
        message: `No food found with ID: ${id}`
      });
    }

    res.json({
      message: "Food updated successfully! ✨",
      food: updatedFood,
      changes: Object.keys(req.body),
      links: {
        self: `/api/foods/${updatedFood.id}`,
        all: "/api/foods"
      }
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to update food! 🚨",
      message: "Something went wrong while updating",
      details: error.message
    });
  }
});

foodRouter.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        error: "Invalid ID format! 📝",
        message: "ID must be a number"
      });
    }

    const deletedFood = await foodsDB.deleteFood(id);

    if (!deletedFood) {
      return res.status(404).json({
        error: "Food not found! 🔍",
        message: `No food found with ID: ${id}`
      });
    }

    res.json({
      message: "Food deleted successfully! 🗑️",
      deletedFood: {
        id: deletedFood.id,
        name: deletedFood.name
      },
      links: {
        all: "/api/foods",
        create: "POST /api/foods"
      }
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to delete food! 🚨",
      message: "Something went wrong while deleting",
      details: error.message
    });
  }
});

export default foodRouter;