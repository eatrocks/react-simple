import { connect } from 'react-redux';
import Helmet from 'react-helmet';

const Home = () => (
    <div>
        <Helmet
            title="Contact Information"
            meta={[
                {"name": "description", "content": "Bruce's Bratwurst Contact Information"},
                {"property": "og:type", "content": "article"}
            ]}
        />
        <h1>Contact Us</h1>
        <p>Email: my fake email address</p>
        <p>Phone: (801) 555-1212</p>
    </div>
);



export default connect()(Home);
