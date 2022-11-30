import Dashboard from "../../pages/Dashboard";
import Donations from "../../pages/Donations";
import IQCS from "../../pages/IQCS";
import Calender from '../../pages/Calender';


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
      return <Dashboard pageView={props.pageView}
      setPageView = {props.setPageView}/>;
    }
  };
  
  export default LoggedPages;