'use client'
import React from 'react'
import { useModalContext } from '@/app/contexts/ModalContext';

type ModalProps = {
    body: React.JSX.Element;
}

const Modal: React.FC<ModalProps> = ({ body }) => {
  const { isModal } = useModalContext();
  
  return (
    <>
        {isModal && <div className='fixed w-full h-full content-center z-50 bg-neutral-800 bg-opacity-70'>
            <div className='w-full md:w-[38rem] h-full md:h-auto md:max-h-[calc(100vh-5vh)] dark:bg-black md:rounded-2xl overflow-y-auto'>
              {body}
            </div>
        </div>}
    </>
  )
}

export default Modal