import cors from 'cors';
import express from 'express';
import foodRouter from './routes/foodRoutes.js';

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.json({
    message: "Welcome to the Peruvian Food API",
    endpoints: {
      getAllFoods: "/api/foods",
      getFoodById: "/api/foods/1",
      filterFoods: "/api/foods?search=chi",
      combinedFilters: "/api/foods?search=gallina&category=main&isSpicy=true"
    }
  });
});

app.use('/api/foods', foodRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});