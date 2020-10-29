import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as SiIcons from 'react-icons/si';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/login',
        icon: <IoIcons.IoIosLogIn />,
        cName: 'nav-text'
    },
    {
        title: 'Rejestracja',
        path: '/register',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'O autorze',
        path: '/about',
        icon: <SiIcons.SiAboutDotMe />,
        cName: 'nav-text'
    }
];