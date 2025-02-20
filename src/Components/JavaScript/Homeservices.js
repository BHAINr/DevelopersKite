// src/components/Homepage.js
import React from 'react';
import {
    Cloud,
    Shield,
    Server,
    Code,
    Network,
    HeadsetIcon,
    Mail,
    Phone,
    MapPin
} from 'lucide-react';
import '../CSS/Homeservices.css';
import { Link, useNavigate } from 'react-router-dom';

function Homeservices() {
    const navigate = useNavigate();

    const services = [
        {
            icon: <Cloud size={40} />,
            title: "Cloud Services",
            description: "AWS, Azure, and Google Cloud solutions with migration and management",
            path: '/awsservices'
        },
        {
            icon: <Shield size={40} />,
            title: "Security Solutions",
            description: "Complete security infrastructure with 24/7 monitoring and threat detection",
            path: '/awsservices'
        },
        {
            icon: <Server size={40} />,
            title: "Infrastructure",
            description: "End-to-end infrastructure setup, maintenance, and optimization",
            path: '/awsservices'
        },
        {
            icon: <Code size={40} />,
            title: "Development Support",
            description: "Full-stack development support and consulting services",
            path: '/awsservices'
        },
        {
            icon: <Network size={40} />,
            title: "Network Solutions",
            description: "Network design, implementation, and troubleshooting",
            path: '/awsservices'
        },
        {
            icon: <HeadsetIcon size={40} />,
            title: "24/7 IT Support",
            description: "Round-the-clock technical support and maintenance",
            path: '/awsservices'
        }
    ];

    // Handle navigation when Learn More is clicked
    const handleLearnMore = (path) => {
        navigate(path);
    };

    return (
        <div className="homepage">
            {/* Hero Section */}
            <div className="hero">
                <h1>IT Support Solutions</h1>
                <p>Your One-Stop Solution for All IT Services</p>
            </div>

            {/* Services Section */}
            <div className="services-container">
                <h2>Our Services</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="icon-wrapper">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <button 
                                className="learn-more" 
                                onClick={() => handleLearnMore(service.path)}
                            >
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Section */}
            <div className="contact-section">
                <h2>Get In Touch</h2>
                <div className="contact-info">
                    <div className="contact-item">
                        <Mail size={32} className="contact-icon" />
                        <h3>Email</h3>
                        <p>support@itservices.com</p>
                    </div>
                    <div className="contact-item">
                        <Phone size={32} className="contact-icon" />
                        <h3>Phone</h3>
                        <p>+1 (555) 123-4567</p>
                    </div>
                    <div className="contact-item">
                        <MapPin size={32} className="contact-icon" />
                        <h3>Address</h3>
                        <p>123 Tech Street, IT City, 12345</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homeservices;