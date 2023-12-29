'use client';

import Logo from '@/components/logo';
import { Checkbox } from '@/components/ui/checkbox';
import { ChevronsLeft, FileCode } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className='group/sidebar w-60 h-screen bg-gray-200 shadow-md'>
      <div className='px-3 py-2 flex items-center justify-between border-b border-gray-300'>
        <Logo />
        <div className='text-muted-foreground rounded-sm hover:bg-neutral-400 dark:hover:bg-neutral-600 cursor-pointer opacity-0 transition group-hover/sidebar:opacity-100 '>
          <ChevronsLeft className='w-5 h-5' />
        </div>
      </div>
      <nav className='px-3 py-2 overflow-y-auto'>
        <ul className='flex flex-col'>
          <li className='py-2 flex items-center space-x-1'>
            <Checkbox
              onCheckedChange={(value) => {
                console.log(value);
              }}
            />
            <FileCode className='w-5 h-5' />
            <span className='text-xs text-gray-500 cursor-pointer hover:underline'>
              index.tsx
            </span>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
