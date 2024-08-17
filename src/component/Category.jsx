

const Category = ({category , setCategory}) => {
    return (
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
    );
};

export default Category;