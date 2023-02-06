import { useEffect, useState } from 'react'
import './App.css'
import BookSection from './components/BookSection'
import SubjectSection from './components/SubjectSection'

function App() {
  useEffect(()=>{
    async function getBooks(){
      // await fetch('https://openlibrary.org/search.json?author=tokien')
      
      
    }
    // getBooks();

  },[])
  return (
    <div className="App">

      <SubjectSection/>
      <BookSection/>
    </div>
  )
}

export default App
