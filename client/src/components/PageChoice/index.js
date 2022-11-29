import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import Landing from "../../pages/Landing";


const PageChoice = (props) => {
  if (props.pageView === "Login") {
    return <Login />;
  } else if (props.pageView === "Signup") {
    return <Signup />;
  } 
  else {
    return <Landing  pageView = {props.pageView}
    setPageView = {props.setPageView}/>;
  }
};

export default PageChoice;
