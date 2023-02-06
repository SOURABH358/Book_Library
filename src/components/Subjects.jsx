import { useEffect, useState } from "react";
import { useParams } from "react-router"

export default function Subject(){
    const [data,setData] = useState([])
    const params = useParams()
    const id = params.id;
    console.log(data)
    useEffect(()=>{
        async function getSubject(){
            await fetch('https://openlibrary.org/subjects/fiction.json?details=true')
            .then(response=>response.json())
            .then(json=>setData(json))
            .catch(err=>console.log(err))
        }
        getSubject();
    },[])
    if (data.length===0 )
    return <div className="no__result"></div>
    return <div className="subjects__page">
        <h2>{id} Books</h2>
        {data.works.map((item,i)=>{
            if(i<10)
            {
                return <div className="books">{item.title}</div>
            }
        })}
        </div>
}