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
    <>
      <div className='sticky top-0 backdrop-blur-md p-4 flex flex-row-reverse bg-[#ffffffa6] dark:bg-[#000000a6]' onClick={onClose}>
        <CloseIcon sx={{ fontSize: 23 }}/>
      </div>
      <div className='h-full flex'>
        <div className='flex flex-col px-1 pb-10 w-full max-w-[350px] m-auto gap-y-3'>
          <div className='font-bold text-3xl'>Login</div>
          <Input type='email' name='email' placeholder='Email Address'/>
          <Input type='password' name='password' placeholder='Password'/>
          <button className='p-2 w-full rounded-full text-sm font-bold text-white bg-blue-600 hover:bg-blue-800'>
            Next
          </button>
          <button className='p-2 w-full rounded-full text-sm font-bold border-[1px] border-gray-600'>
            Forgot Password
          </button>
        </div>
      </div>
    </>
  );

  return (
    <Modal body={body}/>
  )
}

export default Login