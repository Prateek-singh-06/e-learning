import logo from "./assets/logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/Homes/Home";
// import Profile from "./components/header/profile-drop-down"
import Footer from "./components/Footers/footer";
import Course from "./components/Courses/Course";
import CourseDetails from "./components/Courses/CourseDetails";
import Event from "./components/Events/Event";
import Subscribe from "./components/payment/payment";
import Signin from "./components/users/signin";
import SignUpPage from "./components/users/signup";

import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/courses" element={<Course />} />
          <Route exact path="/Subscribe" element={<Subscribe />} />
          <Route exact path="/Events" element={<Event />} />
          <Route exact path="/Signin" element={<Signin />} />
          <Route exact path="/Signup" element={<SignUpPage />} />
          <Route
            exact
            path="/courses/courseDetails"
            element={<CourseDetails />}
          />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
