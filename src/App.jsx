import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  BudgetContainer,
  BudgetListContainer,
  LoginContainer,
  SignUpContainer,
} from "./components/pages";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginContainer />} />
          <Route path="/signUp" element={<SignUpContainer />} />
          <Route element={<Layout />}>
            <Route path="/budget" element={<BudgetContainer />} />
            <Route path="/budgetList" element={<BudgetListContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
