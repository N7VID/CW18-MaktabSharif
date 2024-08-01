import Cart from "./components/cart/cart";
import ProductsContainer from "./components/productsContainer/productsContainer";

function App() {
  return (
    <div className="flex justify-around">
      <ProductsContainer />
      <Cart />
    </div>
  );
}

export default App;
