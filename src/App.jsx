import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Category from "./pages/Category";
import NumbersCategory from "./pages/NumbersCategory";
import LatinCategory from "./pages/LatinCategory";
import CyrillicCategory from "./pages/CyrillicCategory";
import Home from "./pages/Home/Home";
import AllArchive from "./pages/AllArchive/AllArchive";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="songs" element={<AllArchive />} />
        <Route path="songs/numbers" element={<NumbersCategory />} />
        <Route path="songs/latin" element={<LatinCategory />} />
        <Route path="songs/cyrillic" element={<CyrillicCategory />} />
        <Route path="songs/numbers/:digit" element={<Category />} />
        <Route path="songs/latin/:letter" element={<Category />} />
        <Route path="songs/cyrillic/:letter" element={<Category />} />
      </Route>
    </Routes>
  );
}

export default App;
