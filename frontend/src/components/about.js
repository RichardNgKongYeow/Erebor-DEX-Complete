import React from 'react';
import './styles.css'

const About = () => {
  return (
    <div className="backgroundpict">
      <img
          src={process.env.PUBLIC_URL + '/img/Background4.jpg'}
          alt="background" />
      <div style={{marginTop: '150px',}}></div>
      <div className="container" >      
        <div className="row justify-content-around">
          <div className="col-4">
              <img
                    src={process.env.PUBLIC_URL + '/img/RN.png'}
                    alt="background" width="200"/>
              <h2 style={{color: 'gold', fontWeight: 'bold'}}>Richard Ng</h2>
              <p style={{color: 'white', fontStyle: 'italic'}}>Founder</p>
              <p style={{color: 'white'}}>Former Business Analyst at a brokerage firm, current blockchain enthusiast</p>
          </div>

          <div className="col-4">
              <img
                    src={process.env.PUBLIC_URL + '/img/GBK.png'}
                    alt="background" width="200"/>
              <h2 style={{color: 'gold', fontWeight: 'bold'}}>Gan Boon Kiat</h2>
              <p style={{color: 'white', fontStyle: 'italic'}}>Founder</p>
              <p style={{color: 'white'}}>An experienced Chartered Accountant and a tech enthusiast</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
