import React from 'react'
import Modal from './Modal'
import Input from './Input'
import CloseIcon from '@mui/icons-material/Close';
import { useModalContext } from '@/app/contexts/ModalContext'

const Login: React.FC<any> = ( { setShowLogin } ) => {
  const { setIsModal } = useModalContext();

  const onClose = () => {
    setIsModal(false);
    setShowLogin(false);
  }

  const body = (
    <div className='w-full h-full flex flex-col'>
      <div className='sticky top-0 backdrop-blur-md p-4 flex flex-row-reverse bg-[#ffffffa6] dark:bg-[#000000a6] z-1000' onClick={onClose}>
        <CloseIcon sx={{ fontSize: 23 }}/>
      </div>
      <div className='flex flex-col h-auto px-1 pt-5 pb-14 w-full max-w-[350px] m-auto'>
        <div className='font-bold text-3xl'>Login</div>
        <div className='content-center flex-col mt-5 w-full max-w-[350px]'>
          <Input type='email' name='email' placeholder='Email Address'/>
          <Input type='password' name='password' placeholder='Password'/>
        </div>
        <div className="ModalFooter w-full max-w-[350px] content-center my-1">
          <button className='p-2 w-full rounded-full text-sm font-bold text-white bg-blue-600 hover:bg-blue-800'>
            Next
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <Modal body={body}/>
  )
}

export default Login