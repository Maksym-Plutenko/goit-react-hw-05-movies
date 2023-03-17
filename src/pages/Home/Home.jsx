import PropTypes from "prop-types";
import apiserver from "../../utilites/apiserver";

const Home = () => {
    const resp = apiserver.trending();
    console.log('resp is...');
    console.log(resp);

    return (
        <h2>Trending today</h2>
    )

}

export default Home;