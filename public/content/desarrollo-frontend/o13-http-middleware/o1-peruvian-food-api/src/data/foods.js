import path from 'path';
import FileManager from '../utils/fileManager.js';

const DB_PATH = path.join(process.cwd(), 'src', 'data', 'foodsDatabase.json');
const fileManager = new FileManager(DB_PATH);

const initialFoods = [
  {
    id: 1,
    name: "Ceviche",
    category: "main",
    description: "Fresh raw fish cured in citrus juices with onions and chili peppers",
    ingredients: ["fish", "lime juice", "red onions", "chili peppers", "sweet potato"],
    isSpicy: true,
    price: 25,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/78/Cebiche_de_corvina.JPG",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 2,
    name: "Lomo Saltado",
    category: "main",
    description: "Stir-fried beef with vegetables and french fries served with rice",
    ingredients: ["beef", "tomatoes", "onions", "soy sauce", "potatoes", "rice"],
    isSpicy: false,
    price: 22,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Lomo-saltado-perudelights.jpg",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 3,
    name: "Ají de Gallina",
    category: "main",
    description: "Creamy chicken stew with yellow chili pepper sauce",
    ingredients: ["chicken", "yellow chili pepper", "bread", "milk", "cheese", "walnuts"],
    isSpicy: true,
    price: 20,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Aj%C3%AD_de_gallina.jpg/800px-Aj%C3%AD_de_gallina.jpg",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

class FoodsDatabase {
  constructor() {
    this.init();
  }

  async init() {
    await fileManager.initializeFile(initialFoods);
  }

  async getAllFoods() {
    return await fileManager.readData();
  }

  async getFoodById(id) {
    const foods = await this.getAllFoods();
    return foods.find(food => food.id === id);
  }

  async createFood(foodData) {
    const foods = await this.getAllFoods();

    const newId = foods.length > 0 ? Math.max(...foods.map(f => f.id)) + 1 : 1;

    const newFood = {
      id: newId,
      ...foodData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    foods.push(newFood);
    await fileManager.writeData(foods);

    return newFood;
  }

  async updateFood(id, updateData) {
    const foods = await this.getAllFoods();
    const foodIndex = foods.findIndex(food => food.id === id);

    if (foodIndex === -1) {
      return null;
    }

    foods[foodIndex] = {
      ...foods[foodIndex],
      ...updateData,
      updatedAt: new Date().toISOString()
    };

    await fileManager.writeData(foods);
    return foods[foodIndex];
  }

  async deleteFood(id) {
    const foods = await this.getAllFoods();
    const foodIndex = foods.findIndex(food => food.id === id);

    if (foodIndex === -1) {
      return null;
    }

    const deletedFood = foods[foodIndex];
    foods.splice(foodIndex, 1);
    await fileManager.writeData(foods);

    return deletedFood;
  }

  async getStats() {
    const foods = await this.getAllFoods();

    const categories = foods.reduce((acc, food) => {
      acc[food.category] = (acc[food.category] || 0) + 1;
      return acc;
    }, {});

    const prices = foods.map(f => f.price);
    const averagePrice = prices.length > 0
      ? Math.round(prices.reduce((a, b) => a + b, 0) / prices.length * 100) / 100
      : 0;

    return {
      totalFoods: foods.length,
      categories,
      averagePrice,
      spicyFoods: foods.filter(f => f.isSpicy).length,
      nonSpicyFoods: foods.filter(f => !f.isSpicy).length,
      priceRange: {
        min: Math.min(...prices),
        max: Math.max(...prices)
      }
    };
  }
}

export default new FoodsDatabase();