import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const Header = props => {
    const {branding} = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3">
            <Link to="/" className="navbar-brand ml-5">{branding}</Link>
            <div className="container-fluid">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <i className="fas fa-home"></i> Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact/add" className="nav-link">
                             <i className="fas fa-plus"></i> Add
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">
                            <i className="fas fa-question"></i>  About
                        </Link>
                    </li>
                </ul>    
            </div>
        </nav>
    );
}

Header.defaultProps = {
    branding: 'My App'
}

Header.propTypes = {
    branding: PropTypes.string.isRequired
}

// const headingStyle = {
//     color: '#565656',
//     fontSize: '50px'
// }

export default Header;