/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../../Reports/YearlyInvoice/CSS/TableTanStackCss.css'

const GeneralSetting = () => {
    const [image, setImage] = useState("");

    const convertToBase64 = (e) => {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setImage(reader.result);
        }
        reader.onerror = error => {
            console.log("Error : ", error);
        };
    }

    return (
        <div>
            {/* General Setting  */}
            <div className="flex flex-wrap align-items-center justify-content-between gap-2 my-5 pl-1">
                <h1 className="text-2xl md:text-2xl text-900 font-medium ">General Settings</h1>
            </div>
            {/* Sidebar part */}
            <div className="mt-5 md:mt-0">
                <div className="bg-base-100 shadow-xl border rounded-lg">
                    <h1 className="text-3xl font-normal pl-4 mb-2 border-b py-4 bg-[#21252908]">
                        Sidebar
                    </h1>
                    <div className="w-full">
                        <form className="">
                            <div className="flex flex-col md:flex-row justify-between lg:gap-4 w-full ">
                                <div className="ml-4 mr-4 lg:mr-4 md:w-[50%] ">
                                    <h1 className="md:mt-2 font-bold text-lg">
                                        Sidebar Logo
                                        <span className="pl-1 text-red-400">( Recommended W:250px,H:150px)</span>
                                    </h1>
                                    {/* image */}
                                    <div className='flex justify-between items-end mb-2 lg:mb-4 '>
                                        <div className="md:w-[50%] h-[200px] md:h-[185px] pt-2">
                                            {image == "" || image == null ?
                                                <button >
                                                    <img
                                                        className="h-[150px] w-[250px]"
                                                        src="https://i.ibb.co/Lv9p0W3/upload-image-icon.png"
                                                        alt="gh"
                                                    />
                                                    <span className="text-lg  md:text-xs xl:text-base">
                                                        <input type="file" id="myFile" accept="image/" onChange={convertToBase64} name="filename" className="mt-2" >
                                                        </input>
                                                    </span>
                                                </button> :
                                                <img src={image} className="h-full md:h-[175px]  w-[250px]" alt="" />}
                                        </div>
                                        <div className='text-2xl md:pr-10 w-[50%] text-end '>
                                            <h1 className=''>X</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-[65%] lg:w-[50%] pr-4 md:pr-6 pl-4 md:pl-0">
                                    {/* name */}
                                    <div className=" mt-6">
                                        <label htmlFor="width" className="text-xl leading-6 text-[#212529] font-serif">
                                            Logo Width<span className="pl-1 text-red-400">(In pixel)</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="logoWidth"
                                            className=" block w-full mt-2 rounded-md border-0 py-2.5 pl-4 pr-3 text-gray-200 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                                            placeholder="Width"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <label htmlFor="height" className="text-xl leading-6 text-[#212529] font-serif">
                                            Logo Height<span className="pl-1 text-red-400">(In pixel)</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="logoHeight"
                                            className="block w-full mt-2 rounded-md border-0 py-2.5 pl-4 pr-3 text-gray-200 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                                            placeholder="Height"
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className=" pl-5 border py-4 px-6 bg-[#21252908] text-end">
                        <button className='btn text-lg  font-normal bg-[#28C76F] text-white '>Update Logo</button>
                    </div>
                </div>
            </div>

            {/* Invoice part */}
            <div className="mt-16">
                <div className="bg-base-100 shadow-xl border rounded-lg">
                    <h1 className="text-3xl font-normal pl-4 mb-2 border-b py-4 bg-[#21252908]">
                        Invoice
                    </h1>
                    <div className="w-full">
                        <form className="">
                            <div className="flex flex-col md:flex-row justify-between lg:gap-4 w-full ">
                                <div className="ml-4 mr-4 lg:mr-4 md:w-[50%] ">
                                    <h1 className="md:mt-2 font-bold text-lg">
                                        Invoice Logo
                                        <span className="pl-1 text-red-400">( Recommended W:250px,H:150px)</span>
                                    </h1>
                                    <div className='flex justify-between items-end mb-2 lg:mb-4 '>
                                        <div className="md:w-[50%] h-[200px] md:h-[185px] pt-2">
                                            {image == "" || image == null ?
                                                <div>
                                                    <img
                                                        className="h-[150px] w-[250px]"
                                                        src="https://i.ibb.co/Lv9p0W3/upload-image-icon.png"
                                                        alt="gh"
                                                    />
                                                    <span className="text-lg  md:text-xs xl:text-base">
                                                        <input type="file" id="myFile" accept="image/" name="filename" className="mt-2" onChange={convertToBase64}>
                                                        </input>
                                                    </span>
                                                </div> :
                                                <img src={image} className="h-full md:h-[175px]  w-[250px]" alt="" />}
                                        </div>
                                        <div className='text-2xl md:pr-10 w-[50%] text-end '>
                                            <h1 className=''>X</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-[65%] lg:w-[50%] pr-4 md:pr-6 pl-4 md:pl-0">
                                    {/* logo width */}
                                    <div className=" mt-6">
                                        <label htmlFor="width" className="text-xl leading-6 text-[#212529] font-serif">
                                            Logo Width<span className="pl-1 text-red-400">(In pixel)</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="logoWidth"
                                            className=" block w-full mt-2 rounded-md border-0 py-2.5 pl-4 pr-3 text-gray-200 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                                            placeholder="Width"
                                        />
                                    </div>
                                    {/* logo height */}
                                    <div className="mt-4">
                                        <label htmlFor="height" className="text-xl leading-6 text-[#212529] font-serif">
                                            Logo Height<span className="pl-1 text-red-400">(In pixel)</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="logoHeight"
                                            className="block w-full mt-2 rounded-md border-0 py-2.5 pl-4 pr-3 text-gray-200 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                                            placeholder="Height"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* invoice back color */}
                            <div>

                            </div>

                            {/* invoice terms */}
                        </form>
                    </div>
                    <div className=" pl-5 border py-4 px-6 bg-[#21252908] text-end">
                        <button className='btn text-lg  font-normal bg-[#28C76F] text-white '>Update Logo</button>
                    </div>
                </div>
            </div>

            {/* Footer Text */}
            <div className="mt-16">
                <div className="bg-base-100 shadow-xl border rounded-lg">
                    <h1 className="text-3xl font-normal pl-4 mb-2 border-b py-4 bg-[#21252908]">
                        Footer Text
                    </h1>
                    <div className="w-full">
                        <form className="">
                            <div className='pl-4 py-2 pr-6'>
                                <p className="label-text text-base mr-7 pb-2">Footer Text<span className="text-red-500 pl-1">(required)</span></p>
                                <textarea className="textarea textarea-bordered w-[100%]" placeholder="Test text"></textarea>
                            </div>
                        </form>
                    </div>
                    <div className=" pl-5 border py-4 px-6 bg-[#21252908] text-end">
                        <button className='btn text-lg  font-normal bg-[#28C76F] text-white '>Update Text</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneralSetting;