import Drawer from './drawer';
import Heading from './heading';
import Navbar from './navbar';
import Search from './search';

export default function Header() {
  return (
    <div
      className=' flex  flex-row items-start justify-between bg-emerald-300 pb-8 pt-0 dark:bg-zinc-900
    '
    >
      <div>
        <Drawer />
      </div>
      <div
        className='flex flex-col items-center justify-center space-y-10 
      md:flex-row md:items-center md:justify-between md:space-x-8 md:space-y-0'
      >
        <Heading />
        {/* container for search and navbar */}
        <div className='flex flex-col items-center justify-center space-y-4'>
          <Search />
          <Navbar />
        </div>
      </div>
      <div></div>
    </div>
  );
}
