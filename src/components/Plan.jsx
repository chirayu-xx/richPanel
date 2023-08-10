import React, { useEffect, useState } from "react";
import SwitchTab from "./utils/SwitchTab";
import PlanCard from "./PlanCard";
import axios from "axios";

function Plan() {
  const tabs = ["Monthly", "Yearly"];

  const [category, setCategory] = useState(tabs[0].toLowerCase());
  const [isSelected, setIsSelected] = useState("Mobile");
  const onTabChange = (tab) => {
    setCategory(tab.toLowerCase());
  }

  const [plans, setPlans] = useState([])
//   enable this use effect after fetching plans
//   useEffect(() => {
//     axios.get(``).then((res) => setPlans(res.data));
//   }, [])


  const onChange = (item) => {
    setIsSelected(item);
  };
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="flex gap-10 flex-col w-full min-h-screen justify-center items-center">
        <h1 className="font-bold text-2xl m-8">Choose the right plan for you</h1>
        <div className="flex flex-col md:flex-row justify-between gap-16 items-center">
          <div className="flex flex-col gap-10">
            <SwitchTab tabs={tabs} onTabChange={onTabChange} />
            <div className="flex flex-col gap-10 mt-11">
              <div className="flex flex-col gap-3">
                <h1>Monthly Price</h1>
                <hr className="h-1" />
              </div>
              <div className="flex flex-col gap-3">
                <h1>Video Quality</h1>
                <hr className="h-1" />
              </div>
              <div className="flex flex-col gap-3">
                <h1>Resolution</h1>
                <hr className="h-1" />
              </div>
              <div>
                <h1>Devices you can watch</h1>
                <hr className="h-1" />
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            {/* {
                plans.map((plan) => (
                    <PlanCard title = {plan.planName} isSelected= {isSelected} onChange={onChange}/>
                ))
            } */}
            <PlanCard
              title={"Mobile"}
              onChange={onChange}
              isSelected={isSelected}
            />
            <PlanCard
              title={"Basic"}
              onChange={onChange}
              isSelected={isSelected}
            />
            <PlanCard
              title={"Standard"}
              onChange={onChange}
              isSelected={isSelected}
            />
            <PlanCard
              title={"Premium"}
              onChange={onChange}
              isSelected={isSelected}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plan;
