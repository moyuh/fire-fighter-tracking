
import { Link } from 'react-router-dom';

function donate () {
    return (
   <div>
        <h1>Donations Page</h1>
        <p> Here is a link to accept donations to help contriubte to our work. We have worked very hard to make the lives of these brave fire fighters a little easier. With your support we can continue to add more features and continue supporting this cause. Thank You so very much! </p>
        <Link to = 'https://buy.stripe.com/test_eVa00HdnPdpC9aMdQQ'>Donate Here</Link>

        <p>Here are some additional links to help support this important cause </p>
        <Link to = 'https://wffoundation.org/'>Wildland Firefighter Foundation</Link>
        <Link to = 'https://www.grassrootswildlandfirefighters.com/'>Grassroots Wildaland Firefighters</Link>
    </div> 
    )
}

export default donate;