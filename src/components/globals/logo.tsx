import { lusitana } from '@/app/fonts/fonts';
// import { Globe2Icon } from 'lucide-react';

export default function Logo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      {/* <Globe2Icon className="h-12 w-12 rotate-[15deg]" /> */}
      <p className="text-[44px] ">Agnostic</p>
    </div>
  );
}
