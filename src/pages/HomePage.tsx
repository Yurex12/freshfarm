import Hero from '../components/Hero';
import Importance from '../components/Importance';
import Partners from '../components/Partners';
import ProductsLList from '../components/ProductsList';
import Sponsors from '../components/Sponsors';
import Subscribe from '../components/Subscribe';
import Testimonials from '../components/Testimonials';

export default function HomePage() {
  return (
    <div className='space-y-10'>
      <Hero />
      <Sponsors />
      <Importance />
      <Partners />
      <ProductsLList />
      <Testimonials />
      <Subscribe />
    </div>
  );
}
