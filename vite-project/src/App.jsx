import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import GlobalStyle from "./components/common/Globalstyle";
import ItemPage from "./components/page/ItemPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<ItemPage />} />
        <Route path="/items" element={<ItemPage />} />
        <Route path="/additem" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
