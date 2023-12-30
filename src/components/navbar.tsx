import NavItem from './nav-item';

export default function Navbar() {
  const navItems = new Map<string, { href: string; name: string }>([
    ['0', { href: '/browse', name: 'browse' }],
    ['1', { href: '/popular', name: 'popular' }],
    ['2', { href: '/trending', name: 'trending' }],
    ['3', { href: '/for-you', name: 'for you' }],
  ]);

  return (
    <div className='hidden md:flex md:items-center md:justify-center md:space-x-8 md:py-2 lg:space-x-24'>
      {Array.from(navItems).map(([id, value]) => (
        <NavItem key={id} href={value.href} name={value.name} />
      ))}
    </div>
  );
}
