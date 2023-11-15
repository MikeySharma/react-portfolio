import {useEffect} from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const MainLayout = () => {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[pathname])

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayout
