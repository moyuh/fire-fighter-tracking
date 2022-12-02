import Dashboard from "../../pages/Dashboard";
import Donations from "../../pages/Donations";
import Links from "../../pages/Links";
import Calender from '../../pages/Calender';


const LoggedPages = (props) => {
    if (props.pageView === "Calender") {
      return <Calender />;
    } 
    else if (props.pageView === "Links") { 
        return <Links/>;
      } 
    else if (props.pageView === "Donations") { 
      return <Donations/>;
    } 
    else {
      return <Dashboard pageView={props.pageView}
      setPageView = {props.setPageView}/>;
    }
  };
  
  export default LoggedPages;