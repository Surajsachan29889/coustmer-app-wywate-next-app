import items from "@/app/checkout/components/lib/data";
export default function Total() {
  let total = 0;
  let coupon = 20;
  let tax = 30;
  let discount = 20;

  items.forEach((itemprice) => {
    total = total + itemprice.price;
  });
  let grandtotal = total - coupon - discount + tax;
  return (
    <div className="flex justify-center">

    <div className="absolute h-[40%] w-[90%] bg-white rounded-2xl drop-shadow-xl bottom-3  flex flex-col gap-0 px-[5%] pt-[2%] justify-center text-[.85rem]  ">
      <div className="flex gap-[30%] ml-7 ">
        <h1 className=" w-[50%] font-mono font-midium text-[#3C3C3C]  ">Item Total</h1>
        <h1 className="font-mono font-semibold ">&#8377;{total}</h1>
      </div>
      <div className="flex gap-[30%] ml-7">
        <h1 className=" w-[50%] font-mono font-medium text-pri ">Coupon-(20% OFF) </h1>
        <h1 className="font-mono font-semibold">&#8377;{coupon}</h1>
      </div>
      <div className="flex gap-[30%] ml-7">
        <h1 className=" w-[50%] text-pri font-mono font-medium">Discount</h1>
        <h1 className="font-mono font-semibold">&#8377;{discount}</h1>
      </div>
      <div className="flex gap-[10%] ml-7">
        <h1 className=" w-[70%] text-tri font-mono font-medium ">Taxes and Charges</h1>
        <h1 className="font-mono font-semibold">&#8377;{tax}</h1>
      </div>
      <div className="flex gap-[20%] rounded-lg bg-pri h-[25%] w-[100%] justify-center items-center mt-5 ">
        <h1 className=" w-[50%] text-[white] font-mono font-semibold ">Grand Total</h1>
        <h1 className="font-mono font-semibold text-[white] ">&#8377;{grandtotal}</h1>
      </div>
    </div>
    </div>
  );
}
