'use client';

export default function Search() {
  return (
    <div>
      <input
        type='text'
        name='search-bar'
        placeholder='search for an item'
        className='rounded-md bg-emerald-100 px-4 py-2 text-center focus:shadow-md focus:outline-none sm:w-96 dark:bg-zinc-600
        '
      />
    </div>
  );
}
