
import './App.css';
import Recipe from './Recipe';
import React ,{useEffect,useState} from 'react';
const App = () =>
{
  const AppId="e5d3bf2c";
  const AppKey="75f92a4f6ce371b872c02b96f1b82458";

  const exampleReq=`https://api.edamam.com/api/recipes/v2/0123456789abcdef0123456789abcdef?app_id=AppId&app_key=AppKey&type=public`;
  
  const [counter,setCounter] = useState(0);
  
  const [search,setSearch]= useState("");

  const [recipes,setRecipes]=useState([]);

  const [query,setQuery]=useState('chicken')
  useEffect(()=>{

    getRecipes();


    
  
  },[query]);


  const getRecipes =async() => {
    const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${AppId}&app_key=${AppKey}`);
    const data =await response.json();
    setRecipes(data.hits);

  }

  const updateSearch = e =>
  {
    setSearch(e.target.value);
  }

  const getSearch = e =>
  {
    e.preventDefault();
    setQuery(search);

  }
  
  
  
  return(
    <div className="App">

      <h1> <span className='title'> Aditya Shekhar Recipe Application</span> </h1>

      <form className='search-form' onSubmit={getSearch}>
        <input className='search-bar' type="text" value={search} onChange={updateSearch} />
        <button className='search-button'  type="submit">Search</button>
      </form>

      <div className='recipes'>
      {recipes.map(recipe =>(
        <Recipe 
        key={recipe.recipe.label}
        title ={recipe.recipe.label}
         calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}/>

      ))};


      </div>



    </div>
  );
}

export default App;
