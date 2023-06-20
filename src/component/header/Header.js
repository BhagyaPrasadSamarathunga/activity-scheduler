import React from 'react';
const Header = ({title}) => {
    return(
        <header className='w-full p-4 flex justify-between items-center bg-sky-300 text-2xl'>
            <h1>{title}</h1>
        </header>
    )
}
export default Header; 