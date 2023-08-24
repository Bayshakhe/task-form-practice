import React from 'react';

const Header = () => {
    return (
        <nav className='bg-sky-400 p-3 text-white font-semibold'>
            <ul className='flex justify-left ml-5 gap-7'>
                <li><a href="/">Form(Funtion)</a></li>
                <li><a href="/hookForm">Form(HookForm)</a></li>
                <li><a href="/class">Form(Class)</a></li>
                <li><a href="/nestedProperty"> Nested Form(Class)</a></li>
            </ul>
        </nav>
    );
};

export default Header;