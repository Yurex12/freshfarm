import type { ImportanceItem } from '../types/types';

export default function ImportanceCard(item: ImportanceItem) {
  return (
    <div
      key={item.id}
      className='flex flex-col items-center rounded-md border border-foreground/40 p-6 text-center'
    >
      <img
        src={item.image}
        alt={item.name}
        className='mb-4 h-24 w-24 object-contain'
      />

      <p className='text-sm font-medium text-foreground'>{item.name}</p>
    </div>
  );
}
