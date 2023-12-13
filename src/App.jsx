import Product from "./component/product";
import useFetch from "./component/useFetch";

function App() {
    const data = useFetch("http://localhost:3000/meals")
    console.log(data)

  return (
    <div>
        <header id="main-header">
            <h1 id="title">
                <img src="./assets/logo.jpg"></img>
                REACT FOOD
            </h1>
            <button className="text-button">cart</button>
        </header>
        <div id="meals">
            {data && data.map((meal)=>{
                <Product key={meal.id} imgUrl={meal.image} foodTitle={meal.name} price={meal.price} desc={meal.description}></Product>
            })
            // :
                // <div className="text-button">Loading Meals</div>
            }
        </div>
    </div>
  );
}

export default App;
