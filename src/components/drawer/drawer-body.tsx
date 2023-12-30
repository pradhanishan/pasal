'use client';

import DrawerStack from './drawer-stack';

type TDrawerBodyProps = {
  handleCloseDrawer: () => void;
};

export default function DrawerBody({ handleCloseDrawer }: TDrawerBodyProps) {
  return (
    <div
      onClick={handleCloseDrawer}
      className='fixed top-0 z-10 flex h-screen w-screen flex-row backdrop-blur'
    >
      {/* drawer body */}
      <div className='flex w-full flex-col  justify-start space-y-8 overflow-y-auto bg-emerald-300 px-8 pt-32 shadow-lg sm:w-3/4 md:w-1/2 lg:w-1/4 dark:bg-zinc-900'>
        <DrawerStack />
      </div>
    </div>
  );
}
