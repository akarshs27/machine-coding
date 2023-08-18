import logo from './logo.svg';
import  { useState, useEffect} from "react";
import './App.css';

function App() {

  const [items,setItems] = useState([]);
  const [page, setPage] = useState(0);


  async function getItemsList() {
    try {
      const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${page}`);
      const data = await res.json();
      setItems([...items, ...data.products]);
      setPage(prev => prev + 10);
    } catch(err) {
      console.log("Error", err);
    }
  }

  useEffect(() => {
    getItemsList();
  }, []);

  function handleScroll() {
    if( window.innerHeight + window.scrollY >= window.document.body.offsetHeight) {
      console.log("Running");
      getItemsList();
    }
  }


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[page]);

  return (
    <div className="App">
      <h2>Infinite Scroll</h2>
      {items.map(each => (
        <div style={{border: '1px solid black', padding: '24px', margin: '16px'}}>{each.id} --- {each.title} </div>
      ))}
    </div>
  );
}

export default App;
