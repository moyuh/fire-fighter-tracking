import Dashboard from "../../pages/Dashboard";
import Calender from '../../pages/Calender';
import Donations from "../../pages/Donations";
import IQCS from "../../pages/IQCS";

const LoggedPages = (props) => {
    if (props.pageView === "Calender") {
      return <Calender />;
    } 
    else if (props.pageView === "IQCS") { 
        return <IQCS/>;
      } 
    else if (props.pageView === "Donations") { 
      return <Donations/>;
    } 
    else {
      return <Dashboard/>;
    }
  };
  
  export default LoggedPages;