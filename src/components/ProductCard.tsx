import type { Product } from '../types/types';

export default function ProductCard(product: Product) {
  return (
    <div className='rounded-lg border border-foreground/40 p-4 transition hover:border-primary hover:cursor-pointer'>
      <img
        src={product.image}
        alt={product.name}
        className='mb-4 h-40 w-full rounded-md object-cover'
      />

      <h2 className='mb-2 text-base font-semibold uppercase text-foreground'>
        {product.name}
      </h2>

      {product.description.map((text, index) => (
        <p key={index} className='text-sm leading-relaxed text-foreground/90'>
          {text}
        </p>
      ))}
    </div>
  );
}
