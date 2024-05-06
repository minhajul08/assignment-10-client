import { Outlet } from "react-router-dom";
import Navbar from "../Components/Page/Navbar";
import Footer from "../Components/Page/Footer";


const Root = () => {
    return (
        <div>
            <Outlet>
                <Navbar></Navbar>
                <Footer></Footer>
            </Outlet>
        </div>
    );
};

export default Root;