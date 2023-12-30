'use client';

import { MdMenu } from 'react-icons/md';

type TDrawerOpenerProps = {
  openDrawerHandler: () => void;
};

export default function DrawerOpener({
  openDrawerHandler,
}: TDrawerOpenerProps) {
  return (
    <div onClick={openDrawerHandler} className='absolute left-8 top-8'>
      <MdMenu size={32} />
    </div>
  );
}
