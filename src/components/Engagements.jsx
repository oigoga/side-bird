import React from "react";
import { Likes, Views, Clicks } from "../assets";

const Engagements = () => {
  return (
    <>
      <div className="flex flex-col mt-24  md:mt-0 md:pt-40 font-Inter">
        <div className="flex px-4">
          <h3 className="font-semibold text-xl ">Engagement</h3>
          <div className="bg-midnight1 rounded-lg ml-2 px-2 h-6 mt-1 pt-1 text-xs">
            Last 7 days
          </div>
        </div>
        <div className="flex ">
          <div className="h-48 bg-midnight1 mt-5 rounded-3xl hidden md:block mr-[5%]  md:w-1/3">
            <div className="flex pt-10 pl-10">
              <img src={Clicks} alt="" className="h-4 mt-1" />
              <h4 className="mx-4 font-semibold text-base">Profile Clicks</h4>
            </div>
            <div className="pl-11 mt-1 py-3">
              <h4 className=" font-extrabold text-4xl">0</h4>
            </div>
            <div className="w-full bg-green h-0.5 my-5 relative"></div>
          </div>
          <div className="h-48 bg-midnight1 mt-5 rounded-3xl w-full  md:w-1/3 ">
            <div className="flex pt-10 pl-10">
              <img src={Views} alt="" className="h-4 mt-1" />
              <h4 className="mx-4 font-semibold text-base">Impressions</h4>
            </div>
            <div className="pl-11 mt-1 py-3">
              <h4 className=" font-extrabold text-4xl">0</h4>
            </div>
            <div className="w-full bg-green h-0.5 my-5 relative"></div>
          </div>
          <div className="h-48 bg-midnight1 mt-5 rounded-3xl hidden md:block ml-[5%] md:w-1/3">
            <div className="flex pt-10 pl-10">
              <img src={Likes} alt="" className="h-4 mt-1" />
              <h4 className="mx-4 font-semibold text-base">Total Likes</h4>
            </div>
            <div className="pl-11 mt-1 py-3">
              <h4 className=" font-extrabold text-4xl">0</h4>
            </div>
            <div className="w-full bg-green h-0.5 my-5 relative"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Engagements;
