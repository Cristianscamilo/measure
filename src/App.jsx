import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginContainer, SignUpContainer } from "./components/pages";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginContainer />}/>
        <Route path="/signUp" element={<SignUpContainer />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
