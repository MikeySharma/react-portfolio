import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu';
import facebookIcon from '../assets/facebook.svg';
import instaIcon from '../assets/insta.svg';
import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleItemClick = () => {
      setIsOpen(false);
    };
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
          const scrollNavbar = document.querySelector('.scroll-navbar');
          if(window.scrollY >= 100){
            scrollNavbar.classList.add('fixed');
          }else if(window.scrollY <= 100){
            scrollNavbar.classList.remove('fixed');
          }
        });
      })
    return (
        <>
            <header className="scroll-navbar top-0 z-50 w-full">
                <section className="top-header container mx-auto">
                    <div className="flex items-center justify-between py-4 font-bold">

                        <Link to="/" className="logo-header  text-2xl">
                            MIKEY
                        </Link>
                        <div className="header-links flex items-center justify-between gap-6 font-medium">
                            <Link to='/'>Home</Link>
                            <Link to='/about'>About</Link>
                            <Link to='/services'>Services</Link>
                            <Link to='/portfolio'>Portfolio</Link>
                            <Link to='/contact'>Contact</Link>
                        </div>
                        <div className="hamburger-menu hidden">
                            <Menu  isOpen={isOpen} onStateChange={(state) => setIsOpen(state.isOpen)} right>
                                <Link onClick={handleItemClick} to='/'>Home</Link>
                                <Link onClick={handleItemClick} to='/about'>About</Link>
                                <Link onClick={handleItemClick} to='/services'>Services</Link>
                                <Link onClick={handleItemClick} to='/portfolio'>Portfolio</Link>
                                <Link onClick={handleItemClick} to='/contact'>Contact</Link>
                                <div className="social-icons">
                                    <div className="flex items-center justify-center px-2 gap-4">
                                        <Link onClick={handleItemClick} to="https://linkedin.com/in/mikey-sharma" target="_blank"><img src={linkedinIcon} alt="linkedIn Icon" className='h-6' /></Link>
                                        <Link onClick={handleItemClick} to="https://github.com/MikeySharma" target="_blank"><img src={githubIcon} alt='github Icon' className='h-6' /></Link>
                                        <Link onClick={handleItemClick} to="https://instagram.com/mikeysharma99gmail.com2?igshid=MWV5NjZmNjNqZHVnYw==" target="_blank"><img src={instaIcon} alt="Insta Icon" className='h-6' /></Link>
                                        <Link onClick={handleItemClick} to="https://www.facebook.com/profile.php?id=61551811168727" target="_blank"><img src={facebookIcon} alt="facebook Icon" className='h-6' /></Link>
                                    </div>
                                </div>
                            </Menu>
                        </div>
                    </div>

                </section>
            </header>
        </>
    )
}

export default Header
