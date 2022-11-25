import './Footer.scss'
export const Footer = () => {
    return (
        <footer>
            <div className="flex-container">
                <div className="get_in_touch">
                    <h3>Get In Touch</h3>
                    <p>the quick fox jumps over the lazy dog</p>
                    <ul className="social-media">
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </li>

                    </ul>
                </div>
                <div className="company_info">
                    <h3>Company Info</h3>
                    <a href="#">About Us</a>
                    <a href="#">Carrier</a>
                    <a href="#">We are hiring</a>
                    <a href="#">Blog</a>
                </div>
                <div className="features">
                    <h3>Features</h3>
                    <a href="#">Business Marketing</a>
                    <a href="#">User Analytic</a>
                    <a href="#">Live Chat</a>
                    <a href="#">Unlimited Support</a>
                </div>
                <div className="resources">
                    <h3>Resources</h3>
                    <a href="#">IOS & Android</a>
                    <a href="#">Watch a Demo</a>
                    <a href="#">Customers</a>
                    <a href="#">API</a>
                </div>
            </div>
        </footer>
    )
}