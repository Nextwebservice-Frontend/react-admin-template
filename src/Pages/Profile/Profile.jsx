/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ProfileModal from "./ProfileModal";
import '../Services/ServiceList/Css/ServiceListCss.css'

const Profile = () => {
  return (
    <div className="">
      <h1 className="my-10 md:w-[750px]  lg:w-[1300px] mx-auto font-bold text-3xl">Personal Profile</h1>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {/* user details part */}
        <div className="card w-full md:w-[40%] lg:w-[30%]  bg-base-100 shadow-xl rounded-lg border">
          <h1 className="text-2xl font-medium pl-5 mb-6 border py-4 ">
            User Details
          </h1>
          <figure>
            <img
              className="w-[120px] h-[120px] md:w-[46%] lg:w-[35%]  rounded-lg"
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
            <h2 className=""><span className="font-bold text-lg">Name :</span> SuperAdmin</h2>
            {/* superAdmin email */}
            <p className=""><span className="font-bold text-lg"> Email :</span>  admindhaka@gmail.com</p>
            {/* superAdmin phone number*/}
            <p className=""><span className="font-bold text-lg">Mobile: </span>  01799600000</p>
          </div>
          {/* profile modal component */}
          <ProfileModal></ProfileModal>
        </div>
        {/* Update Profile Basic part(2nd part) */}
        <div className="mt-5  md:mt-0 md:w-[60%] lg:w-[70%]">
          <div className="card  bg-base-100 shadow-xl border ">
            <h1 className="text-2xl font-medium pl-5 mb-2 border py-4 ">
              Update Profile Basic
            </h1>
            <div className="w-full">
              <form className="">
                <div className="flex flex-col md:flex-row justify-between lg:gap-10 w-full ">
                  <div className="w-full md:w-[65%] lg:w-full pr-4 md:pr-0">
                    {/* name */}
                    <div className="form-control pl-4 mt-4">
                      <label className="">
                        <span className="label-text text-base font-medium">
                          Name<span className="pl-1 text-red-400">(required)</span>
                        </span>
                      </label>
                      <input
                        type="name"
                        placeholder="Name"
                        className="input input-bordered  lg:w-full"
                        required
                      />
                    </div>
                    {/* Mobile */}
                    <div className="form-control pl-4">
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
                    <div className=" md:w-full h-[140px] rounded-xl border-4 border-dashed ">
                      <img
                        className="h-[100px] md:w-[90%] lg:w-[240px] mx-auto "
                        src="https://cdn-icons-png.flaticon.com/512/4211/4211763.png"
                        alt=""
                      />
                      <input type="file" id="myFile" name="filename text-center "></input>
                     
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
