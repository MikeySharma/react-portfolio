import React from 'react'
import { useLocation } from 'react-router-dom';

const WorksCard = (props) => {
  const {title, subtitle, desc, link} = props;
  const location = useLocation();
  return (
    <>
      <div className={`work-card col-span-${location.pathname === "/" ? '4' : '6'} rounded-md overflow-hidden p-2`}>
        <div className="flex items-center gap-4">
       
        <div className="work-info">
            <div className="flex items-center justify-between"><h2>{title}</h2>{link ? link : ''}</div>
            <h3 className="py-2">{subtitle}</h3>
            <p>{location.pathname==="/" ? desc?.substring(0,200) + '...' : desc}</p>
        </div>
        </div>

      </div>
    </>
  )
}

export default WorksCard
