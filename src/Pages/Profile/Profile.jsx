/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ProfileModal from "./ProfileModal";
import './ProfileCss/Profile.css'
import { IoIosImages } from "react-icons/io";

const Profile = () => {
  const [image,setImage ] = useState("");

  const convertToBase64 = (e) =>{
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result);
    }
    reader.onerror = error => {
      console.log("Error : ",error);
    };

  }

  
  return (
    <div className="">
      <h1 className="my-8 w-full mx-auto font-bold text-3xl">Personal Profile</h1>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {/* user details part */}
        <div className="card w-full md:w-[40%] lg:w-[30%]  bg-base-100 shadow-xl rounded-lg border">
          <h1 className="text-2xl font-medium pl-5 mb-6 border-b py-4 ">
            User Details
          </h1>
          <figure>
            <img
              className="w-[110px] h-[110px] rounded-lg"
              src="https://redinvoice.com/backend/app-assets/images/avatars/11.png"
              alt="girls-image"
            />
          </figure>
          {/* superAdmin title */}
          <div className="text-center">
            <h1 className="mt-2 text-2xl font-medium ">SuperAdmin</h1>
          </div>
          {/* superAdmin button */}
          <button className="w-[24%] md:w-[32%] border mx-auto rounded-lg text-white bg-[#6C757D] font-bol mb-3">SuperAdmin</button>
          <div className=" p-0 pl-5 mb-4">
            {/* superAdmin name */}
            <h2 className=""><span className="font-bold text-lg md:text-base lg:text-base xl:text-lg">Name :</span> SuperAdmin</h2>
            {/* superAdmin email */}
            <p className=""><span className="font-bold text-lg md:text-base lg:text-base xl:text-lg "> Email :</span><span className="lg:text-sm xl:text-base">admindhaka@gmail.com</span></p>
            {/* superAdmin phone number*/}
            <p className=""><span className="font-bold text-lg md:text-base lg:text-base xl:text-lg">Mobile: </span><span className="lg:text-sm xl:text-base">01799600000</span></p>
          </div>
          {/* profile modal component */}
          <ProfileModal></ProfileModal>
        </div>
        {/* Update Profile Basic part(2nd part) */}
        <div className="mt-5  md:mt-0 md:w-[60%] lg:w-[70%]">
          <div className="card bg-base-100 shadow-xl border rounded-lg">
            <h1 className="text-2xl font-medium pl-5 mb-2 border-b py-4 ">
              Update Profile Basic
            </h1>
            <div className="w-full">
              <form className="">
                <div className="flex flex-col md:flex-row justify-between lg:gap-10 w-full ">
                  <div className="w-full md:w-[65%] lg:w-full pr-4 md:pr-0">
                    {/* name */}
                    <div className="form-control pl-4 mt-4 mb-1">
                      <label className="">
                        <span className="label-text text-base font-medium ">
                          Name<span className="pl-1 text-red-400">(required)</span>
                        </span>
                      </label>
                      <input
                        type="name"
                        placeholder="Name"
                        className="input input-bordered  lg:w-full py-0"
                        required
                      />
                    </div>
                    {/* Mobile */}
                    <div className="form-control pl-4 mb-1">
                      <label className="">
                        <span className="label-text text-base font-medium">
                          Mobile<span className="pl-1 text-red-400">(required)</span>
                        </span>
                      </label>
                      <input
                        type="number"
                        placeholder="Number"
                        className="input input-bordered  lg:w-full"
                        required
                      />
                    </div>
                    {/* Email */}
                    <div className="form-control pl-4">
                      <label className="">
                        <span className="label-text text-base font-medium">
                          Email<span className="pl-1 text-red-400">(required)</span>
                        </span>
                      </label>
                      <input
                        type="email"
                        placeholder="email"
                        className="input input-bordered  lg:w-full"
                        required
                      />
                      {/* defaultValue={Email} */}
                    </div>
                  </div>
                  {/* Profile Photo */}
                  <div className="ml-4 mr-4 lg:mr-4 md:w-[35%] ">
                    <h1 className="md:mt-5  text-base font-medium ">
                      Profile Photo
                    </h1>
                    <div className="w-[100%] h-[240px] md:h-[180px] rounded-xl border-4 border-dashed ">
                      {image == "" || image == null ? 
                        <label id="uploadImage" htmlFor="uploadBtn" className="h-[100%] w-[100%]"><IoIosImages className="border h-[100%] w-[100%]"/></label>
                       : <img src={image} className="w-full md:w-[100%] lg:w-[100%] h-[100%] p-2" alt="" />}
                      <span className="text-lg md:text-xs xl:text-base pl-2"></span> 
                      <input type="file" id="uploadBtn" onChange={convertToBase64} />
                    </div>
                  </div>
                </div>
                {/* role */}
                <div className="form-control pl-4 pr-4">
                  <label className="label">
                    <span className="label-text text-base font-medium ">
                      Role<span className="pl-1 text-red-400">(required)</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Role"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* button */}
                <div className="py-2 w-full text-center border mt-2">
                  <button className="w-[90%] md:w-[96%] h-[40px] border bg-[#28C76F]  text-white rounded-lg">
                    Update Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
