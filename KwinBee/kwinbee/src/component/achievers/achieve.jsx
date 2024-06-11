// component/achievers/achievers.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './achivers.css'; // Assuming you have a CSS file for styling

// Import photos
import student0 from './students/0.jpg';
import student1 from './students/1.jpg';
import student2 from './students/2.jpg';

const students = [
    { id: 'student0', img: student0, name: 'Student Name 0', description: 'This is student 0 description.' },
    { id: 'student1', img: student1, name: 'Student Name 1', description: 'This is student 1 description.' },
    { id: 'student2', img: student2, name: 'Student Name 2', description: 'This is student 2 description.' },
];

const AchieversSection = () => {
    const navigate = useNavigate();

    const handleShowMore = () => {
        navigate('/more-students');
    };

    return (
        <section id="achievers">
            <h2 className="underlined">Our Students</h2>
            <div className="grid-wrapper">
                {students.map(student => (
                    <div key={student.id} className="student-card">
                        <img src={student.img} alt={student.name} />
                        <div className="student-info">
                            <h3>{student.name}</h3>
                            <p>{student.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button className="see-more-button" onClick={handleShowMore}>
                    See More <span className="arrow">→</span>
                </button>
            </div>
        </section>
    );
};

export default AchieversSection;
