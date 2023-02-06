import { useEffect } from "react"
import { AiOutlineClose } from "react-icons/ai";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function SubjectSection({show,setShow}){
    const navigate = useNavigate();
    function handleSubmit(e)
    {
        e.preventDefault();
        navigate(`/subjects/${e.target[0].value}`);
    }
    return <div className={`subject__section ${show}`}>
        <h2 className="title">Library App</h2>
        <div className="close" onClick={()=>setShow('')}><AiOutlineClose className="icon"/></div>
        <div className="subject__container">
       
            <Link to="/subjects/fiction" ><div className="subject">Fiction</div></Link>
            <Link to="/subjects/history"><div className="subject">History</div></Link>
            <Link to="/subjects/murder"><div className="subject">Murder</div></Link>
            <Link to="/subjects/romance"><div className="subject">Romance</div></Link>
            <Link to="/subjects/children_stories"><div className="subject">Children</div></Link>
            <form className="search__subject" onSubmit={(e)=>handleSubmit(e)}>
                <input type="search" placeholder="Search Subject"/>
                <button type="submit" >Search</button>
            </form>
        </div>
        
    </div>
}