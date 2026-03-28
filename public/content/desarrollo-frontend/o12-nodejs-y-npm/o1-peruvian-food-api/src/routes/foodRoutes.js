import express from 'express';
import foods from '../data/foods.js';

const foodRouter = express.Router();

foodRouter.get('/', (req, res) => {
  const { search, category, isSpicy } = req.query;
  let filteredFoods = foods;

  if (search) {
    filteredFoods = filteredFoods.filter(food => food.name.toLowerCase().includes(search.toLowerCase()));
  }
  if (category) {
    filteredFoods = filteredFoods.filter(food => food.category === category);
  }
  if (isSpicy !== undefined) {
    filteredFoods = filteredFoods.filter(food => food.isSpicy === (isSpicy === 'true'));
  }

  res.json(filteredFoods);
});

foodRouter.get('/:id', (req, res) => {
  const id = +req.params.id;

  const food = foods.find(food => food.id === id);

  if (!food) {
    return res.status(404).json({ message: 'Food not found' });
  }

  res.json(food);
});

export default foodRouter;