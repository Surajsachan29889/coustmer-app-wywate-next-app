export default function ButtonGrp() {
  return (
    <div className="flex gap-3  bg-[#F4F2EE] mt-[5%] justify-center mb-[5%] ">
      <button className=" w-[10.188rem] h-[2.688rem] bg-[#C3C3C3] rounded-lg text-[1.1rem] text-[white] font-medium active:scale-90 transition-all ">
        Cancel
      </button>
      <button className=" w-[10.188rem] h-[2.688rem] bg-pri rounded-lg text-[1.1rem] text-[white] font-medium  active:scale-90 transition-all ">
        Accept & Pay
      </button>
    </div>
  );
}
