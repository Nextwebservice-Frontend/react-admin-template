import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const RoleModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCreateRole = async (e) => {
    e.preventDefault();
    const newRole = e.target.role.value;
    console.log(newRole);
  };
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="btn rounded-none bg-green-500 text-white hover:bg-green-600"
      >
        New Role
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center max-w-3xl mx-auto">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all z-50 w-full">
                  <Dialog.Title
                    as="h3"
                    className="p-4 font-bold text-xl text-gray-900"
                  >
                    <div className="flex justify-between items-center gap-2">
                      <h1 className=" text-normal md:text-xl ">New Role</h1>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="close-button"
                      >
                        X
                      </button>
                    </div>
                  </Dialog.Title>
                  <form onSubmit={handleCreateRole} className=" w-full p-4">
                    <input
                      type="text"
                      name="role"
                      className="border text-gray-900 text-sm rounded-sm block w-full p-2.5 focus:outline-none"
                      placeholder="Enter Role"
                      required
                    />
                    <div className="mt-3 flex flex-row justify-end gap-2">
                      <button
                        onClick={() => setIsOpen(false)}
                        type="submit"
                        className="px-5 py-1 rounded-sm bg-green-500 text-white hover:bg-green-600"
                      >
                        Submit
                      </button>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="px-5 py-1 rounded-sm bg-red-500 text-white hover:bg-red-600"
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default RoleModal;
