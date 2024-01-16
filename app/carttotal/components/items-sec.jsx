import Items from "@/app/carttotal/components/utils/items.jsx"
import Total from "@/app/carttotal/components/utils/total"

export default function ItemsSec() {
  return (
    <div className=" h-[73vh] overflow-hidden bg-[#FAFAFA]  w-[23.438] rounded-t-2xl relative ">
        <Items/>
        <Total/>
    </div>
  )
}
