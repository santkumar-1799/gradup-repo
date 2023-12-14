import './styles.css';

const Header = () => {

    return (
    <div className="header">
        <div className="logo">GradUp</div>
            <div className="navbar">
                <a href="#">About</a>
                <a href="#">Explore</a>
                <a href="#">Jobs</a>
                <a href="#">Courses</a>
                <a href="#">Community</a>
                <div className="login-button" href="#">
                    Login
                </div>
            </div>
      </div>
    );

}
export default Header;