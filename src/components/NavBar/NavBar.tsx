import './NavBar.scss';

export const NavBar=()=>{
    return (
        <nav>
        <h1>
            <a href="index.html">BrandName</a>
        </h1>
        <ul>
            <li className="nav_link">
                <a href="index.html">Home</a>
            </li>
            <li className="nav_link">
                <a href="product.html">Product</a>
            </li>
            <li className="nav_link">
                <a href="#">Pricing</a>
            </li>
            <li className="nav_link">
                <a href="#">Contact</a>
            </li>
        </ul>
        <div className="sign_in_up">
            <a href="#" className="nav_link">Login</a>
            <button className="nav_link">
                Join Us
                <a href="#"></a>
                <span> <i className="fa-solid fa-arrow-right"></i></span>
            </button>
        </div>
        <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
    </nav>
    );
};