import './TopNav.css'
import logo from "../assets/logo/Pinterest-logo.png"
function TopNav() {
    return (
      <div className="Nav">
        <div className="TopNavContent">
            <div>
                <img src={logo} alt="logo" className="logo"/>
             </div>

            <div>
                <h3> About</h3>
                <h3> Business</h3>
                <h3>Blog</h3>
                <h3>Log In</h3>
                <h3>Sign up</h3>
             </div>
            
          

        </div>
       
      </div>
    );
  }
  
  export default TopNav;