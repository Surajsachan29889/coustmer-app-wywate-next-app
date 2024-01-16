import React from "react";
import CompanyBox from "@/app/checkout/components/utils/companyBox";
import ItemsSec from "@/app/checkout/components/items-sec";
import ButtonGrp from "@/app/checkout/components/utils/button-grp";

export default function Main() {
  return (
    <div className= "sm:w-[30%] w-full border-[2px] border-[grey] rounded-xl h-[100vh] main">
      <CompanyBox />
      <ButtonGrp />
      <ItemsSec />
    </div>
  );
}
