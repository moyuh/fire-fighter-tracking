import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import Home from "../../pages/Home";
// import Calender from '../../pages/Calender';
import Donations from "../../pages/Donations";
import Landing from "../../pages/Landing";

const PageChoice = (props) => {
  if (props.pageView === "Login") {
    return <Login />;
  } else if (props.pageView === "Signup") {
    return <Signup />;
  } else if (props.pageView === "Home") {
    return <Home />;
  }
  //  else if (props.pageView === 'Calender'){
  //     return<Calender/>
  //  }
  else if (props.pageView === "Donations") {
    return <Donations />;
  } else {
    return <Landing />;
  }
};

export default PageChoice;
