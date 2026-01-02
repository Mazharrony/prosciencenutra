export type ProductCategory = 'vitamins' | 'protein' | 'wellness' | 'sports';

export interface NutritionFact {
  name: string;
  amount: string;
  dailyValue?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  price: number;
  compareAtPrice?: number;
  images: string[];
  description: string;
  shortDescription: string;
  ingredients: string[];
  nutritionFacts?: {
    servingSize: string;
    servingsPerContainer: number;
    nutrients: NutritionFact[];
  };
  benefits: string[];
  usageInstructions: string;
  inStock: boolean;
  stockQuantity?: number;
  tags: string[];
  featured: boolean;
  flavour?: string;
  createdAt: Date;
  updatedAt: Date;
}

