'use client';

type TDrawerBodyProps = {
  handleCloseDrawer: () => void;
};

export default function DrawerBody({ handleCloseDrawer }: TDrawerBodyProps) {
  return (
    <div
      onClick={handleCloseDrawer}
      className='fixed top-0 z-10 flex h-screen w-screen flex-row'
    >
      {/* drawer body */}
      <div className='w-full bg-emerald-300 sm:w-3/4 md:w-1/2 lg:w-1/4'>hi</div>
      {/* backdrop */}
      <div className='bg-transparent sm:w-1/4 md:w-1/2 lg:w-3/4'></div>
    </div>
  );
}
