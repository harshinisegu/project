import {Link} from "react-router-dom";
function Navigation(){
    return (
        <div>
            <Link to="/" >Home</Link>
            <Link to="/profile" >Profile</Link>
        </div>
    );
}
export default Navigation;