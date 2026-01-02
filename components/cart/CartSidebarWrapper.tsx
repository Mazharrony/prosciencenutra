'use client';

import CartSidebar from './CartSidebar';
import { useCartUI } from '@/lib/store/cart-context';

export default function CartSidebarWrapper() {
  const { isCartOpen, closeCart } = useCartUI();

  return <CartSidebar isOpen={isCartOpen} onClose={closeCart} />;
}

