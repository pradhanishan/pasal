import { Anton } from 'next/font/google';

const anton = Anton({ weight: '400', subsets: ['latin'] });

export default function Heading() {
  return (
    <div>
      <h1 className={`text-4xl font-bold  uppercase text-emerald-950 
      md:text-5xl dark:text-zinc-400 ${anton.className}`}>
        pasal
      </h1>
    </div>
  );
}
