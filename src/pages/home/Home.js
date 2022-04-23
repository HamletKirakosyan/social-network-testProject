import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Homepage</h1>
            <Link to="/products">Products</Link>
        </div>
    )
};

export default Home;