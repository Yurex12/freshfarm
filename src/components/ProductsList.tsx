import Button from './Button';
import ProductCard from './ProductCard';

import { products } from '../constants';

export default function ProductsLList() {
  return (
    <section className='mx-auto max-w-360 px-4 md:px-6 space-y-4 md:space-y-6'>
      <div className='flex flex-col items-center text-center space-y-4'>
        <h1 className='text-3xl font-semibold  sm:text-4xl lg:text-5xl'>
          Our Featured Products
        </h1>

        <p className='max-w-md text-foreground'>
          We have a wide range of agricultural products exported all over the
          world to thousands of our partners
        </p>
      </div>

      <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
        {products.map((product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </div>

      <div className='place-items-center grid'>
        <Button as='link'>See all products</Button>
      </div>
    </section>
  );
}
