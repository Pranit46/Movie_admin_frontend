import "./App.css";
import AddMovie from "./components/AddMovie";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import AddTheater from "./components/AddTheater";
import ShowTime from "./components/ShowTime";
import AddScreenT from "./components/AddScreenT";
import AssignScreenT from "./components/AssignScreenT";
import ViewDetails from "./components/ViewDetails";

function App() {
  return (
    <Router>
      {/* <Shows/> */}
      <Routes>
        <Route path="/" element={<AddMovie />} />
        <Route path="/showMovie" element={<Movies />} />
        <Route path="/addTheatre" element={<AddTheater />} />
        <Route path="/addShow/:mid" element={<ShowTime />} />
        {/* <Route path="/addScreen" element={<AddScreenT />}>
          <Route path=":id" element={<AssignScreenT />} />
        </Route> */}
        <Route path="/addScreen" element={<AddScreenT />}/>
        <Route path="/addScreen/:id/:tname" element={<AssignScreenT />} />
        <Route path="/viewDetails/:mname" element={<ViewDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
