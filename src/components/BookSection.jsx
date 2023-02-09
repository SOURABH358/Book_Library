import { useState } from "react";
import ResultSection from "./ResultSection";
import SearchBox from "./SearchBox";

export default function BookSection(){
    const [result, setResult] = useState(null);
    function showResult(){
        if(result===null)
        return <div className = "wait">
            <p>Nothing to display</p>
            <div className="wait__container">
                <button className="pre" disabled={true}>Pre</button>
                <p>1/1</p>
                <button className="next" disabled={true}>Next</button>
            </div>
        </div>
            return <ResultSection
                data={result}
                setData = {setResult}
                />
    }
    return <section className={`book__section`}>
            <SearchBox 
            setResult = {setResult}/>
            {showResult()}
            
    </section>
}