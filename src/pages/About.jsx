import React from 'react'
import WorksCard from '../components/WorksCard'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <>
      <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
       className="about-page-wrapper py-5 mt-20 ">
        <div className="container mx-auto px-5">
          <div className="mt-5 font-bold text-4xl About">
            About
          </div>
          <div className="py-5 font-normal text-sm">
          Experienced Full Stack MERN Developer with a strong background in designing and implementing scalable web applications. Proficient in MongoDB, Express.js, React, and Node.js, with a keen eye for UI/UX design high-quality software solutions on time and within budget. Adept at troubleshooting, debugging, and continuously optimizing code for optimal performance. Passionate about staying updated on emerging technologies and leveraging them to enhance project efficiency.
          </div>
        <div className="grid grid-cols-12 my-5 gap-4">
          <h2 className="col-span-12 font-bold py-5 text-2xl">
            My Detailed Works
          </h2>
            <div className="home-res-1 col-span-12 grid grid-cols-12 gap-4">
              <WorksCard title="Emithila" subtitle="A Eye Sighting Frontend For E-commerce Web App" desc="An eCommerce web app frontend is the user interface of an online store, designed for a seamless shopping experience. It showcases products with clear images and descriptions, facilitates easy navigation, and includes features like search, filters, and a shopping cart. The checkout process is streamlined with secure payment integration, order tracking, and user authentication. Additionally, it incorporates elements like user reviews, responsive design for various devices, security measures, and performance optimization. Wishlist and favorites, contribute to an engaging and accessible eCommerce platform." />
              <WorksCard title="Emithila-Admin" subtitle="A Admin Panel Frontend For E-commerce Web App" desc="The admin panel is a crucial tool for eCommerce site owners, providing them with the control and insights needed to efficiently run their online business. It centralizes management tasks, enhances decision-making through analytics, and streamlines the overall operation of the eCommerce platform." />
            </div>
            <div className="home-res-2 col-span-12 grid grid-cols-12 gap-4">
              <WorksCard title="Emithila-Backend" subtitle="A Powerful Backend For E-commerce Web App" desc='the backend of an eCommerce web app is the core infrastructure responsible for managing data, processing transactions, and ensuring the smooth functioning of the entire application. It plays a crucial role in handling the complexities of eCommerce operations, providing the necessary support for a secure, efficient, and scalable online store.' />
              <WorksCard title="DSC College"subtitle="A Simple One Page Website For A Private Institute" desc="A simple eye-sighting website offers an interactive eye test with letters or symbols, allowing users to check their visual acuity. It includes features for assessing color perception and provides educational content on eye health. The site incorporates tips for reducing eye strain, maintains a responsive design, and encourages regular breaks using the 20-20-20 rule. Users can track their progress, engage in quizzes, and access contact information for eye care professionals. Privacy and data security measures are implemented, and the website aims to promote good vision practices through accessible and user-friendly features." />
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default About
