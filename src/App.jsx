import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { Suspense, lazy, useEffect } from "react";
import Loader from "./components/Loader/Loader";
import { warmUpServer } from "./api/api";

const Home = lazy(() => import("./pages/Home/Home"));
const AllArchive = lazy(() => import("./pages/AllArchive/AllArchive"));
const NumbersCategory = lazy(() => import("./pages/Letters/NumbersCategory"));
const LatinCategory = lazy(() => import("./pages/Letters/LatinCategory"));
const CyrillicCategory = lazy(() => import("./pages/Letters/CyrillicCategory"));
const Category = lazy(() => import("./pages/Category/Category"));

function App() {
  useEffect(() => {
    warmUpServer();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="songs"
          element={
            <Suspense fallback={<Loader />}>
              <AllArchive />
            </Suspense>
          }
        />
        <Route
          path="songs/numbers"
          element={
            <Suspense fallback={<Loader />}>
              <NumbersCategory />
            </Suspense>
          }
        />
        <Route
          path="songs/latin"
          element={
            <Suspense fallback={<Loader />}>
              <LatinCategory />
            </Suspense>
          }
        />
        <Route
          path="songs/cyrillic"
          element={
            <Suspense fallback={<Loader />}>
              <CyrillicCategory />
            </Suspense>
          }
        />
        <Route
          path="songs/numbers/:digit"
          element={
            <Suspense fallback={<Loader />}>
              <Category />
            </Suspense>
          }
        />
        <Route
          path="songs/latin/:letter"
          element={
            <Suspense fallback={<Loader />}>
              <Category />
            </Suspense>
          }
        />
        <Route
          path="songs/cyrillic/:letter"
          element={
            <Suspense fallback={<Loader />}>
              <Category />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
