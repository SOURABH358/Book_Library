import { useState } from "react";
import ResultSection from "./ResultSection";
import SearchBox from "./SearchBox";

export default function BookSection(){
    const [result, setResult] = useState(null);
    function showResult(){
        if(result===null)
        return <div className = "wait">Nothing to Display</div>
            return <ResultSection
                data={result}
                />
    }
    return <section className="book__section">
            <SearchBox 
            setResult = {setResult}/>
            {showResult()}
            
    </section>
}