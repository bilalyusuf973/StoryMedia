import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

type ModalProps = {
    body: React.JSX.Element;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ body, onClose }) => {
  return (
    <div className='fixed w-full h-full content-center z-50 bg-neutral-800 bg-opacity-70'>
      <div className='w-full md:w-[38rem] h-full md:h-auto max-h-screen bg-white dark:bg-black md:rounded-2xl overflow-auto'>
        <div className='fixed md:sticky top-0 z-[100] w-full flex flex-row-reverse backdrop-blur-md p-2 bg-[#ffffffa6] dark:bg-[#000000a6]'>
          <div className='p-1 rounded-full hover:bg-[#bbb] dark:hover:bg-neutral-800'>
            <CloseIcon sx={{ fontSize: 23 }} onClick={onClose}/>
          </div>
        </div>
        {body}
      </div>
    </div>
  )
}

export default Modal