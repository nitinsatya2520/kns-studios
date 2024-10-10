import React from 'react';
import staffData from '../staffData'; // Ensure the correct import path
import './StaffList.css'; // Ensure you have the necessary CSS file
import Navbar from './Navbar'; // Adjust the import path based on your project structure

const StaffList = () => {
    return (
        <div className='app-container'>
            
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
                        </a>
                        <h3>{staff.name}</h3>
                        <h4>{staff.position}</h4>
                        <p>{staff.bio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StaffList;
