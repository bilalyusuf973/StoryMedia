import React, { useCallback } from 'react'
import CloseIcon from '@mui/icons-material/Close';

type ModalProps = {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({isOpen, onClose, onSubmit, title, body, footer, actionLabel, disabled}) => {

  const handleClose = useCallback(() => {
    if(disabled) return;

    onClose();
  },[disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if(disabled) return;

    onSubmit();
  },[disabled, onSubmit]);
  
  return (
    <>
        {true && <div className='fixed content-center z-20 overflow-x-hidden overflow-y-auto w-full h-full bg-neutral-800 bg-opacity-70'>
            <div className='relative mx-auto w-full md:w-3/6 h-full'>
                <div className='flex flex-col bg-white dark:bg-[#000000] w-full h-full rounded-md shadow-md'>
                  <div className="ModalHeader flex items-center justify-between">
                    <span></span>
                    <span><CloseIcon/></span>
                  </div>
                  <div className="ModalBody"></div>
                  <div className="ModalFooter"></div>
                </div>
            </div>
        </div>}
    </>
  )
}

export default Modal