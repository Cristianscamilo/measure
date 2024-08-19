import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  BudgetContainer,
  BudgetListContainer,
  LoginContainer,
  SignUpContainer,
} from "./components/pages";
import Layout from "./components/layout/Layout";
import BudgetContextProvider from "./components/context/BudgetContext";

function App() {
  return (
    <>
      <BrowserRouter>
      <BudgetContextProvider>

        <Routes>
          <Route element={<Layout />}>
          <Route path="/" element={<LoginContainer />} />
          { <Route path="/signUp" element={<SignUpContainer />} />}
            <Route path="/budget" element={<BudgetContainer />} />
            <Route path="/budgetList" element={<BudgetListContainer />} />
          </Route>
        </Routes>
      
      </BudgetContextProvider>
      
      </BrowserRouter>
    </>
  );
}

export default App;
