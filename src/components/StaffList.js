// src/components/StaffList.js

import React from 'react';
import staffData from '../staffData'; // Ensure the correct import path
import './StaffList.css'; // Ensure you have the necessary CSS file

const StaffList = () => {
    return (
        <div className="staff-list">
            
            {staffData.map(staff => (
                <div key={staff.id} className="staff-card">
                    <a href={staff.link}>
                    <img
                        src={require(`../assets/images/${staff.image}`)} // Dynamic image import
                        alt={staff.name}
                        onError={(e) => { e.target.onerror = null; e.target.src = '/path_to_placeholder_image.jpg' }} // Handling image load errors
                        className="staff-image"
                    />
                    
                    <h3>{staff.name}</h3>
                    <h4>{staff.position}</h4>
                    <p>{staff.bio}</p>
                   </a>         
                </div>
            ))}
        </div>
    );
};

export default StaffList;
