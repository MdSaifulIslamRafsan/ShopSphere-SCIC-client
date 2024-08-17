

const PriceRange = ({handleSubmit , onSubmit1 , register}) => {
    return (
        <form
          onSubmit={handleSubmit(onSubmit1)}
          className="flex items-center gap-1 sm:gap-3"
        >
          <label className="flex items-center gap-1 sm:gap-3">
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
    );
};

export default PriceRange;