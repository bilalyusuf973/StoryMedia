import React from 'react'

import CloseIcon from '@mui/icons-material/Close';

type ModalProps = {
  onClose: () => void;
  onSubmit?: () => void;
  title?: React.JSX.Element;
  body: React.JSX.Element;
  actionLabel?: String;
  footer?: React.JSX.Element;
  disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({ onClose, onSubmit, title, body, actionLabel, footer, disabled }) => {
  return (
    <div className='fixed w-full h-full content-center z-50 bg-neutral-800 bg-opacity-70'>
      <div className='w-full md:w-[38rem] h-full md:h-auto max-h-screen bg-white dark:bg-black md:rounded-2xl overflow-auto'>
        <div className='fixed md:sticky top-0 z-[100] w-full flex flex-row-reverse backdrop-blur-md p-2 bg-[#ffffffa6] dark:bg-[#000000a6]'>
          <div className='p-1 rounded-full hover:bg-[#bbb] dark:hover:bg-neutral-800 cursor-pointer'>
            <CloseIcon sx={{ fontSize: 23 }} onClick={onClose}/>
          </div>
        </div>
        <div className='mt-14 md:mt-0 h-full flex'>
          <div className='flex flex-col px-3 pb-14 w-full min-w-[280px] max-w-[370px] m-auto gap-y-5'>
            {title}
            {body}
            {!disabled && <button className='mt-5 p-2 w-full rounded-full text-md font-bold text-white bg-blue-600 hover:bg-blue-800' onClick={onSubmit}>
              {actionLabel}
            </button>}
            {footer}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal