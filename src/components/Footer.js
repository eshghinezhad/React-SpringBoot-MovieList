import React from 'react';
const linkRulse = {
    color: 'white',
    marginLeft: '10px',
};
const Footer = () => {

    return(

        <footer style={{ backgroundColor: '#000000', color: 'white', padding: '20px', textAlign: 'center' }}>
            <p>© 2025 Movie.ca. All rights reserved.</p>
            <p>Follow us on social media:  
                <a href="https://twitter.com" style={{ linkRulse }}> Twitter </a> | 
                <a href="https://facebook.com" style={{ linkRulse }}> Facebook </a> | 
                <a href="https://instagram.com" style={{ linkRulse }}> Instagram </a>
            </p>
        </footer>
    )

}
export default Footer;
