
import './styles/Donations.css';

function Donations () {
    return (
   <div>
        <h1 >Donations Page</h1>
        <p className='shrink'> Here is a link to accept donations to help contriubte to our work. We have worked very hard to make the lives of these brave fire fighters a little easier. With your support we can continue to add more features and continue supporting this cause. Thank You so very much! </p>
        <a  href = 'https://buy.stripe.com/test_eVa00HdnPdpC9aMdQQ' >Donate to Our Work Here</a>

        <p className='topper'>Here are some additional links to help support this important cause </p>
        <a href = 'https://wffoundation.org/'>Wildland Firefighter Foundation</a><br></br>
        <a href = 'https://www.grassrootswildlandfirefighters.com/'>Grassroots Wildaland Firefighters</a>
    </div> 
    );
};

export default Donations;