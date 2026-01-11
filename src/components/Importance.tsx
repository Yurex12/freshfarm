import { importance } from '../constants';
import ImportanceCard from './ImportanceCard';

export default function Importance() {
  return (
    <section className='mx-auto max-w-360 px-4 md:px-6 space-y-4 lg:space-y-6'>
      {/* Heading */}
      <h1 className='text-center text-3xl font-semibold sm:text-4xl lg:text-5xl'>
        The Future of Agro Innovation
      </h1>

      <p className='mx-auto max-w-2xl text-center text-sm text-foreground/80 sm:text-base'>
        Farmers are the backbone of our society. They are the ones who provide
        us with all the food we eat. Below are key areas shaping the future of
        agriculture.
      </p>

      <div className='grid gap-2 lg:gap-6 grid-cols-2 lg:grid-cols-4'>
        {importance.map((importanceItem) => (
          <ImportanceCard {...importanceItem} key={importanceItem.id} />
        ))}
      </div>
    </section>
  );
}
