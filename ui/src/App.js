import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddDetails from "./Component/AddDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import ViewDetails from "./Component/ViewDetails";
import Edituser from "./Component/Edituser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddDetails />} />
          <Route path="/View" element={<ViewDetails />} />
          <Route path="/Edit" element={<Edituser />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
