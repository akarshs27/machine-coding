import logo from './logo.svg';
import  { useState, useEffect} from "react";
import './App.css';

function App() {

  const [items,setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);


  async function getItemsList() {
    setIsLoading(true);
    try {
      const res = await fetch(`https://api.slingacademy.com/v1/sample-data/users?offset=${page}&limit=10`);
      // const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${page}`);
      const data = await res.json();
      setItems([...items, ...data.users]);
      setPage(prev =>  prev + 10);
      console.log("page",page);
    } catch(err) {
      console.log("Error", err);
    }finally {
      setIsLoading(false);
    }
  }


  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
      return;
    }
    getItemsList();
  }

  useEffect(() => {
    getItemsList();
  }, []);


  useEffect(() => {
    console.log("runnign");
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[isLoading]);

  return (
    <div className="App">
      <h2>Infinite Scroll</h2>
      {items.map(each => (
        <div key={each.id} style={{border: '1px solid black', padding: '24px', margin: '16px'}}>{each.id} --- {each.first_name} </div>
      ))}
    </div>
  );
}

export default App;
