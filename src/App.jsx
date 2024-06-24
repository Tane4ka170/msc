import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import AllArchive from "./pages/AllArchive";
import Category from "./pages/Category";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/songs" element={<AllArchive />} />
        <Route path="/songs/numbers/:digit" element={<Category />} />
        <Route path="/songs/latin/:letter" element={<Category />} />
        <Route path="/songs/cyrillic/:letter" element={<Category />} />
      </Route>
    </Routes>
  );
}

export default App;
