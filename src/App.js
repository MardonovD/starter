import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact component={ProductList} />
          <Route path="/product/:productId" exact component={ProductDetails} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
