import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProductBySlug, getAllProducts } from '@/lib/data/products';
import ProductDetailClient from './ProductDetailClient';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const discountPercent = product.compareAtPrice 
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0;

  const allProducts = getAllProducts();
  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <ProductDetailClient 
      product={product} 
      relatedProducts={relatedProducts} 
      discountPercent={discountPercent} 
    />
  );
}
