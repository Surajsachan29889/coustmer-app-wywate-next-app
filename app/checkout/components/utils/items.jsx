import items from "@/app/checkout/components/lib/data";
import vegicon from "@/public/veg-icon.svg"
import nonvegicon from "@/public/non-veg-icon.svg";
import Image from "next/image";

export default function Items() {


  return (
    <div className="absolute w-full">
      <h1 className="text-[1.3rem] font-medium ml-[7%]">ITEMS</h1>
      <div className="flex flex-col gap-1 h-[35vh] item-container w-full  ">
        {items.map((item) => (
          <div key={item.item} className="flex gap-[20%]  font-mono mx-[1%] mt-[5%] ">
            <div className=" flex justify-start items-start  gap-1 w-[65%] ">
              <Image
                src={item.veg ? vegicon : nonvegicon}
                alt="vegicon"
                className="h-[1.5rem]  row-span-2 mt-[1%] "
              />
              <div className="flex flex-col ">

                <h1 className="col-span-4 font-semibold text-[.9rem] text-[#3E3E3E] ">
                  {item.quantity}&#215;{item.item}
                </h1>
                <span className="col-span-4 font-normal text-[#4E4E4E] w-[100%] text-[.9rem] ">{item.addon}</span>
              </div>
            </div>
            <span className="font-bold ">&#8377;{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
