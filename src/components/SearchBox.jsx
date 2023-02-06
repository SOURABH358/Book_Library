import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { updateBooks, updateQuery, updateShow } from "../Redux/AppSlice";
export default function SearchBox({setResult}) {
    const dispatch = useDispatch();
    const books = useSelector(state=>state.app.books);
    async function handleSubmit(e) {
        e.preventDefault();
        const query = e.target[0].value;
        if (query==='')
        {
            setResult(null);
        }
        else{
            let bool = false;
            dispatch(updateQuery({query}));
            books.forEach(item=>{
                if (item.query===query)
                {
                    setResult(item.data)
                    bool=true;
                }
            })
            if(bool)
            return ;
            setResult([])
            await fetch(`https://openlibrary.org/search.json?q=${query}&sort=new&limit=10`)
            .then(response => response.json())
            .then(json => {
                setResult([...json.docs])
                dispatch(updateBooks({query,data:json.docs}))
            })
            .catch(err => console.log(err))
        }
    }
    return <div className="searchbox__container">
            <div className="menu" onClick={()=>dispatch(updateShow())}><AiOutlineMenu className="icon"/></div>
        <form className="searchbox__section" onSubmit={(e) => { handleSubmit(e) }}>
        <input type="search" placeholder="Search book by title or author" />
        <button type="submit" className="search__btn"><AiOutlineSearch className="icon"/></button>
    </form>
    </div>
}