'use client';
import { ChevronDown, MousePointerSquareDashed } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const ReactDiffViewer = dynamic(
  async () => (await import('react-diff-viewer')).default
);

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';

export default function Context() {
  const [open, setOpen] = useState(false);

  const oldCode = `
const a = 10
const b = 10
const c = () => console.log('foo')
 
if(a > 10) {
  console.log('bar')
}
 
console.log('done')
`;
  const newCode = `
const a = 10
const boo = 10
 
if(a === 10) {
  console.log('bar')
}
`;
  return (
    <div className='w-full p-5 overflow-y-auto'>
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger asChild>
          <div className='py-2 px-3 border border-gray-300 rounded-t-md flex items-center transition'>
            <ChevronDown
              className={cn('w-4 h-4 mr-2', open ? '-rotate-90' : '')}
            />
            <span className='font-semibold text-xs select-none hover:text-blue-700 hover:underline cursor-pointer'>
              index.html
            </span>
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <div className='border border-gray-300 border-t-0'>
            <ReactDiffViewer newValue={newCode} oldValue={oldCode} splitView />
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* <div className='w-full flex flex-col items-center justify-center'>
        <MousePointerSquareDashed className='w-20 h-20 text-muted-foreground' />
        <h3 className='text-muted-foreground text-xl'>Empty data...</h3>
      </div> */}
    </div>
  );
}
