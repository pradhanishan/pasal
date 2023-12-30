'use client';

import { useState } from 'react';
import DrawerBody from './drawer-body';
import DrawerOpener from './drawer-opener';

export default function Drawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  function openDrawer() {
    setIsDrawerOpen(true);
  }

  function closeDrawer() {
    setIsDrawerOpen(false);
  }

  return (
    <div className='relative text-emerald-900 transition-all duration-300  dark:text-zinc-400'>
      {isDrawerOpen ? (
        <DrawerBody handleCloseDrawer={closeDrawer} />
      ) : (
        <DrawerOpener openDrawerHandler={openDrawer} />
      )}
    </div>
  );
}
