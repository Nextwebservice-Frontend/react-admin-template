import { MdOutlineCampaign } from "react-icons/md";
import { MdEqualizer } from "react-icons/md";

const Notice = () => {
  return (
    <div className="border mt-7 w-full lg:mx-5 xl:mx-10 mx-auto  p-4 rounded shadow-2xl">
      <div className="md:grid grid-cols-2 justify-center items-center gap-6">
        <div className="w-full h-full border rounded">
          <span className="flex p-4 border-b-2 justify-start items-center gap-2 bg-gray-100">
            <MdOutlineCampaign className="text-2xl" />
            <h3 className="font-bold">নোটিশ</h3>
          </span>
          <p className="p-4">
            প্রতিষ্ঠানের ডাটা সুরক্ষার কথা মাথায় রেখে আমরা সফটওয়্যারের ডিলিট
            অপশন বন্ধ রেখেছি , আমরা আপনাদের অনুরোধ করবো ডিলিট না করে ইনাক্টিভ
            করুন। কিন্তু প্রতিষ্ঠানের আবেদনের ভিত্তিতে ডিলিট অপশনটি পুনরায় চালু
            করা যেতে পারে।
          </p>
        </div>
        <div className="w-full h-full border rounded md:mt-0 mt-5">
          <span className="flex p-4 border-b-2 justify-start items-center gap-2 bg-gray-100">
            <MdOutlineCampaign className="text-2xl" />
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
      <div className="md:grid grid-cols-3 justify-center items-center gap-6 mt-10">
        <div className="w-full h-full border rounded">
          <span className="flex font-bold p-4 border-b-2 justify-start items-center gap-2 bg-gray-100">
            <MdEqualizer className="text-2xl" />
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
