export default function SearchBox({setResult}) {
    async function handleSubmit(e) {
        e.preventDefault();
        const query = e.target[0].value;
        setResult([])
        await fetch(`https://openlibrary.org/search.json?q=${query}&sort=new`)
            .then(response => response.json())
            .then(json => setResult([...json.docs]))
            .catch(err => console.log(err))
    }
    return <form className="searchbox__section" onSubmit={(e) => { handleSubmit(e) }}>
        <input type="text" placeholder="Search book by title or author" />
        <button type="submit" className="search__btn">🔍</button>
    </form>
}