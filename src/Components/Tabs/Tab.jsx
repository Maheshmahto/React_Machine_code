import React, { useState } from 'react';
import './style.css';

const Tab = ({ tabs }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleOnclick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="tab-container">
            <div className="heading">
                {tabs.map((item, index) => (
                    <div
                        className={`tabs ${index === currentIndex ? 'active' : ''}`}
                        key={index}
                        onClick={() => handleOnclick(index)}
                    >
                        <span className="tab-item">{item.label}</span>
                    </div>
                ))}
            </div>
            <div className="content">
                {tabs[currentIndex] && tabs[currentIndex].content}
            </div>
        </div>
    );
};

export default Tab;
