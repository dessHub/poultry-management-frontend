import { Fragment, FC, useRef, Dispatch, SetStateAction} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/solid'

interface Props {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    children: JSX.Element
}

const Modal: FC<Props> = ({open, setOpen, children}) => {
    const closeButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={closeButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-neutral-900 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-neutral-900 text-neutral-300 text-left border border-neutral-500 shadow-xl transition-all sm:my-8 w-full sm:max-w-lg">
                <div className='flex justify-between items-center p-3 border-b border-neutral-500'>
                    <div className='text-xl md:text-2xl font-bold'>
                        Create a flock
                    </div>
                    <button 
                        onClick={() => setOpen(false)}
                        ref={closeButtonRef}
                        className='flex items-center justify-center hover:bg-neutral-800 hover:rounded-md h-8 w-8 md:h-10 md:w-10'
                    >
                        <XMarkIcon className="h-5 md:h-7 w-5 md:w-7" />
                    </button>
                </div>

                <>
                    {children}
                </>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Modal;