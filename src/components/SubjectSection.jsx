import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { removeShow } from "../Redux/AppSlice";

export default function SubjectSection(){
    const dispatch = useDispatch();
    const show = useSelector(state=>state.app.show);
    const navigate = useNavigate();
    function handleSubmit(e)
    {
        e.preventDefault();
        navigate(`/${e.target[0].value}`);
    }
    return <div className={`subject__section ${show}`}>
        <h2 className="title">Book Library</h2>
        <div className="close" onClick={()=>dispatch(removeShow())}><AiOutlineClose className="icon"/></div>
        <div className="subject__container">
       
            <div>
            <Link to="/fiction" ><div className="subject">Fiction</div></Link>
            <Link to="/history"><div className="subject">History</div></Link>
            <Link to="/murder"><div className="subject">Murder</div></Link>
            <Link to="/romance"><div className="subject">Romance</div></Link>
            <Link to="/children_stories"><div className="subject">Children</div></Link>
            </div>
            <form className="search__subject" onSubmit={(e)=>handleSubmit(e)}>
                <input type="search" placeholder="Search Subject"/>
                <button type="submit" >Search</button>
            </form>
        </div>
        
    </div>
}