import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
export default function SearchBox({setResult,setShow}) {
    async function handleSubmit(e) {
        e.preventDefault();
        const query = e.target[0].value;
        if (query==='')
        {
            setResult(null);
        }
        else{

            setResult([])
            await fetch(`https://openlibrary.org/search.json?q=${query}&sort=new`)
            .then(response => response.json())
            .then(json => setResult([...json.docs]))
            .catch(err => console.log(err))
        }
    }
    return <div className="searchbox__container">
            <div className="menu" onClick={()=>setShow('show')}><AiOutlineMenu className="icon"/></div>
        <form className="searchbox__section" onSubmit={(e) => { handleSubmit(e) }}>
        <input type="search" placeholder="Search book by title or author" />
        <button type="submit" className="search__btn"><AiOutlineSearch className="icon"/></button>
    </form>
    </div>
}