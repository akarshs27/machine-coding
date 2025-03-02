import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");
  const [result, setResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [cache, setCache] = useState({});

  function highlightSearchText(sentence) {
    // way 1 - case sensitive
    const splittedWords = sentence.split(searchText);
    return splittedWords.join(
      `<span style="background-color: yellow;">${searchText}</span>`
    );

    // way 2 - case insensitive
    // const regex = new RegExp(`(${searchText})`, "gi"); // Case-insensitive search
    // return sentence.replace(
    //   regex,
    //   `<span style="background-color: yellow;">${searchText}</span>`
    // );
  }

  async function fetchRecipes() {
    if (searchText.length === 0) return;
    if (cache[searchText]) {
      console.log("Returning from cache");
      setResult[searchText];
      return;
    }
    try {
      console.log("Making API call");
      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${searchText}`
      );
      const data = await response.json();
      console.log(data?.recipes);
      setResult(data?.recipes);
      setCache((prev) => ({ ...prev, [searchText]: data.recipes }));
    } catch (err) {
      console.error(er);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchRecipes();
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  return (
    <div className="App">
      <p>Autocomplete</p>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onFocus={() => setShowResult(true)}
        onBlur={() => setShowResult(false)}
      />
      {searchText?.length > 0 && showResult && (
        <div className="recipe-wrapper">
          {result?.map((eachRecipes) => (
            <span
              key={eachRecipes.id}
              className="each-recipe"
              dangerouslySetInnerHTML={{
                __html: highlightSearchText(eachRecipes.name),
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
