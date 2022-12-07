import React from 'react';
import { FaFile, FaSearch, FaUser, FaBook } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { BiNews } from 'react-icons/bi';
import { GrUserAdmin } from "react-icons/gr"

export const SidebarData = [
  {
    title: 'Complaints Dashboard',
    path: '/dashboard',
    icon: <AiFillHome style={{ textDecoration: 'none', color: '#fff' }}/>,
    cName: 'nav-text',
  },
  {
    title: 'News Feed',
    path: '/newsfeed',
    icon: <BiNews style={{ textDecoration: 'none', color: '#fff' }}/>,
    cName: 'nav-text',
  },
  {
    title: 'Make a Complaint',
    path: '/complaint',
    icon: <FaFile style={{ textDecoration: 'none', color: '#fff' }}/>,
    cName: 'nav-text',
  },
  {
    title: 'Suspects & Investigations',
    path: '/suspect',
    icon: <FaUser style={{ textDecoration: 'none', color: '#fff' }}/>,
    cName: 'nav-text',
  },
  {
    title: 'Citizen Search',
    path: '/citizen',
    icon: <FaSearch style={{ textDecoration: 'none', color: '#fff' }}/>,
    cName: 'nav-text',
  },
  {
    title: 'Supervisor',
    path: '/supervisorlogin',
    icon: <FaBook style={{ textDecoration: 'none', color: '#fff' }}/>,
    cName: 'nav-text',
  },
  {
    title: 'Admin',
    path: '/adminlogin',
    icon: <GrUserAdmin style={{ textDecoration: 'none', color: '#fff' }}/>,
    cName: 'nav-text',
  },
];
