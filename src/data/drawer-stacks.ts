export const drawerStacks = new Map<
  string,
  {
    href: string;
    name: string;
    items: { id: string; href: string; name: string }[];
  }
>([
  [
    'drawer-stack-browse',
    {
      href: '/browse',
      name: 'browse',
      items: [
        {
          id: 'trending',
          href: '/browse/trending',
          name: 'trending',
        },
        {
            id: 'popular',
            href: '/browse/popular',
            name: 'popular',
          },
          {
              id: 'promotions',
              href: '/browse/promotions',
              name: 'promotions',
            }
      ],
    },
  ],
  [
    'drawer-stack-categories',

    {
      href: '/categories',
      name: 'categories',
      items: [
        {
          id: 'electronics',
          href: '/categories/electronics',
          name: 'electronics',
        },
        { id: 'fashion', href: '/categories/fashion', name: 'fashion' },
        {
          id: 'home-and-living',
          href: '/categories/home-and-living',
          name: 'home and living',
        },
        {
          id: 'beauty-and-personal-care',
          href: '/categories/beauty-and-personal-care',
          name: 'beauty and personal care',
        },
        {
          id: 'toys-and-games',
          href: '/categories/toys-and-games',
          name: 'toys and games',
        },
        {
          id: 'sports-and-outdoors',
          href: '/categories/sports-and-outdoors',
          name: 'sports and outdoors',
        },
        {
          id: 'books-music-and-movies',
          href: '/categories/books-music-and-movies',
          name: 'books, music, and movies',
        },
        {
          id: 'health-and-wellness',
          href: '/categories/health-and-wellness',
          name: 'health and wellness',
        },
        {
          id: 'automotive',
          href: '/categories/automotive',
          name: 'automotive',
        },
        {
          id: 'pet-supplies',
          href: '/categories/pet-supplies',
          name: 'pet supplies',
        },
        {
          id: 'office-supplies',
          href: '/categories/office-supplies',
          name: 'office supplies',
        },
        {
          id: 'jewelry-and-watches',
          href: '/categories/jewelry-and-watches',
          name: 'jewelry and watches',
        },
        {
          id: 'gourmet-food-and-beverages',
          href: '/categories/gourmet-food-and-beverages',
          name: 'gourmet food and beverages',
        },
      ],
    },
  ],
  // Add more entries if needed
]);
