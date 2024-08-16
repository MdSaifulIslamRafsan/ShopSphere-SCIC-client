import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="max-w-[1440px] w-11/12 lg:w-10/12 mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;