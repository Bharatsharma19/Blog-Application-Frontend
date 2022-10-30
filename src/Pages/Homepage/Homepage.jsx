import { useLocation } from 'react-router-dom';
import Header from "../../Components/Header/Header";
import Posts from "../../Components/Posts/Posts";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./homepage.css";

export default function Homepage() {
    const location = useLocation();
    console.log(location);
    return (
        <>
            <Header />
            <div className="home">
                <Posts />
                <Sidebar />
            </div>
        </>
    );
}
