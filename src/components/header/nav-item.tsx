import Link from 'next/link';

type TNavItemProps = {
  href: string;
  name: string;
};

export default function NavItem({ href, name }: TNavItemProps) {
  return (
    <Link
      href={href}
      className='w-32 whitespace-nowrap rounded-md bg-emerald-500 px-4 py-2 text-center
       lowercase text-emerald-900 shadow-md shadow-emerald-600 xl:w-44
       transition-all duration-300 hover:scale-105 focus:scale-105 md:w-28 dark:bg-zinc-600 dark:text-zinc-300 dark:shadow-zinc-700'
    >
      {name}
    </Link>
  );
}
