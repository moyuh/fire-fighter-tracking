import './styles/Links.css'

function Donations () {
    return (
   <div className='layer'>
        <h1 className='linkPage'>Important Links</h1>
        <p className='aboutLinks'> Just about anything you will need for the job</p>
       <a className='linksNoColor' href = 'https://www.nifc.gov/nicc/sitreprt.pdf' target="__blank"><button className='dash-btn link-btn'>Sit Report</button></a>
        <a href = 'https://iqcsweb.nwcg.gov/sites/default/files/2017-10/IQCS_Responder_Update.pdf' target="__blank"><button className='dash-btn link-btn'>IQCS Form</button></a>
        <a href = 'https://www.lightningmaps.org/#m=oss;t=3;s=0;o=0;b=;ts=0;z=5;y=26.2737;x=-83.7817;d=2;dl=2;dc=0;' target="__blank"><button className='dash-btn link-btn'>Lightning Maps</button></a>
        <a href = 'https://www.weather.gov/;' target="__blank"><button className='dash-btn link-btn'>National Weather service</button></a>
        <a href = 'https://www.nwcg.gov/sites/default/files/publications/pms461.pdf' target ="__blank"><button className='dash-btn link-btn'>Incidence Response Pocket Guide</button></a>
    </div> 
    );
};

export default Donations;