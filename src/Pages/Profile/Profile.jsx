/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ProfileModal from "./ProfileModal";

const Profile = () => {
  return (
    <div className="">
      <h1 className="my-10 font-bold text-3xl">Personal Profile</h1>

      <div className="flex flex-col md:flex-row gap-2 justify-center">
        {/* user details part */}
        <div className="card w-1/3 bg-base-100 shadow-xl rounded-lg border">
          <h1 className="text-2xl font-medium pl-5 mb-6 border py-4 ">
            User Details
          </h1>

          <figure>
            <img
              className="w-[120px] h-[120px] md:w-[100px] md:h-[100px] rounded-lg"
              src="https://redinvoice.com/backend/app-assets/images/avatars/11.png"
              alt="girls-image"
            />
          </figure>

          <div className="text-center">
            <h1 className="mt-4 text-2xl font-medium">Superadmin</h1>
          </div>
          <button className="btn w-[140px] mx-auto">SuperadminButton</button>

          <div className="card-body p-0 pl-5">
            <h2 className="">Name : Superadmin</h2>
            <p className="">Email : admindhaka@gmail.com</p>
            <p className="pt-0 pb-3"> Mobile: 01799600000</p>
          </div>
          {/* profile modal compponent */}
          <ProfileModal></ProfileModal>
        </div>
        {/* Update Profile Basic part(2nd part) */}
        <div className="mt-5 w-2/3 md:mt-0 ">
          <div className="card  bg-base-100 shadow-xl border ">
            <h1 className="text-2xl font-medium pl-5 mb-6 border py-4 ">
              Update Profile Basic
            </h1>
            <div className="">
              <form className="">
                {/* name */}
                <div className="flex flex-col md:flex-row gap-10">
                  <div className="">
                    <div className="form-control pl-4 ">
                      <label className="label">
                        <span className="label-text text-base font-medium">
                          Name
                        </span>
                      </label>
                      <input
                        type="name"
                        placeholder="Name"
                        className="input input-bordered w-[390px] md:w-[420px]"
                        required
                      />
                      {/* defaultValue={Name} */}
                    </div>
                    {/* Mobile */}
                    <div className="form-control pl-4">
                      <label className="label">
                        <span className="label-text text-base font-medium">
                          Mobile
                        </span>
                      </label>
                      <input
                        type="number"
                        placeholder="Number"
                        className="input input-bordered w-[390px] md:w-[420px]"
                        required
                      />
                    </div>
                    {/* Email */}
                    <div className="form-control pl-4">
                      <label className="label">
                        <span className="label-text text-base font-medium">
                          Email
                        </span>
                      </label>
                      <input
                        type="email"
                        placeholder="email"
                        className="input input-bordered w-[390px] md:w-[420px]"
                        required
                      />
                      {/* defaultValue={Email} */}
                    </div>
                  </div>
                  <div className="ml-4 md:ml-4">
                    <h1 className="md:mt-5  text-base font-medium ">
                      Profile Photo
                    </h1>
                    <div className=" w-[250px] h-[200px] rounded-xl border ">
                      <img
                        className="h-[150px] w-[240px] "
                        src="https://cdn-icons-png.flaticon.com/512/4211/4211763.png"
                        alt=""
                      />
                      <input type="file" id="myFile" name="filename"></input>
                    </div>
                  </div>
                </div>
                {/* role */}
                <div className="form-control pl-4 pr-4">
                  <label className="label">
                    <span className="label-text text-base font-medium ">
                      Role
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

                <div className="py-2  w-full text-center border mt-2">
                  <button className="w-[350px] md:w-[650px]    h-[40px] border bg-slate-700  text-white rounded-xl">
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
