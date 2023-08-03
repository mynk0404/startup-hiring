import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

const LoginForm = () => {
  return (
    <form className="login-form">
      <h2>Login</h2>
      {/* Add your login form fields here */}
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};
const ReviewsSection = () => {
  const reviews = [
    {
      name: "John Doe",
      company: "ABC Company",
      comment: "Great platform to find talented candidates for our team."
    },
    {
      name: "Jane Smith",
      company: "XYZ Solutions",
      comment: "We hired our best data scientist through this portal. Highly recommended!",
    },
    {
      name: "Mike Brown",
      company: "MNO Solutions",
      comment: "We go the best content writer from this site!",
    },
    // Add more reviews or change the existing one
  ];

  return (
    <section className="reviews-section">
      <h2>What Our Clients Say</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <h3>{review.name}</h3>
            <p>{review.company}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const SignupForm = () => {
  return (
    <form className="signup-form">
      <h2>Sign Up</h2>
      {/* Add your signup form fields here */}
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Enter your name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};


const HiringSteps = () => {
  return (
    <section className="hiring-steps">
      <h2>Three Easy Steps to Hire Candidates</h2>
      <div className="step">
        <i className="fas fa-search"></i>
        <h3>Step 1: Post a Job</h3>
        <p>Post your job openings and describe the skills you're looking for in candidates.</p>
      </div>
      <div className="step">
        <i className="fas fa-users"></i>
        <h3>Step 2: Review Applications</h3>
        <p>Review the applications and profiles of candidates who have applied for your job.</p>
      </div>
      <div className="step">
        <i className="fas fa-check"></i>
        <h3>Step 3: Hire the Best</h3>
        <p>Select and hire the best-suited candidates for your company's requirements.</p>
      </div>
    </section>
  );
};

const FeatureCard = ({ iconClass, title, description, applyLink, backgroundImage }) => {
  return (
    <div className="feature-card">
      <div className="card-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={applyLink} target="_blank" rel="noopener noreferrer" className="apply-link">
          Find Now
        </a>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [candidatesRegistered, setCandidatesRegistered] = useState(0);
  const [companiesRegistered, setCompaniesRegistered] = useState(0);
  const [candidatesHiredPercentage, setCandidatesHiredPercentage] = useState(0);

  // Simulate fetching the data from the server
  useEffect(() => {
    // Fetch the actual data from the server here
    const fetchData = () => {
      // Simulate the fetched data
      const fetchedData = {
        candidatesRegistered: 1234,
        companiesRegistered: 50,
        candidatesHiredPercentage: 80,
      };

      setCandidatesRegistered(fetchedData.candidatesRegistered);
      setCompaniesRegistered(fetchedData.companiesRegistered);
      setCandidatesHiredPercentage(fetchedData.candidatesHiredPercentage);
    };

    fetchData();
  }, []);

  return (
    <div className="home-page">
      <nav className="navbar" style={{ backgroundImage: "url('your-navbar-bg-image.jpg')" }}>
        <h1>Recruitment Portal</h1>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="nav-buttons">
          <button className="login-button">Login</button>
          <button className="signup-button">Signup</button>
        </div>
      </nav>
      <section className="main-content" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554034483-04fda0d3507b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhZGllbnQlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60')" }}>
        <header className="header" >
          <h2>Find the Best Talent for Your Company</h2>
        </header>
        <section className="card-section">
        <FeatureCard
           iconClass="fas fa-code"
           title="Software Engineers"
           description="Hire skilled software engineers from India and around the world."
           applyLink="https://example.com/apply-software-engineer"
           backgroundImage="https://wallpapercave.com/wp/wp7039147.png" // Replace with the correct URL or file path.
        />
        <FeatureCard
           iconClass="fas fa-code"
           title="Data Scientist"
           description="Hire the best data scientists here, search and select whats best for you."
           applyLink="https://example.com/apply-software-engineer"
           backgroundImage="https://e0.pxfuel.com/wallpapers/984/549/desktop-wallpaper-computer-engineering-software-engineering-thumbnail.jpg" // Replace with the correct URL or file path.
        />

        <FeatureCard
            iconClass="fas fa-code"
            title="Dev-Ops Negineer"
            description="Get the best development and operations manager."
            applyLink="https://example.com/apply-software-engineer"
            backgroundImage="https://wallpaperaccess.com/full/1428490.jpg" // Replace with the correct URL or file path.
        />
          
        
        <FeatureCard
            iconClass="fas fa-code"
            title="Web Developer"
            description="Came to the right place for a web developer, see projects then hire the best."
            applyLink="https://example.com/apply-software-engineer"
            backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCO60nFu1CjlMksEFh3IaW5aVac1G4Jt1DMw&usqp=CAU" // Replace with the correct URL or file path.
        />
        


        </section>
        <section className="dynamic-numbers">
          <div className="number-item">
            <i className="fas fa-users"></i>
            <h3>{candidatesRegistered}</h3>
            <p>Candidates Registered</p>
          </div>
          <div className="number-item">
            <i className="fas fa-building"></i>
            <h3>{companiesRegistered}</h3>
            <p>Companies Registered</p>
          </div>
          <div className="number-item">
            <i className="fas fa-percent"></i>
            <h3>{candidatesHiredPercentage}%</h3>
            <p>Candidates Hired</p>
          </div>
        </section>
        
        <HiringSteps />
        <section className="forms-section">
        <div className="forms-container">
          <LoginForm />
          <SignupForm />
        </div>
      </section>
      <ReviewsSection />
        <section className="subscribe-section">
          <div className="subscribe-form">
            <h2>Subscribe to Our Newsletter</h2>
            <p>Stay up-to-date with the latest news and updates.</p>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </section>
        <section className="cta-section">
          <div className="dark-overlay">
            <h2>Ready to Hire the Best?</h2>
            <p>Join thousands of companies who trust us for their hiring needs.</p>
            <button className="cta-button">Get Started</button>
          </div>
        </section>
      </section>
      <footer className="footer">
        <div className="footer-content">
          <div className="social-links">
            <a href="#" className="social-link">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <p>&copy; {new Date().getFullYear()} Mynk0404</p>
      </footer>
    </div>
  );
};


export default HomePage;
