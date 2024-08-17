import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "../component/ProductCard";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import Sort from "../component/Sort";
import Category from "../component/Category";
import PriceRange from "../component/PriceRange";
import BrandName from "../component/BrandName";

const Home = () => {
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [category, setCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [brandData, setBrandData] = useState("");
  const numberOfPages = Math.ceil(count / itemsPerPage);
 

  const pages = [
    ...Array(numberOfPages)
      .keys()
      .map((element) => element + 1),
  ];
  const { data: productsData = [], isLoading } = useQuery({
    queryKey: [
      "productsData",
      currentPage,
      search,
      category,
      minPrice,
      maxPrice,
      sortOrder,
      brandData
    ],
    queryFn: () =>
      axios
        .get(
          `http://localhost:3000/products?page=${currentPage}&size=${itemsPerPage}&search=${search}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&order=${sortOrder}&brand=${brandData}`
        )
        .then((res) => {
          return res.data;
        }),
  });
  const handleReset = () => {
    setSearch("");
    setSearchText("");
    setMinPrice("");
    setMaxPrice("");
    
  };

  const { register, handleSubmit , reset} = useForm();

  const onSubmit = () => {
    setSearch(searchText);
  };

  const onSubmit1 = (data) => {
    const { PriceMin, PriceMax } = data;
    setMinPrice(PriceMin);
    setMaxPrice(PriceMax);
    reset()
  };
  const onSubmit2 = (data) => {
    const { brandName } = data;
    setBrandData(brandName);
    reset()
  };

  useEffect(() => {
    const getJobsCount = async () => {
      const { data } = await axios.get(
        `http://localhost:3000/products-count?search=${search}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&brand=${brandData}`
      );
      setCount(data.count);
    };
    getJobsCount();
  }, [search, category, minPrice, maxPrice, brandData]);

  const handlePaginationBtn = (value) => {
    setCurrentPage(value);
  };
  const handlePrevBtn = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextBtn = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  return (
    <>
    {/* filter */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              {...register("search")}
              className="px-2 py-2 placeholder-gray-500  outline-none focus:placeholder-transparent"
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              name="search"
              placeholder="Enter Job Title"
              aria-label="Enter Job Title"
            />
            <AwesomeButton type="primary">Search</AwesomeButton>
          </div>
        </form>
        <AwesomeButton
          onPress={() => {
            handleReset();
          }}
          type="primary"
        >
          Reset
        </AwesomeButton>
      </div>
      <div className="my-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 items-center gap-6">
       <Category category={category} setCategory={setCategory} />
       <BrandName register={register} onSubmit2={onSubmit2} handleSubmit={handleSubmit}></BrandName>
        <PriceRange register={register} onSubmit1={onSubmit1} handleSubmit={handleSubmit}></PriceRange>
        <Sort setSortOrder={setSortOrder} sortOrder={sortOrder}></Sort>
       
      </div>
{/* ProductCard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {productsData.map((product, index) => (
          <ProductCard key={index} product={product}></ProductCard>
        ))}
      </div>
      {/* pagination */}
      <div className="flex justify-center my-12">
        <button
          onClick={handlePrevBtn}
          className={
            "bg-blue-600 text-white hidden px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-600"
          }
        >
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>

        {pages.map((btnNum) => (
          <button
            onClick={() => handlePaginationBtn(btnNum)}
            key={btnNum}
            className={
              currentPage === btnNum
                ? "bg-blue-600 text-white hover:text-white px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-600"
                : " hover:text-white px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-600"
            }
          >
            {btnNum}
          </button>
        ))}

        <button
          onClick={handleNextBtn}
          className={
            "bg-blue-600 text-white hidden px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-600"
          }
        >
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>
      </div>
    </>
  );
};

export default Home;
