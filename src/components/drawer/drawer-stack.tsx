import DrawerItem from './drawer-item';

type TDrawerStackProps = {
  href: string;
  name: string;
  drawerItems: { id: string; name: string; href: string }[];
};

export default function DrawerStack({
  href,
  name,
  drawerItems,
}: TDrawerStackProps) {
  return (
    <div>
      <h2 className='text-2xl font-bold'>{name}</h2>
      {/* Drawer items container */}
      <div className='flex flex-col space-y-4 px-4 pt-6'>
        {drawerItems.map((drawerItem) => (
          <DrawerItem
            key={drawerItem.id}
            href={drawerItem.href}
            name={drawerItem.name}
          />
        ))}
      </div>
    </div>
  );
}
