const Sort = ({sortOrder,setSortOrder}) => {
  
  return (
    <div>
      <select
        name="category"
        onChange={(e) => setSortOrder(e.target.value)}
        id="sortOrder"
        value={sortOrder}
        className="border p-2 w-full rounded-md"
      >
        <option value="">Normal</option>
        <option value="Low to High">Low to High Price</option>
        <option value="High to Low">High to Low Price</option>
        <option value="Newest First">Newest First Date</option>
      </select>
    </div>
  );
};

export default Sort;
