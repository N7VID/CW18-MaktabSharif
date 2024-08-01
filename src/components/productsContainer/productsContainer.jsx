import { useQuery } from "@tanstack/react-query";
import FilterBar from "../filterBar/filterBar";
import Product from "../product/product";
import axios from "axios";

export default function ProductsContainer() {
  const {data, isLoading, isError,error} = useQuery({
    queryKey: ["products"],
    queryFn: async()=>{
      const res = await axios.get(`http://localhost:3000/products`)
      //console.log(res.data);
      return res.data
    }

  })

  if(isError){
    return(
      <div>{error.message}</div>
    )
  }
  

  return (
    <div>
      <FilterBar />
      <section className="grid grid-cols-3 gap-4 py-4">
      {isLoading?<div>LOADING...</div> : data.map((item)=><Product item={item} key={item.id}/>)}
      </section>
    </div>
  );
}
