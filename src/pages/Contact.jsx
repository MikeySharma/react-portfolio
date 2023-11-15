import React from 'react'
import {motion} from 'framer-motion';

const Contact = () => {

    return (
        <>
            <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
             className="contact-wrapper py-5 mt-20">
                <div className="container mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <div className=" flex items-center justify-center ">
                                <div className="p-4 rounded-md flex flex-col items-start justify-center gap-4">
                                    <h1 className="text-2xl font-bold text-center py-2">Contact Me</h1>
                                    <div className="contact-item">Name : Aanand Thakur (Mikey Sharma)</div>
                                    <div className="contact-item">Email : mikeysharma99@gmail.com</div>
                                    <div className="contact-item">Mobile : +977 9825850687</div>
                                    <div className="contact-item">Whatsapp : +977 9825850687</div>
                                    <div className="contact-item">Address : Janakpurdham, Madhesh Province, Nepal</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    )
}

export default Contact
