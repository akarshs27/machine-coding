import { useEffect, useState } from 'react';
import useDebounce from './useDebounce';
import './App.css';

const PER_PAGE = 25;

function App() {
  const [beers, setBeersData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  async function getBeers(page, PER_PAGE, search) {
    setLoading(true);
    let beerName = search.length > 0 ? `&beer_name=${search}` : '';
    try {
      let res = await fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${PER_PAGE}${beerName}`);
      let responseData = await res.json();
      setBeersData(responseData);
    } catch(err) {
      throw new Error('Error fetching Data');
    }
    setLoading(false);
  }

  useEffect(() => {
    getBeers(page, PER_PAGE, search);
  },[page, search]);

  function onChange(event) {
    console.log("Event", event.target.value);
    setSearch(event.target.value);
  }

  const debounceSearch = useDebounce(onChange, 300);

  return (
    <div className="App">
    <div className='header-wrapper'>
      <p>Select Page</p>
      <select onChange={(event) => setPage(event.target.value)}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <p>Search</p>
      <input type='search' value={search} onChange={debounceSearch} />
    </div>
     {isLoading ? 'Loading' : (
      <div className='wrapper'>
        {beers.map(each => (
          <div key={each.id} className='each-card'>
            <img src={each.image_url} alt={each.name} className='hero-img'/>
            <p>{each.name}</p>
            </div>
        ))}
        </div>
     )}
    </div>
  );

}

export default App;
