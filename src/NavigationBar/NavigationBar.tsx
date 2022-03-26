import "./navBar.scss"
import {useNavigate} from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate();

    return(
        <div id="navigationBar">
            <div id="barLoginButtonContainer">
                <div className="custonButton" onClick={()=> {navigate("/login")}}>
                    Login
                </div>
                <div className="custonButton"  onClick={()=> {navigate("/login")}}>
                    Sign up
                </div>
            </div>
        </div>
    )
}