import Link from 'next/link';

type TDrawerItemProps = {
  href: string;
  name: string;
};

export default function DrawerItem({ href, name }: TDrawerItemProps) {
  return (
    <Link
      href={href}
      className='
      rounded-md bg-emerald-500 px-8 py-2 text-emerald-950 dark:bg-zinc-600  dark:text-zinc-300 max-w-72
    '
    >
      {name}
    </Link>
  );
}
