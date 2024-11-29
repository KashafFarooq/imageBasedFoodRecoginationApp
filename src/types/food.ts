export interface Food {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  servingSize: number;
  servingUnit: string;
  isFavorite: boolean;
}

export interface NutrientBreakdown {
  date: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}