import React, { useState } from "react";

function PlanCard({ isSelected, onChange, title }) {
  const [selectedTab, setSelectedTab] = useState(false);

  const handleClick = () => {
    setSelectedTab(true);
    onChange(title);
  };


  return (
    <div onClick={()=> handleClick()}>
      <div className="cursor-pointer transition-all ease-in 300 flex flex-col gap-2">
        <div className={`flex justify-center items-center relative mb-8 py-10 px-7 bg-[#1e4d91] ${isSelected=== title ? '' : 'bg-opacity-25'}  text-white`}>
          <span className="font-bold p-[-1px]">
          {title}
          </span>
          {isSelected === title && (
            <div
              className="absolute bottom-[-10px] right-[50%] left-[50%] w-0 h-0 
              border-l-[8px] border-l-transparent
              border-t-[11px] border-[#1e4d91]
              border-r-[8px] border-r-transparent "
            ></div>
          )}
        </div>
        <div className="flex justify-center items-center flex-col gap-10">
          <div className={`${isSelected=== title ? 'text-[#1e4d91]': 'text-gray'}flex flex-col gap-3`}>
            <span className={`${isSelected=== title ? 'text-[#1e4d91]': 'text-gray-500'} font-semibold text-lg`}>
                1000
                </span>
            <hr className="h-1 w-full" />
          </div>
          <div className={`flex flex-col gap-3`}>
            <span className={`${isSelected=== title ? 'text-[#1e4d91]': 'text-gray-500'} font-semibold text-lg`}>
                Good
                </span>
            <hr className="h-1" />
          </div>
          <div className={`${isSelected=== title ? 'text-[#1e4d91]': 'text-gray'}flex flex-col gap-3`}>
            <span className={`${isSelected=== title ? 'text-[#1e4d91]': 'text-gray-500'} font-semibold text-lg`}>
                480p
                </span>
            <hr className="h-1" />
          </div>
          <div className={`${isSelected=== title ? 'text-[#1e4d91]': 'text-gray'}flex flex-col gap-3`}>
            <span className={`${isSelected=== title ? 'text-[#1e4d91]': 'text-gray-500'} font-semibold text-lg`}>Phone</span>
            <span className={`${isSelected=== title ? 'text-[#1e4d91]': 'text-gray-500'} font-semibold text-lg`}>Tablet</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanCard;
