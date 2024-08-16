import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "./ProductCard";


const Home = () => {
    const { data: productsData = [], isLoading } = useQuery({
        queryKey: ["productsData"],
        queryFn: () =>
            axios.get(`http://localhost:3000/products`).then((res) => {
            
            return res.data;
          }),
      });
console.log(productsData);
if (isLoading) return <div className="flex justify-center items-center h-screen"><span className="loading loading-spinner loading-lg"></span></div>;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
            {
                productsData.map((product , index)=> <ProductCard key={index} product={product}></ProductCard>)
            }
        </div>
    );
};

export default Home;