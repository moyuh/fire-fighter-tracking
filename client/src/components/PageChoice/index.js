import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
// import Dashboard from "../../pages/Dashboard";
// import Calender from '../../pages/Calender';
// import Donations from "../../pages/Donations";
import Landing from "../../pages/Landing";

const PageChoice = (props) => {
  if (props.pageView === "Login") {
    return <Login />;
  } else if (props.pageView === "Signup") {
    return <Signup />;
  } 
  else {
    return <Landing />;
  }
};

export default PageChoice;
