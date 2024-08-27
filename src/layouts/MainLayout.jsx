import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="h-20">
            <Navbar/>
            </div>
           <div className="min-h-[calc(100vh-132px)]">
           <Outlet/>
           </div>
           <div>
            <Footer/>
           </div>
            
        </div>
    );
};

export default MainLayout;