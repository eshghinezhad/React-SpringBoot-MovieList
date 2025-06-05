import React from 'react';

const Footer = () => {

    return(

        <footer style={{ backgroundColor: '#282c34', color: 'white', padding: '20px', textAlign: 'center' }}>
            <p>© 2025 Movie.ca. All rights reserved.</p>
            <p>Follow us on social media: 
                <a href="https://twitter.com" style={{ color: 'white', marginLeft: '10px' }}>Twitter</a> | 
                <a href="https://facebook.com" style={{ color: 'white', marginLeft: '10px' }}>Facebook</a> | 
                <a href="https://instagram.com" style={{ color: 'white', marginLeft: '10px' }}>Instagram</a>
            </p>
        </footer>
    )

}
export default Footer;
