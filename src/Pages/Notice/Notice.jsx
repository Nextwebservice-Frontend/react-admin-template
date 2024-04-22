import { MdOutlineCampaign } from "react-icons/md";
import { FaRegUser, FaUsersBetweenLines } from "react-icons/fa6";
import BarChart from "../../Components/dashboard/BarChart/BarChart";
import Piechart from '../../Components/dashboard/Piechart/Piechart'
import ReactDataTable from "../../Components/dashboard/DataTable/ReactDataTable";
const Notice = () => {
  return (
    <div className="dark:text-gray-300 text-gray-600 mt-[10px] w-full mx-auto p-4 px-0 rounded ">
      <div className="md:grid grid-cols-2 justify-center items-center gap-6">
        <div style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 3px 2px' }} className="w-full h-full border dark:border-none rounded-md dark:bg-[#2F3349]">
          <span style={{ borderRadius: '4px 4px 0 0' }} className="flex p-4 py-2 border-b-2 dark:border-none  justify-start items-center gap-2 bg-gray-100 dark:bg-gray-500 ">
            <MdOutlineCampaign className="text-2xl" />
            <h6 className="font-bold text-lg ">নোটিশ</h6>
          </span>
          <p className="p-4 ">
            প্রতিষ্ঠানের ডাটা সুরক্ষার কথা মাথায় রেখে আমরা সফটওয়্যারের ডিলিট
            অপশন বন্ধ রেখেছি , আমরা আপনাদের অনুরোধ করবো ডিলিট না করে ইনাক্টিভ
            করুন। কিন্তু প্রতিষ্ঠানের আবেদনের ভিত্তিতে ডিলিট অপশনটি পুনরায় চালু
            করা যেতে পারে।
          </p>
        </div>
        <div style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 3px 2px' }} className="w-full h-full border dark:border-none rounded-md md:mt-0 mt-5 dark:bg-[#2F3349]">
          <span style={{ borderRadius: '4px 4px 0 0' }} className="flex p-4 py-2 border-b-2 dark:border-none  justify-start items-center gap-2 bg-gray-100 dark:bg-gray-500 ">
            <FaUsersBetweenLines className="text-2xl" />

            <h6 className="font-bold text-lg">ব্যাবহারকারী</h6>
          </span>
          <div className="p-4">
            এই সফটওয়্যারটি Tiayra Laser & Aesthetic Center এর জন্য প্রস্তুতকৃত।{" "}
            <br />
            <span className="flex justify-between items-center pt-2">
              <p>ক্লায়েন্ট</p>  <span className="min-w-fit bg-[#DFF7E9] text-[#3ECD7E] font-bold text-xs py-[2px] px-1 rounded">Unlimited</span>
            </span>
            <span className="flex justify-between items-center pt-2">
              <p>ইনভয়েস</p>  <span className="min-w-fit bg-[#DFF7E9] text-[#3ECD7E] font-bold text-xs py-[2px] px-1 rounded">Unlimited</span>
            </span>
            <span className="flex justify-between items-center pt-2">
              <p>সার্ভিস</p>  <span className="min-w-fit bg-[#FCE5E6] text-[#EC6364] font-bold text-xs py-[2px] px-1 rounded">limited</span>
            </span>

          </div>
        </div>
      </div>
      <div className="md:grid grid-cols-4 justify-center items-center mt-6 gap-6">
        <div style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 3px 2px' }} className="w-full h-full border dark:border-none rounded-md dark:bg-[#2F3349]">
          <span style={{ borderRadius: '4px 4px 0 0' }} className="flex p-4 py-2 border-b-2 dark:border-none  justify-start items-center gap-2 bg-gray-100 dark:bg-gray-500 ">
            <MdOutlineCampaign className="text-2xl" />
            <h6 className="font-bold text-lg ">নোটিশ</h6>
          </span>
          <p className="p-4 text-justify">
            প্রতিষ্ঠানের ডাটা সুরক্ষার কথা মাথায় রেখে আমরা সফটওয়্যারের ডিলিট
            অপশন বন্ধ রেখেছি , আমরা আপনাদের অনুরোধ করবো ডিলিট না করে ইনাক্টিভ
            করুন। কিন্তু প্রতিষ্ঠানের আবেদনের ভিত্তিতে ডিলিট অপশনটি পুনরায় চালু
            করা যেতে পারে।
          </p>
        </div>
        <div style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 3px 2px' }} className="w-full h-full border dark:border-none rounded-md dark:bg-[#2F3349]">
          <span style={{ borderRadius: '4px 4px 0 0' }} className="flex p-4 py-2 border-b-2 dark:border-none  justify-start items-center gap-2 bg-gray-100 dark:bg-gray-500 ">
            <MdOutlineCampaign className="text-2xl" />
            <h6 className="font-bold text-lg ">নোটিশ</h6>
          </span>
          <p className="p-4 text-justify">
            প্রতিষ্ঠানের ডাটা সুরক্ষার কথা মাথায় রেখে আমরা সফটওয়্যারের ডিলিট
            অপশন বন্ধ রেখেছি , আমরা আপনাদের অনুরোধ করবো ডিলিট না করে ইনাক্টিভ
            করুন। কিন্তু প্রতিষ্ঠানের আবেদনের ভিত্তিতে ডিলিট অপশনটি পুনরায় চালু
            করা যেতে পারে।
          </p>
        </div>
        <div style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 3px 2px' }} className="w-full h-full border dark:border-none rounded-md dark:bg-[#2F3349]">
          <span style={{ borderRadius: '4px 4px 0 0' }} className="flex p-4 py-2 border-b-2 dark:border-none  justify-start items-center gap-2 bg-gray-100 dark:bg-gray-500 ">
            <MdOutlineCampaign className="text-2xl" />

            <h6 className="font-bold text-lg ">নোটিশ</h6>
          </span>
          <p className="p-4 text-justify">
            প্রতিষ্ঠানের ডাটা সুরক্ষার কথা মাথায় রেখে আমরা সফটওয়্যারের ডিলিট
            অপশন বন্ধ রেখেছি , আমরা আপনাদের অনুরোধ করবো ডিলিট না করে ইনাক্টিভ
            করুন। কিন্তু প্রতিষ্ঠানের আবেদনের ভিত্তিতে ডিলিট অপশনটি পুনরায় চালু
            করা যেতে পারে।
          </p>
        </div>
        <div style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 3px 2px' }} className="w-full h-full border dark:border-none rounded-md md:mt-0 mt-5 dark:bg-[#2F3349]">
          <span style={{ borderRadius: '4px 4px 0 0' }} className="flex p-4 py-2 border-b-2 dark:border-none  justify-start items-center gap-2 bg-gray-100 dark:bg-gray-500 ">
            <FaUsersBetweenLines className="text-2xl" />

            <h6 className="font-bold text-lg">ব্যাবহারকারী</h6>
          </span>
          <div className="p-4">
            এই সফটওয়্যারটি Tiayra Laser & Aesthetic Center এর জন্য প্রস্তুতকৃত।{" "}
            <br />
            <span className="flex justify-between items-center pt-2">
              <p>ক্লায়েন্ট</p>  <span className="min-w-fit bg-[#DFF7E9] text-[#3ECD7E] font-bold text-xs py-[2px] px-1 rounded">Unlimited</span>
            </span>
            <span className="flex justify-between items-center pt-2">
              <p>ইনভয়েস</p>  <span className="min-w-fit bg-[#DFF7E9] text-[#3ECD7E] font-bold text-xs py-[2px] px-1 rounded">Unlimited</span>
            </span>
            <span className="flex justify-between items-center pt-2">
              <p>সার্ভিস</p>  <span className="min-w-fit bg-[#FCE5E6] text-[#EC6364] font-bold text-xs py-[2px] px-1 rounded">limited</span>
            </span>

          </div>
        </div>
      </div>
      <div className="md:grid grid-cols-3 justify-center items-center gap-6 mt-6 ">
        <div style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 3px 2px' }} className="w-full h-full relative border dark:border-none rounded-md dark:bg-[#2F3349]">
          <span style={{ borderRadius: '4px 4px 0 0' }} className="flex p-4 py-2 border-b-2 dark:border-none  justify-start items-center gap-2 bg-gray-100 dark:bg-gray-500 ">
            <FaRegUser className="text-xl" />

            <h6>Users</h6>
          </span>
          <p className="px-4 py-2 font-bold">total</p>
          <p className="px-4 py-2 font-bold text-xl">2</p>
          <button className="bg-blue-500 w-full py-2 rounded-b-md absolute bottom-0 left-0 hover:bg-blue-600 text-white font-medium">
            User list
          </button>
        </div>
        <div style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 3px 2px' }} className="w-full h-full">
          <div className="max-w-[320px] mx-auto">
            <BarChart />
          </div>
        </div>
        <div style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 3px 2px' }} className="w-full h-full">
        <div  className="max-w-[320px] mx-auto">
            <Piechart />
          </div>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 gap-1 mt-6">
      </div>
      {/* <ReactDataTable/> */}
    </div>

  );
};

export default Notice;
