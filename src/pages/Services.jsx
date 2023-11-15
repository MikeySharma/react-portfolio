import React from 'react'
import ServiceCard from '../components/ServiceCard';
import {motion} from 'framer-motion';

const Services = () => {
  return (
    <motion.section 
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
       className='service-page-wrapper'>
      <div className="container mx-auto py-16 mt-5 px-5">
        <h2 className="text-2xl font-bold py-5">My Detailed Services</h2>
      <div className="service-card-holder col-start-6 col-span-7 flex items-center ">
              <div className="grid grid-cols-2 gap-4">
                <ServiceCard title="UI/UX Design" subtitle="Design eye catching frontend" desc="Through a clean and minimalistic design approach, I prioritize simplicity without compromising functionality, ensuring that users can seamlessly navigate and interact with the application. By integrating a well-thought-out visual hierarchy, I emphasize essential elements and guide users intuitively through the interface. Responsive design techniques are applied to cater to various devices, enhancing accessibility and providing a consistent experience across platforms." remarks="Excellent" />
                <ServiceCard title="Restful API" subtitle="Integrate frontend from Restful API" desc="Proficient in integrating frontend with RESTful APIs, I possess the skills to seamlessly connect web applications to backend services, ensuring a smooth flow of data and interactions. Through meticulous understanding of API endpoints and their responses, I can design and implement frontend components that efficiently fetch and display data from the server." remarks="Very Good" />
                <ServiceCard title="Node.js Backend" subtitle="Develop powerful backend for Web App" desc='I specialize in developing robust and powerful backends for web applications. With expertise in designing scalable architectures, managing databases, and implementing efficient API endpoints, I ensure that the backend infrastructure seamlessly supports the frontend, enabling the creation of high-performance and feature-rich web applications. My skills encompass optimizing server-side processes, handling data securely, and implementing functionalities that contribute to a seamless user experience.' remarks="Good"/>
                <ServiceCard title="MongoDB Server" subtitle="CRUD Data from MongoDB server" desc="I excel in performing CRUD (Create, Read, Update, Delete) operations on MongoDB servers. Proficient in designing efficient data models, I can seamlessly manage interactions with MongoDB databases, ensuring effective storage, retrieval, updating, and deletion of data. My expertise lies in crafting backend solutions that leverage the power and flexibility of MongoDB to enhance the overall functionality and performance of web applications." remarks="Very Good" />
              </div>
            </div>
      </div>
    </motion.section>
  )
}

export default Services
