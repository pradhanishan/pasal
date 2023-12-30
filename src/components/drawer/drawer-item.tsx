import Link from 'next/link';

type TDrawerItemProps = {
  link: string;
  name: string;
};

export default function DrawerItem({ link, name }: TDrawerItemProps) {
  return <Link href={link}> {name}</Link>;
}
