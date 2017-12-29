import { connect } from 'react-redux';
import Helmet from 'react-helmet';

const Home = () => (
    <div>
        <Helmet
            title="React Starter Home"
            meta={[
                {"name": "description", "content": "A React Starter"},
                {"property": "og:type", "content": "article"}
            ]}
        />
        <h1>Wholesale Bratwurst for You</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu eros aliquam, consequat urna feugiat, suscipit ante. Sed faucibus elementum est sit amet tincidunt. In quis quam a felis fermentum cursus eget ut diam. Integer tincidunt, leo a mollis elementum, dolor metus pellentesque ipsum, sit amet pellentesque purus sem eget mi. Ut nisi turpis, faucibus non tempor at, mollis sed ante. Pellentesque massa nunc, tempor ut iaculis et, sollicitudin sed erat. Proin varius erat at ligula bibendum iaculis. Aenean non justo eu diam pulvinar pellentesque. In quis tellus at magna ullamcorper lacinia sed vitae dolor. Praesent quis facilisis tortor, condimentum tincidunt risus. Nam at tincidunt lacus. Praesent quis mi nec ipsum posuere vehicula ut id nibh. Cras et nisi dictum, euismod nulla quis, rutrum lectus. Praesent ac lectus commodo, finibus felis nec, vestibulum neque.
        </p>
        <p>
            Sed maximus laoreet magna vitae dapibus. Nullam interdum, libero a scelerisque sollicitudin, purus metus vestibulum erat, et convallis tellus ex molestie lectus. Maecenas sed tellus ante. Morbi at quam laoreet, molestie augue vitae, tincidunt lectus. Praesent ultricies posuere ante, id varius erat interdum sit amet. Duis porta interdum porta. Suspendisse rutrum vestibulum sem, eget egestas turpis rhoncus sit amet. Pellentesque a erat molestie, tempor ligula sit amet, facilisis dui. Nulla pulvinar gravida nisl non placerat. Praesent at mollis urna. Nulla augue quam, semper nec neque et, sollicitudin fermentum enim. Maecenas id libero at sem scelerisque lacinia.
        </p>
        <p>
            Aenean varius mattis aliquet. Aliquam dignissim porta laoreet. Aliquam vitae orci gravida, blandit justo a, dictum sem. Quisque vel purus erat. Phasellus tristique tincidunt sollicitudin. Quisque nibh ipsum, dapibus id justo vel, commodo tempor erat. Ut suscipit tortor vel sapien pellentesque, nec pharetra tortor auctor. Morbi condimentum diam in pulvinar sodales.
        </p>
    </div>
);



export default connect()(Home);
