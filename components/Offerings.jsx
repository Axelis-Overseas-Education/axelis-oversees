import React from 'react'
import { FaUserGraduate } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";

const Offerings = () => {
  return (
    <div>
        <ul className="col-start-4">
    <li>
      <div>
        <i className="fas fa-globe"></i>
        <FaGlobeAmericas size={100}/>
        <h3>29+ Countries</h3>
        <p>Number of countries we operate in</p>
      </div>
    </li>
    <li>
      <div>
        <i className="fas fa-user-graduate"></i>
        <FaUserGraduate size={100}/>
        <h3>200+ Students</h3>
        <p>Number of students impacted</p>
      </div>
    </li>
    <li>
      <div>
        <i className="fas fa-university"></i>
        <FaPeopleRoof size={100}/>
        <h3>2500+ University Partners</h3>
        <p>Number of university partners</p>
      </div>
    </li>
    <li>
      <div>
        <i className="fas fa-handshake"></i>
        <GiTakeMyMoney size={100}/>
        <h3>1600+ Scholarships Partners</h3>
        <p>Number of scholarships partners</p>
      </div>
    </li>
  </ul>        
    </div>
  )
}

export default Offerings
