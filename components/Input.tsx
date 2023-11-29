import React from 'react'

type InputProps = {
    type: string;
    name: string;
    placeholder: string;
    value?: string;
    onChange?: () => void;
}

const Input: React.FC<InputProps> = ({type, name, placeholder, value, onChange }) => {
  return (
    <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} className='rounded-full text-md indent-2 p-2 w-full outline-none border-[1px] dark:bg-black dark:text-white border-neutral-600 focus:border-sky-500'></input>
  )
}

export default Input