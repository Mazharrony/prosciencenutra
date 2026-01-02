import { Product } from '@/types/product';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  minCardWidth?: string; // Minimum card width in pixels
}

export default function ProductGrid({ 
  products,
  minCardWidth = "280px" // Default minimum card width
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-secondary-muted text-lg">No products found.</p>
      </div>
    );
  }

  return (
    <div 
      className="grid gap-8"
      style={{
        gridTemplateColumns: `repeat(auto-fill, minmax(${minCardWidth}, 1fr))`
      }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
