import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="no-content">
            <h2>Sorry</h2>
            <p>Page not found</p>
            <Link to='/'>Back to Homepage</Link>
        </div>
     );
}
 
export default NotFound;