import Image from 'next/image';
import React from 'react';

const Footer : React.ElementType = () => {
    return (
        <footer className="footer">
            <a
                href="https://www.sicot-development.fr/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' sicot-development '}
            </a>
            <a href="/legalNotice">Mention légal</a>
        </footer>
    )
}
export default Footer;