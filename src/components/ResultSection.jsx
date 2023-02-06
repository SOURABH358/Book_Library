import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
export default function ResultSection({ data,setData }) {
    const [count, setCount] = useState(1);
    const query = useSelector(state=>state.app.query)
    console.log(query)
    useEffect(()=>{
        async function getData(){
            await fetch(`https://openlibrary.org/search.json?q=${query}&sort=new&limit=10&offset=${(count-1)*10}`)
            .then(response => response.json())
            .then(json => {
                setData([...json.docs])
            })
            .catch(err => console.log(err))
        }
        getData();
    },[count])
    if (data.length === 0) {
        return <div className="no__result"><p></p></div>
    }
    return <section className="result__section">
        <div className="result__container">
            <div className="result result__title">
                <p>Title</p>
                <p>Author</p>
                <p>Last Publish Year</p>
                <p>First Publish Year</p>
            </div>
            {data.map((item, i) => {
                    return <div className="result" key={i + 2001}>
                        <p>{item.title}</p>
                        <p>{item.author_name}</p>
                        <p>{item.publish_year}</p>
                        <p>{item.first_publish_year}</p>
                    </div>
            })}

        </div>
        <div className="result__footer">
            <button className="pre" onClick={() => {
                if (count>1) setCount(count - 1)
            }} disabled={count>1?false:true}>
                Pre
            </button>
            <div>{`${count}/${count}`}</div>
            <button className="next" onClick={() => {
                setCount(count + 1);
            }} >Next</button>
        </div>
    </section>
}