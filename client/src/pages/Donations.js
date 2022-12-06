
import './styles/Donations.css';

function Donations () {
    return (
   <div className= 'layer'>
        <h1 className='donate'>Donations Page</h1>
        <p className='shrink'> Here is a link to accept donations to help contribute to our work. We have worked very hard to make the lives of these brave fire fighters a little easier. With your support we can continue to add more features and continue supporting this cause. Thank you so very much! </p>
       <a className='linksNoColor' href = 'https://buy.stripe.com/test_eVa00HdnPdpC9aMdQQ' target="__blank"><button className='dash-btn'>Donate to Our Work Here</button></a>

        <p className='topper'>Here are some additional links to help support this important cause </p>
        <a href = 'https://wffoundation.org/' target="__blank"><button className='dash-btn'>Wildland Firefighter Foundation</button></a><br></br>
        <a href = 'https://www.grassrootswildlandfirefighters.com/' target ="__blank"><button className='dash-btn lastBtn'>Grassroots Wildaland Firefighters</button></a>
    </div> 
    );
};

export default Donations;