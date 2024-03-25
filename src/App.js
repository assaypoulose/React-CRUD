import {BrowserRouter, Routes, Route} from "react-router-dom";
import ActionEmployee from "./ActionEmployee";
import ShowAllEmployee from "./ShowAllEmployee";
import ViewEmployee from "./ViewEmployee";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowAllEmployee />} />
        <Route path='/action' element={<ActionEmployee />} />
        <Route path='/action/:id' element={<ActionEmployee />} />
        <Route path='/action/:id/:isView' element={<ActionEmployee />} />
        <Route path='/viewEmployee' element={<ViewEmployee />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
