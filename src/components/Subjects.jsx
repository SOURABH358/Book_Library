import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router"
import { updateSubjects } from "../Redux/AppSlice";

export default function Subject(){
    const dispatch = useDispatch();
    const subjects = useSelector(state=>state.app.subjects)
    const [data,setData] = useState([])
    const params = useParams()
    const id = params.id;
    console.log(data)
    useEffect(()=>{
        async function getSubject(){
            let bool = false;
            subjects.forEach(item=>{
                if(item.query===id)
                {
                    setData(item.data);
                    bool=true;
                    console.log(item.query)
                }
            })
            if(bool)
            return ;
            await fetch('https://openlibrary.org/subjects/fiction.json?details=true&limit=10')
            .then(response=>response.json())
            .then(json=>
                {
                    setData(json)
                    dispatch(updateSubjects({query:id,data:json}))
                })
            .catch(err=>console.log(err))
        }
        getSubject();
    },[])
    if (data.length===0 )
    return <div className="no__result"><p></p></div>
    return <div className="subjects__page">
        <h2>Top 10 {id} Books</h2>
        <div className="books__title">
            <p>Title</p>
            <p>Author</p>
            <p>First Publish Year</p>
            <p>Subject</p>
        </div>
        {data.works.map((item,i)=>{
                return <div key={i+1001} className="books">
                    <p>{item.title}</p>
                    <p>{item.authors.map(item=>item.name).join(", ")}</p>
                    <p>{item.first_publish_year}</p>
                    <p>{item.subject[0]}</p>
                </div>
        })}
        </div>
}