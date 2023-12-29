'use client';

import Link from 'next/link';
import Image from 'next/image';

import { buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Github } from 'lucide-react';

const Form = () => {
  return (
    <div className='relative flex w-full h-[60dvh] flex-col items-center justify-center'>
      <Image
        src={'/thumb.jpg'}
        fill
        objectFit='cover'
        quality={100}
        alt=''
        className='-z-10'
      />

      <div className='flex flex-col items-center space-y-5'>
        <h2 className='text-2xl text-gray-50'>Make your code stop stinking!</h2>
        <h3 className='text-sm text-gray-200'>
          Automate code review for github repository 🍏!
        </h3>
        <Github className='w-10 h-10 text-white' />
        <div className='flex items-center'>
          <Input
            className='w-96 mr-2 bg-white'
            placeholder='https://github.com/{{username}}/{{project}}.git'
          />
          <Link
            href='/'
            className={cn(
              buttonVariants({
                variant: 'default',
              })
            )}
          >
            Start review 🚀
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Form;
