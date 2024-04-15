import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const ExpenseListModal = ({isOpen, setIsOpen}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value;
    
  }
  
  return (
    <>
      <div className="py-2 w-full text-center">
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-[900px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      New Expense
                    </Dialog.Title>
                    <hr className="mt-4" />
                    <form onSubmit={handleSubmit}>
                    <div className="flex justify-center">
                      <div className="mt-2 w-full">
                        <h4 className="text-sm mb-1">Expense Category (required)</h4>
                        <input
                          type="text"
                          name="name"
                          placeholder="Expense Category "
                          className="input input-bordered  w-full "
                        />
                      </div>
                    </div>
                    <div className="mt-4 text-end ">
                      <button onClick={() => setIsOpen(false)} type="submit" className="bg-green-400 text-white px-4 py-2">
                        Add
                      </button>
                    </div>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
};

export default ExpenseListModal;
