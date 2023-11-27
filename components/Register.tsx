import React from 'react'
import Modal from './Modal'
import Input from './Input'
import CloseIcon from '@mui/icons-material/Close';
import { useModalContext } from '@/app/contexts/ModalContext'

const Register: React.FC<any> = ({ setShowRegister }) => {
  const { setIsModal } = useModalContext();

  const onClose = () => {
    setIsModal(false);
    setShowRegister(false);
  }

  const body = (
    <div className='w-full h-full flex flex-col'>
      <div className='sticky top-0 backdrop-blur-md p-4 flex flex-row-reverse bg-[#ffffffa6] dark:bg-[#000000a6] z-1000' onClick={onClose}>
        <CloseIcon sx={{ fontSize: 23 }}/>
      </div>
      <div className='flex flex-col h-auto px-1 pt-5 pb-14 w-full max-w-[350px] m-auto'>
        <div className='font-bold text-3xl'>Register</div>
        <div className='content-center flex-col mt-5 w-full max-w-[350px]'>
          <Input type="text" name='fullname' placeholder='Full Name'/>
          <Input type="email" name='email' placeholder='Email Address'/>
          <Input type="password" name='password' placeholder='Password'/>
          <Input type="password" name='confirmPassword' placeholder='Confirm Password'/>
        </div>
        <div className="ModalFooter w-full max-w-[350px] content-center my-1">
          <button className='p-2 w-full rounded-full text-sm font-bold text-white bg-blue-600 hover:bg-blue-800'>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <Modal body={body}/>
  )
}

export default Register