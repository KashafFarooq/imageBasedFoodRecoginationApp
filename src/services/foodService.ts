import { Food, NutrientBreakdown } from '../types/food';

class FoodService {
  private foods: Food[] = [];
  private favorites: Set<string> = new Set();

  async searchFoods(query: string): Promise<Food[]> {
    return this.foods.filter(food => 
      food.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  async getFavorites(): Promise<Food[]> {
    return this.foods.filter(food => this.favorites.has(food.id));
  }

  async toggleFavorite(foodId: string): Promise<void> {
    if (this.favorites.has(foodId)) {
      this.favorites.delete(foodId);
    } else {
      this.favorites.add(foodId);
    }
  }

  async getNutrientBreakdown(startDate: Date, endDate: Date): Promise<NutrientBreakdown[]> {
    // Mock implementation - replace with actual API calls
    return [];
  }
}

export const foodService = new FoodService();