import { useState } from "react";
import BookSection from "./BookSection";
import SubjectSection from "./SubjectSection";

export default function Home(){
    const [show,setShow] = useState('')
    return <div className="App">

    <SubjectSection show={show}
    setShow={setShow}/>
    <BookSection setShow={setShow}/>
    
  </div>
}