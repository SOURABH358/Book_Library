import {useState} from "react"
export default function ResultSection({ data }) {
    const [count, setCount] = useState(1);
    
    if (data.length === 0) {
        return <div className="no__result"></div>
    }
    return <section className="result__section">
        <div className="result__container">
        <div className="result result__title">
            <p>Title</p>
            <p>Author</p>
            <p>Last Publish Year</p>
            <p>First Publish Year</p>
        </div>
            {data.map((item,i) => {
                if (i>(count-1)*10 && i<count*10)
                return <div className="result">
                    <p>{item.title}</p>
                    <p>Toeklin</p>
                    <p>12 Jan 2023</p>
                    <p>Toeklin</p>
                </div>
            })}

        </div>
        <div className="result__footer">
            <button className="pre" onClick={()=>{
                if (count>1) setCount(count-1)
            }} disabled = {count>1?false:true}>Pre</button>
            <div>{`${count}/${Math.ceil(data.length/10)}`}</div>
            <button className="next" onClick={()=>{
                if (count<Math.ceil(data.length/10)) setCount(count+1);
            }} disabled = {count<Math.ceil(data.length/10)?false:true}>Next</button>
        </div>
    </section>
}