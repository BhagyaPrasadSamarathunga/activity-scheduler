import React from 'react';

const Footer = () => {
    const today = new Date();
    return (
        <footer className='w-full p-4 flex justify-between items-center bg-sky-300 place-content-center grid p-3'>
            <p>Copyright &copy; {today.getFullYear()}</p>
        </footer>
    )
}
export default Footer;