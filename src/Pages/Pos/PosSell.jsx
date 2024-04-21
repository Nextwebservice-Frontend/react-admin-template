import Category from "../../Components/Category/Category";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Dropdown } from "semantic-ui-react";

const countryOptions = [
  { key: "af", value: "af", flag: "af", text: "Afghanistan" },
  { key: "ax", value: "ax", flag: "ax", text: "Aland Islands" },
  { key: "al", value: "al", flag: "al", text: "Albania" },
  { key: "dz", value: "dz", flag: "dz", text: "Algeria" },
  { key: "as", value: "as", flag: "as", text: "American Samoa" },
  { key: "ad", value: "ad", flag: "ad", text: "Andorra" },
  { key: "ao", value: "ao", flag: "ao", text: "Angola" },
  { key: "ai", value: "ai", flag: "ai", text: "Anguilla" },
  { key: "ag", value: "ag", flag: "ag", text: "Antigua" },
  { key: "ar", value: "ar", flag: "ar", text: "Argentina" },
  { key: "am", value: "am", flag: "am", text: "Armenia" },
  { key: "aw", value: "aw", flag: "aw", text: "Aruba" },
  { key: "au", value: "au", flag: "au", text: "Australia" },
  { key: "at", value: "at", flag: "at", text: "Austria" },
  { key: "az", value: "az", flag: "az", text: "Azerbaijan" },
  { key: "bs", value: "bs", flag: "bs", text: "Bahamas" },
  { key: "bh", value: "bh", flag: "bh", text: "Bahrain" },
  { key: "bd", value: "bd", flag: "bd", text: "Bangladesh" },
  { key: "bb", value: "bb", flag: "bb", text: "Barbados" },
  { key: "by", value: "by", flag: "by", text: "Belarus" },
  { key: "be", value: "be", flag: "be", text: "Belgium" },
  { key: "bz", value: "bz", flag: "bz", text: "Belize" },
  { key: "bj", value: "bj", flag: "bj", text: "Benin" },
];

const PosSell = () => {
    const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="lg:m-10 m-5">
      <h1 className=" text-3xl mb-5  ">Purchase Invoice</h1>

      <div className=" grid lg:grid-cols-2 grid-cols-1 lg:gap-12 gap-2">
        <div className="grid-cols-6 border-2 border-gray-200 rounded-lg p-4">
          <p className="mt-2 ms-2 mb-2 text-gray-500">
            Supplier<sup className="text-red-600">*</sup>{" "}
          </p>
          <div className="flex gap-2">
            <Dropdown
              placeholder="Select Country"
              fluid
              search
              selection
              clearable
              options={countryOptions}
            />

            <div className=" ">
              <button
                type="button"
                onClick={openModal}
                className="rounded-md bg-black px-4 py-3 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
              >
                Person
              </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="" onClose={closeModal}>
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
                      <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          Payment successful
                        </Dialog.Title>
                        <div className="mt-2 flex gap-2 mb-5">
                          <div className="w-full">
                            <p>
                              Your Name<sup>*</sup>
                            </p>
                            <input
                              type="text"
                              placeholder="Type here"
                              className="input input-bordered w-full  "
                            />
                          </div>
                          <div className="w-full">
                            <p>
                              Your Name<sup>*</sup>
                            </p>
                            <input
                              type="text"
                              placeholder="Type here"
                              className="input input-bordered w-full  "
                            />
                          </div>
                        </div>

                        <div className="mt-2 flex gap-2 mb-5">
                          <div className="w-full">
                            <p>
                              Your Name<sup>*</sup>
                            </p>
                            <input
                              type="text"
                              placeholder="Type here"
                              className="input input-bordered w-full  "
                            />
                          </div>
                          <div className="w-full">
                            <p>
                              Your Name<sup>*</sup>
                            </p>
                            <input
                              type="text"
                              placeholder="Type here"
                              className="input input-bordered w-full  "
                            />
                          </div>
                        </div>

                        <div className="w-full mb-5">
                          <p>
                            Note<sup>*</sup>
                          </p>
                          <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full  "
                          />
                        </div>
                        <div className="w-full">
                          <p>
                            Address<sup>*</sup>
                          </p>
                          <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full  "
                          />
                        </div>

                        <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModal}
                          >
                            Got it, thanks!
                          </button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>
          {/* table  */}
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Product</th>
                  <th>MRP/SELL</th>
                  <th>QTY/PRICE</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Mobile</td>
                  <td>
                    <p>
                      <span className="font-bold">MRP:</span> 500
                    </p>
                    <p>
                      <span className="font-bold">MRP:</span> 500{" "}
                    </p>
                  </td>
                  <td>
                    <p>
                      <span className="font-bold">MRP:</span> 500
                    </p>
                    <p>
                      <span className="font-bold">MRP:</span> 500{" "}
                    </p>
                  </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>Laptop</td>
                  <td>
                    <p>
                      <span className="font-bold">MRP:</span> 500
                    </p>
                    <p>
                      <span className="font-bold">MRP:</span> 500{" "}
                    </p>
                  </td>
                  <td>
                    <p>
                      <span className="font-bold">MRP:</span> 500
                    </p>
                    <p>
                      <span className="font-bold">MRP:</span> 500{" "}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className=" Justify-end mt-5">
            <button className="btn btn-info ">Bill Pay</button>
          </div>
        </div>

        <div className="grid-cols-6 border-2 border-gray-200 rounded-lg p-4">
          <Category />
        </div>
      </div>
    </div>
  );
};

export default PosSell;