import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import NotFound from "./components/NotFound/NotFound";
import Restaurant from "./components/Restaurant/Restaurant";

function App() {
  return (
    <div className="App mt-5">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/restaurant" element={<Restaurant />}></Route>
        <Route path="/item/:mealdb" element={<ItemDetails />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
