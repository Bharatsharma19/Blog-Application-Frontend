import Sidebar from "../../Components/Sidebar/Sidebar";
import SinglePost from "../../Components/SinglePost/SinglePost";
import "./single.css";

export default function Single() {
    return (
        <div className="single">
            <SinglePost />
            <Sidebar />
        </div>
    );
}
