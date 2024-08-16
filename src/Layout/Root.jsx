import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const Root = () => {
  return (
    <>
    <div className="bg-base-100 shadow-xl fixed top-0 w-full">
      <Navbar></Navbar>
    </div>
      <div className="max-w-[1440px] mt-24 w-11/12 lg:w-10/12 mx-auto">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Root;
