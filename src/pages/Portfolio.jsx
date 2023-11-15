import React from 'react';
import {motion} from 'framer-motion';

const Portfolio = () => {
    const pdfUrl = 'https://drive.google.com/file/d/10G0BqwMDEtwv2zEYL0DIW9OEem087OyA/view';
    return (
        <>
            <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
             className="portfolio-page-wrapper py-5 mt-20">
                <div className="container mx-auto px-5">
                    <div className="pdf-holder mt-5">
                        <div style={{height: '80vh'}} className="flex items-center justify-center border-gray-200 border-2 p-10">
                            <div>
                               
                                <button onClick={() => window.open(pdfUrl, '_blank')} download>
                                    View and Download PDF Of My Portfolio
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    )
}

export default Portfolio
