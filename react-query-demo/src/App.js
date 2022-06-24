import { Routes, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import "./App.css";
import SuperHeroes from "./components/SuperHeroes";
import RQSuperHeroes from "./components/RQSuperHeroes";
import Home from "./components/Home";
import { ReactQueryDevtools } from "react-query/devtools";
import RQSuperDetail from "./components/RQSuperDetail";
import ParalleQuery from "./components/ParalleQuery";
import { DynamicQuery } from "./components/DynamicQuery";
import DependentQuery from "./components/DependentQuery";
import { Pagination } from "./components/Pagination";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heroes">Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-super-heroes">RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/super-heroes" element={<SuperHeroes />} />
          <Route
            path="/dynamic-heroes"
            element={<DynamicQuery heroIds={[1, 3]} />}
          />
          <Route
            path="/dependent"
            element={<DependentQuery email="vishwas@example.com" />}
          />
          <Route path="/paginate" element={<Pagination />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
          <Route path="/rq-super-heroes/:heroId" element={<RQSuperDetail />} />
          <Route path="/" element={<Home />} />
          <Route path="/parel" element={<ParalleQuery />} />
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
