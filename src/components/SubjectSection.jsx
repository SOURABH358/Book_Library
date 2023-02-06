import { useEffect } from "react"

export default function SubjectSection(){
    useEffect(()=>{
        async function getSubject(){
            await fetch('https://openlibrary.org/subjects/fiction.json?details=true')
            .then(response=>response.json())
            .then(json=>console.log(json))
            .catch(err=>console.log(err))
        }
        getSubject();
    },[])
    return <div className="subject__section">
        <h2 className="title">Library App</h2>
        
        <div className="subject__container">
       
            <div className="subject">Fiction</div>
            <div className="subject">History</div>
            <div className="subject">Murder</div>
            <div className="subject">Romance</div>
            <div className="subject">Children</div>
            <form className="search__subject">
                <input type="search" placeholder="Search Subject"/>
                <button type="submit">Search</button>
            </form>
        </div>
        
    </div>
}