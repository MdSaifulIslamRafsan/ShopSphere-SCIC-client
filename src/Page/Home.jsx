import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "../component/ProductCard";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import Sort from "../component/Sort";

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
  const numberOfPages = Math.ceil(count / itemsPerPage);
  console.log(minPrice, maxPrice);

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
      sortOrder
    ],
    queryFn: () =>
      axios
        .get(
          `http://localhost:3000/products?page=${currentPage}&size=${itemsPerPage}&search=${search}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&order=${sortOrder}`
        )
        .then((res) => {
          return res.data;
        }),
  });
  const handleReset = () => {
    setSearch("");
    setSearchText("");
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    setSearch(searchText);
  };

  const onSubmit1 = (data) => {
    const { PriceMin, PriceMax } = data;
    setMinPrice(PriceMin);
    setMaxPrice(PriceMax);
  };

  useEffect(() => {
    const getJobsCount = async () => {
      const { data } = await axios.get(
        `http://localhost:3000/products-count?search=${search}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}`
      );
      setCount(data.count);
    };
    getJobsCount();
  }, [search, category, minPrice, maxPrice]);

  const handlePaginationBtn = (value) => {
    setCurrentPage(value);
  };
  const handlePrevBtn = () => {
    console.log(currentPage);
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
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              {...register("search")}
              className="px-6 py-2 placeholder-gray-500  outline-none focus:placeholder-transparent"
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
      <div className="my-4 flex items-center gap-6">
        <select
          name="category"
          onChange={(e) => setCategory(e.target.value)}
          id="category"
          value={category}
          className="border p-2  rounded-md"
        >
          <option value="">All Product</option>
          <option value="Electronics">Electronics</option>
          <option value="Wearables">Wearables</option>
          <option value="Audio">Audio</option>
          <option value="Computers">Computers</option>
          <option value="Accessories">Accessories</option>
          <option value="Gaming">Gaming</option>
          <option value="Photography">Photography</option>
          <option value="Smart Home">Smart Home</option>
          <option value="Transportation">Transportation</option>
          <option value="Lighting">Lighting</option>
          <option value="Home Appliances">Home Appliances</option>
          <option value="Personal Care">Personal Care</option>
          <option value="Home Entertainment">Home Entertainment</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Security">Security</option>
          <option value="Health">Health</option>
        </select>
        <form
          onSubmit={handleSubmit(onSubmit1)}
          className="flex items-center gap-3"
        >
          <label className="flex items-center gap-3">
            <input
              type="number"
              {...register("PriceMin")}
              name="PriceMin"
              placeholder="Min"
              className="mt-1 block w-full px-3 py-2 border rounded-md"
            />
            <input
              type="number"
              {...register("PriceMax")}
              name="PriceMax"
              placeholder="Max"
              className="mt-1 block w-full px-3 py-2 border rounded-md"
            />
          </label>
          <button
            type="submit"
            className="py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded"
          >
            Search
          </button>
        </form>
        <Sort setSortOrder={setSortOrder} sortOrder={sortOrder}></Sort>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {productsData.map((product, index) => (
          <ProductCard key={index} product={product}></ProductCard>
        ))}
      </div>
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
