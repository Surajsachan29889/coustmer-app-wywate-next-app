import React from "react";
import CompanyBox from "@/app/carttotal/components/utils/companyBox";
import ItemsSec from "@/app/carttotal/components/items-sec";
import ButtonGrp from "@/app/carttotal/components/utils/button-grp";

export default function Main() {
  return (
    <div className= "sm:w-[30%] w-full border-[2px] border-[grey] rounded-xl h-[100vh]">
      <CompanyBox />
      <ButtonGrp />
      <ItemsSec />
    </div>
  );
}
