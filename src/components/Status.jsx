import React from "react";
import { Toggle, Retweet, Retweet1, Untweet, Twitterbtn, Edit, Line } from "../assets";

const Status = () => {
  return (
    <>
      <div className="bg-green rounded-3xl px-[10%] md:h-3/4 py-[2%] md:px-[3%] font-Inter w-full md:w-1/3 md:mx-[2%]">
        <div className="">
          <div className="flex justify-between text-black ">
            <h3 className="text-xl font-semibold">Status</h3>
            <button>
              <img src={Toggle} alt="" />
            </button>
          </div>
          <p className="text-black text-sm py-2">
            Auto retweets are <span className="font-bold">active!</span>
          </p>
        </div>
        <div className="rounded-3xl bg-midnight1 h-64 mt-4 mb-4">
              <div className=" relative left-12  top-16"><img src={Line} alt="" /></div>
              <div className="relative z-10 -top-20 left-8 flex mb-2">
                <button><img src={Twitterbtn} alt="" cl/></button>
                <p className="mx-4 mt-1.5">New Tweet</p>
              </div>
              <div className="relative z-10 -top-20 left-8 flex mb-2">
                <button><img src={Retweet} alt="" cl/></button>
                <p className="mx-4 mt-1.5">Auto-retweet <span className="font-bold">1h later</span></p>
              </div>
              <div className="relative z-10 -top-20 left-8 flex mb-2">
              <button><img src={Retweet1} alt="" cl/></button>
                <p className="mx-4 mt-1.5">Auto-retweet <span className="font-bold">12h later</span></p>
              </div>
              <div className="relative z-10 -top-20 left-8 flex mb-2">
              <button><img src={Untweet} alt="" cl/></button>
                <p className="mx-4 mt-1.5">Un-retweet <span className="font-bold">24h later</span></p>
              </div>
        </div>
        <div className="text-black font-light text-sm flex justify-center ">
            <button className="flex"><img src={Edit} alt="" className="m-1" /> <span className="mx-2">Edit Automations</span></button>
        </div>
      </div>
    </>
  );
};

export default Status;
