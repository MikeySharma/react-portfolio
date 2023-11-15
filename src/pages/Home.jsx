import { useEffect, useState } from 'react'
import profilePic from '../assets/Picsart_23-11-08_14-46-53-572.jpg';
import facebookIcon from '../assets/facebook-white.svg';
import instaIcon from '../assets/insta-white.svg';
import linkedinIcon from '../assets/linkedin-white.svg';
import githubIcon from '../assets/github-white.svg';
import { Link } from 'react-router-dom';
import TextTransition, { presets } from 'react-text-transition';
import aboutProfile from '../assets/1699508096903-01.jpg';
import CustomButton from '../components/CustomButton';
import ServiceCard from '../components/ServiceCard';
import WorksCard from '../components/WorksCard';
import { motion } from "framer-motion";

const Home = () => {
  const TEXTS = ["Full Stack", "Web App", "MERN JS", "React.js"];
  const [index, setIndex] = useState(0);

  setTimeout(() => {
    if (index >= TEXTS?.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }, 3000)

  return (
    <motion.div 
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}>
      <section className="home-wrapper-1 ">
        <div className="container mx-auto">
          <div className="grid grid-cols-12">
            <div className="home-res-1 col-span-6 flex items-center justify-center">
              <div className="home-info flex  items-center justify-center gap-6 flex-col">
                <h1>Mikey Sharma</h1>
                <h5 className="flex items-center justify-between"><TextTransition springConfig={presets.wobbly}>{TEXTS[index]}</TextTransition>Developer</h5>
                <div className="buttons flex items-center justify-between gap-4">
                  <CustomButton onClick={() => window.open('https://wa.me/9825850687', '_blank')} title="Hire Me" />
                  <CustomButton onClick={() => window.open('https://wa.me/9825850687', '_blank')} title="Contact Me" />
                </div>
              </div>
            </div>
            <div className="home-res-2 col-span-6 flex items-center justify-center relative">
              <div className="img-holder">
                <img src={profilePic} alt="Profile picture" />
              </div>
              <div className="social-icons absolute">
                <div className="flex items-center justify-center px-2 gap-4 flex-col">
                  <Link to="https://linkedin.com/in/mikey-sharma" target="_blank"><img src={linkedinIcon} alt="linkedIn Icon" className='h-6' /></Link>
                  <Link to="https://github.com/MikeySharma" target="_blank"><img src={githubIcon} alt='github Icon' className='h-6' /></Link>
                  <Link to="https://instagram.com/mikeysharma99gmail.com2?igshid=MWV5NjZmNjNqZHVnYw==" target="_blank"><img src={instaIcon} alt="Insta Icon" className='h-6' /></Link>
                  <Link to="https://www.facebook.com/profile.php?id=61551811168727" target="_blank"><img src={facebookIcon} alt="facebook Icon" className='h-6' /></Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className="about-wrapper py-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-20">
            <div className=" about-img-holder col-start-2 col-span-3 flex items-center justify-center">
              <img src={aboutProfile} alt="about profile pic" />
            </div>
            <div className="about-info col-span-4 flex items-start justify-center flex-col">
              <h2 className="ml-0">About</h2>
              <p>Experienced Full Stack MERN Developer with a strong background in designing and implementing scalable web applications. Proficient in MongoDB, Express.js, React, and Node.js, with a keen eye for UI/UX design high-quality software solutions on time and within budget. Adept at troubleshooting, debugging, and continuously optimizing code for optimal performance. Passionate about staying updated on emerging technologies and leveraging them to enhance project efficiency.</p>
            </div>
            <div className="hire-me col-span-3 flex items-start justify-center flex-col">
              <h3 className="ml-0">Hire Me</h3>
              <p className="mb-4">If You liked my profile and wanted to make your dream project success then what are you waiting for?</p>
              <CustomButton onClick={() => window.open('https://wa.me/9825850687', '_blank')} title="Hire Me" />
            </div>

          </div>

        </div>
      </section>
      <section className="service-wrapper py-5">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-12 gap-4">
            <div className="service-info  col-span-4 flex items-start justify-center h-80 flex-col">
              <h2 className='text-4xl mb-5 font-bold'>Services</h2>
              <h5 className="text-md font-medium">Here it's my services that will integrate your dream project into code. </h5>
              <CustomButton onClick={() => window.open('https://wa.me/9825850687', '_blank')} class1="text-blue-500 mt-4" title="Hire me" />
            </div>
            <div className="service-card-holder col-start-6 col-span-7 flex items-center ">
              <div className="grid grid-cols-2 gap-4">
                <ServiceCard title="UI/UX Design" subtitle="Design eye catching frontend" desc="Through a clean and minimalistic design approach, I prioritize simplicity without compromising functionality, ensuring that users can seamlessly navigate and interact with the application. By integrating a well-thought-out visual hierarchy, I emphasize essential elements and guide users intuitively through the interface. Responsive design techniques are applied to cater to various devices, enhancing accessibility and providing a consistent experience across platforms." remarks="Excellent" />
                <ServiceCard title="Restful API" subtitle="Integrate frontend from Restful API" desc="Proficient in integrating frontend with RESTful APIs, I possess the skills to seamlessly connect web applications to backend services, ensuring a smooth flow of data and interactions. Through meticulous understanding of API endpoints and their responses, I can design and implement frontend components that efficiently fetch and display data from the server." remarks="Very Good" />
                <ServiceCard title="Node.js Backend" subtitle="Develop powerful backend for Web App" desc='I specialize in developing robust and powerful backends for web applications. With expertise in designing scalable architectures, managing databases, and implementing efficient API endpoints, I ensure that the backend infrastructure seamlessly supports the frontend, enabling the creation of high-performance and feature-rich web applications. My skills encompass optimizing server-side processes, handling data securely, and implementing functionalities that contribute to a seamless user experience.' remarks="Good"/>
                <ServiceCard title="MongoDB Server" subtitle="CRUD Data from MongoDB server" desc="I excel in performing CRUD (Create, Read, Update, Delete) operations on MongoDB servers. Proficient in designing efficient data models, I can seamlessly manage interactions with MongoDB databases, ensuring effective storage, retrieval, updating, and deletion of data. My expertise lies in crafting backend solutions that leverage the power and flexibility of MongoDB to enhance the overall functionality and performance of web applications." remarks="Very Good" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="works-wrapper py-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="work-head col-start-2 col-span-3">
              <h2 className="text-4xl mb-4 font-bold">My Works</h2>
              <h5 className="text-sm font-normal">Here it's my recent project works. </h5>
              <CustomButton onClick={() => window.open('https://github.com/MikeySharma', '_blank')} class1="my-4" title="Go To Github" />
            </div>
          </div>
          <div className="grid grid-cols-12 my-5 gap-4">
            <div className="work-card-holder col-start-2 col-span-12 grid grid-cols-12 gap-4">
              <WorksCard title="E-commerce user" subtitle="A Eye Sighting Frontend For E-commerce Web App" desc="An eCommerce web app frontend is the user interface of an online store, designed for a seamless shopping experience. It showcases products with clear images and descriptions, facilitates easy navigation, and includes features like search, filters, and a shopping cart. The checkout process is streamlined with secure payment integration, order tracking, and user authentication. Additionally, it incorporates elements like user reviews, responsive design for various devices, security measures, and performance optimization. Wishlist and favorites, contribute to an engaging and accessible eCommerce platform." link={<a className='font-medium text-md px-2 py-1 rounded-md bg-white text-black' href="https://emithila.netlify.app" target="_blank">Live Demo</a>} />
              <WorksCard title="E-commerce Admin" subtitle="A Admin Panel (Descktop) Frontend use(admin@gmail.com & admin for login)" desc="The admin panel is a crucial tool for eCommerce site owners, providing them with the control and insights needed to efficiently run their online business. It centralizes management tasks, enhances decision-making through analytics, and streamlines the overall operation of the eCommerce platform." link={<a className='font-medium text-md px-2 py-1 rounded-md bg-white text-black' href="https://emithila-admin.netlify.app" target="_blank">Live Demo</a>} />
            </div>
            <div className="work-card-holder col-start-2 col-span-12 grid grid-cols-12 gap-4">
              <WorksCard title="E-commerce web app Backend" subtitle="A Powerful Backend For E-commerce Web App" desc='the backend of an eCommerce web app is the core infrastructure responsible for managing data, processing transactions, and ensuring the smooth functioning of the entire application. It plays a crucial role in handling the complexities of eCommerce operations, providing the necessary support for a secure, efficient, and scalable online store.' />
              <WorksCard title="DSC College"subtitle="A Simple One Page Website For A Private Institute" desc="A simple eye-sighting website offers an interactive eye test with letters or symbols, allowing users to check their visual acuity. It includes features for assessing color perception and provides educational content on eye health. The site incorporates tips for reducing eye strain, maintains a responsive design, and encourages regular breaks using the 20-20-20 rule. Users can track their progress, engage in quizzes, and access contact information for eye care professionals. Privacy and data security measures are implemented, and the website aims to promote good vision practices through accessible and user-friendly features." link={<a className='font-medium text-md px-2 py-1 rounded-md bg-white text-black' href="https://mikeysharma.github.io/Dhanusha_Campus/" target="_blank">Live Demo</a>} />
            </div>
          </div>
        </div>

      </section>
      <section className="hire-wrapper py-5">
        <div className="available-card  h-fit container mx-auto relative">
          <div className="flex items-center justify-center flex-col">
            <h1 className="font-medium text-4xl py-4 uppercase text-yellow-500">I am available for freelance</h1>
            <p className="font-medium text-xl py-4 capitalize text-yellow-500">If You Liked my portfolio and wants to change your vision into clean code.</p>
            <CustomButton onClick={() => window.open('https://wa.me/9825850687', '_blank')} class1="mb-4" title="Hire Me Now" />
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home
