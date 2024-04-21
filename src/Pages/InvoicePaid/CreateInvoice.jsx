import { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import Select from "react-select";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const CreateInvoice = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <>
      <div className="flex flex-col md:flex-row w-[96%] mx-auto md:w-[100%] gap-10 mb-20">
        {/* Expanse receive list (1st part) */}
        <div className="border dark:border-gray-700 mt-7 w-full md:w-[76%] mx-auto rounded shadow-2xl pb-16 ">
          <div className="flex flex-col md:flex-row justify-between px-5 pt-5 gap-2">
            <img
              className="mb-3 w-[90%] md:w-[50%] lg:w-[40%] h-[150px]"
              src="https://cashbaksho.com/backend/billing_invoice_logo.png"
              alt=""
            />
            <div className="flex flex-col lg:items-end my-4 lg:my-0">
              <div className="mb-2">
                <span className="label-text text-lg mr-9 text-black dark:text-white">
                  Invoice Date :{" "}
                </span>
                <input
                  type="date"
                  placeholder="Type here"
                  className="input input-bordered w-[220px] h-[40px] bg-[#f7f7f7] dark:bg-base-100 "
                />
              </div>
              <div>
                <span className="label-text text-lg text-black dark:text-white">
                  Invoice Receiver :{" "}
                </span>
                <input
                  type="text"
                  placeholder="Receiver"
                  className="input input-bordered w-[220px] h-[40px] bg-[#f7f7f7] dark:bg-base-100"
                />
              </div>
            </div>
          </div>

          <hr />
          <div className="flex justify-between items-center my-2 gap-3 mx-4">
            <div className="w-[50%]">
              <label htmlFor="" className="text-black dark:text-white ">
                Billing Branch <span className="text-red-400">(required)</span>
              </label>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
              />
            </div>
            <div className="w-[50%]">
              <label htmlFor="" className="text-black dark:text-white ">
                Billing Branch <span className="text-red-400">(required)</span>
              </label>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
              />
            </div>
          </div>

          <div className="flex  my-2 justify-start mx-4 ">
            <div className="w-[50%] pl-2">
              <p className="text-gray-500">
                <span className=" text-lg text-gray-600">Name : </span>Uttaraa
              </p>
              <p className="text-gray-500">
                <span className=" text-lg text-gray-600">Mobile : </span>
                01200000000
              </p>
              <p className="text-gray-500">
                <span className=" text-lg text-gray-600">Email : </span>
                uttara@gmail.com
              </p>
              <p className="text-gray-500">
                <span className=" text-lg text-gray-600">Address : </span>Uttara
              </p>
            </div>
            <div className="w-[50%] pl-2">
              <p className="text-gray-500">
                <span className=" text-lg text-gray-600">Name : </span>Uttaraa
              </p>
              <p className="text-gray-500">
                <span className=" text-lg text-gray-600">Mobile : </span>
                01200000000
              </p>
              <p className="text-gray-500">
                <span className=" text-lg text-gray-600">Email : </span>
                uttara@gmail.com
              </p>
              <p className="text-gray-500">
                <span className=" text-lg text-gray-600">Address : </span>Uttara
              </p>
            </div>
          </div>
          <hr />

          {/* service item */}

          <div className="px-4 mt-2 ">
            <h2 className="text-lg text-gray-600">Service Item</h2>
            <div className="gap-3 border p-2">
              <div className="flex justify-between items-center my-2 gap-2 ">
                <div className="w-[50%]">
                  <label htmlFor="" className="text-black dark:text-white ">
                    Service Category{" "}
                    <span className="text-red-400">(required)</span>
                  </label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                  />
                </div>
                <div className="w-[50%]">
                  <label htmlFor="" className="text-black dark:text-white ">
                    Service Select{" "}
                    <span className="text-red-400">(required)</span>
                  </label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                  />
                </div>
              </div>

              <div className="grid grid-cols-4 w-[100%] gap-2">
                <div className="">
                  <label htmlFor="" className="text-black dark:text-white ">
                    Service Cost{" "}
                    <span className="text-red-400">(required)</span>
                  </label>
                  <input
                    type="number"
                    id="fname"
                    name="fname"
                    className="border py-2 boder-black rounded-md w-[100%]"
                  ></input>
                </div>
                <div className="">
                  <label htmlFor="" className="text-black dark:text-white ">
                    Quantity <span className="text-red-400">(required)</span>
                  </label>
                  <input
                    type="number"
                    id="fname"
                    name="fname"
                    className="border py-2 boder-black rounded-md w-[100%]"
                  ></input>
                </div>

                <div className="">
                  <label htmlFor="" className="text-black dark:text-white ">
                    Discount <span className="text-red-400">(required)</span>
                  </label>
                  <input
                    type="number"
                    id="fname"
                    name="fname"
                    className="border py-2 boder-black rounded-md w-[100%]"
                  ></input>
                </div>

                <div className="">
                  <label htmlFor="" className="text-black dark:text-white ">
                    Total Price <span className="text-red-400">(required)</span>
                  </label>
                  <input
                    type="number"
                    id="fname"
                    name="fname"
                    className="border py-2 boder-black rounded-md w-[100%]"
                  ></input>
                </div>
              </div>

              <div className="mt-2">
                <label htmlFor="" className="text-black dark:text-white ">
                  Description <span className="text-red-400">(required)</span>
                </label>
                <textarea
                  name=""
                  rows="4"
                  cols="50"
                  className="w-[100%] border"
                ></textarea>
              </div>
            </div>

            <button className="btn text-white mt-2 bg-purple-500 border-none hover:bg-purple-600 mb-2">
              Add Service
            </button>
          </div>

          <hr />
          <div className="mt-3 mx-4 flex flex-col items-end">
            <div className="mt-4 mb-2">
                  <label htmlFor="" className="text-black dark:text-white ">
                  Service Qty:{" "}
                  </label>
                  <input type="number" id="fname" name="fname" className="border py-2 boder-black rounded-md "></input>
                </div>
                <div className="mb-2">
                  <label htmlFor="" className="text-black dark:text-white ">
                  Sub Total:{" "}
                   
                  </label>
                  <input type="number" id="fname" name="fname" className="border py-2 boder-black rounded-md "></input>
                  
                </div>
                <div className="mb-2">
                  <label htmlFor="" className="text-black dark:text-white ">
                  Discount:{" "}
                   
                  </label>
                  <input type="number" id="fname" name="fname" className="border py-2 boder-black rounded-md"></input>
                  
                </div>

                <div className="mb-2">
                  <label htmlFor="" className="text-black dark:text-white ">
                  Total Amount:{" "}
                   
                  </label>
                  <input type="number" id="fname" name="fname" className="border py-2 boder-black rounded-md "></input>
                  
                </div>
          </div>
        </div>
        {/* Select expanse  (2nd part) w-[340px] */}
        <div className="w-[96%] md:w-[24%] m-2 md:m-0">
          <div className="border dark:border-none mt-7 mx-auto rounded">
            <h4 className="text-lg text-black dark:text-white pl-3 py-2 border font-bold bg-[#f7f7f7] dark:bg-base-100 dark:border-none ">
              <strong className="flex items-center gap-2 justify-start">
                <FaAlignRight />
                Select Expense
              </strong>
            </h4>
            <hr className="p-0 m-0 dark:invisible" />
          </div>
          {/* receipt notes */}
          <div className="border-x dark:border-gray-900 mt-7 mx-auto rounded ">
            <h4 className="text-lg text-black dark:text-white dark:bg-base-100 pl-3 py-2 font-bold bg-[#f7f7f7]">
              <strong className="flex items-center gap-2 justify-start">
                <FaAlignRight />
                Receipt Notes
              </strong>
            </h4>
            <hr className="p-0 m-0 dark:invisible" />
            <div className="pl-3 py-2">
              <p className="label-text text-black dark:text-white text-base mr-7 pb-2">
                Notes<span className="text-red-500">(required)</span>
              </p>
              <textarea
                className="textarea textarea-bordered w-[95%] bg-white dark:bg-gray-600"
                placeholder="Bio"
              ></textarea>
            </div>
            <hr className="p-0 m-0 dark:invisible" />
            <div className="py-2 w-full text-center bg-[#f7f7f7] dark:border-none dark:bg-base-100 ">
              <button className="bg-[#5cb85c] w-[90%] h-[40px] text-white text-xl dark:border-none">
                Save Receipt
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateInvoice;
