import "./App.css";
import { Route, Routes, Redirect, Navigate } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import Comments from "./components/comments/Comments";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";
const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate replace to="/quotes" />}></Route>
          <Route path="/new-quote" element={<NewQuote />}></Route>
          <Route path="/quotes" element={<AllQuotes />}>
            <Route path="/quotes/:quoteId" element={<QuoteDetail />}></Route>
            <Route
              path="/quotes/:quoteId/comments"
              element={<Comments />}
            ></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
