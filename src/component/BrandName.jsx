import { useEffect, useState } from "react";



const BrandName = ({handleSubmit , onSubmit2 , register}) => {
   
    
    return (
        <form
        onSubmit={handleSubmit(onSubmit2)}
        className="flex items-center gap-1 sm:gap-3"
      >
        <label className="flex w-full items-center gap-1 sm:gap-3">
          <input
            type="text"
            {...register("brandName")}
            name="brandName"
            placeholder="Brand"
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
    );
};

export default BrandName;