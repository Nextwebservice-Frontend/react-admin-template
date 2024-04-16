import { MdOutlineCampaign } from "react-icons/md";
import { FaRegUser, FaUsersBetweenLines } from "react-icons/fa6";

const Notice = () => {
  return (
      <div style={{boxShadow: 'rgba(0, 0, 0, 0.1) 2px 3px 8px '}} className="border dark:border-none text-[#5D596C] dark:text-gray-300 md:mt-6 mt-3 w-full mx-auto bg-white dark:bg-[#2F3349] p-4 rounded ">
        <div className="md:grid grid-cols-2 justify-center items-center gap-6">
          <div style={{boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 3px 2px'}} className="w-full h-full border dark:border-none rounded-md ">
            <span className="flex p-4 py-2 border-b-2 dark:border-none  justify-start items-center gap-2 bg-gray-100 dark:bg-gray-500 ">
              <MdOutlineCampaign className="text-2xl" />
              <h3 className="font-bold">নোটিশ</h3>
            </span>
            <p className="p-4 ">
              প্রতিষ্ঠানের ডাটা সুরক্ষার কথা মাথায় রেখে আমরা সফটওয়্যারের ডিলিট
              অপশন বন্ধ রেখেছি , আমরা আপনাদের অনুরোধ করবো ডিলিট না করে ইনাক্টিভ
              করুন। কিন্তু প্রতিষ্ঠানের আবেদনের ভিত্তিতে ডিলিট অপশনটি পুনরায় চালু
              করা যেতে পারে।
            </p>
          </div>
          <div style={{boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 3px 2px'}} className="w-full h-full border dark:border-none rounded-md md:mt-0 mt-5">
          <span className="flex p-4 py-2 border-b-2 dark:border-none  justify-start items-center gap-2 bg-gray-100 dark:bg-gray-500 ">
              <FaUsersBetweenLines  className="text-2xl" />
              <h3 className="font-bold">ব্যাবহারকারী</h3>
            </span>
            <p className="p-4">
              এই সফটওয়্যারটি Tiayra Laser & Aesthetic Center এর জন্য প্রস্তুতকৃত।{" "}
              <br />
              ক্লায়েন্ট - Unlimited <br />
              সার্ভিস - Unlimited <br />
              ইনভয়েস - Unlimited
            </p>
          </div>
        </div>
        <div className="md:grid grid-cols-3 justify-center items-center gap-6 mt-10 ">
          <div style={{boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 3px 2px'}} className="w-full h-full border dark:border-none rounded-md">
          <span className="flex p-4 py-2 border-b-2 dark:border-none  justify-start items-center gap-2 bg-gray-100 dark:bg-gray-500 ">
              <FaRegUser  className="text-xl" />
              <h3>Users</h3>
            </span>
            <p className="px-4 py-2 font-bold">total</p>
            <p className="px-4 py-2 font-bold text-xl">2</p>
            <button className="bg-blue-500 w-full py-2 hover:bg-blue-600 text-white font-medium">
              User list
            </button>
          </div>
        </div>
      </div>

  );
};

export default Notice;
