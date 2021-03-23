import React from "react";
import './styles.css'

const Home = () => {
  return (
    <div className="backgroundpict">
      <img
          src={process.env.PUBLIC_URL + '/img/Background1.jpg'}
          alt="background"/>
      <div className="container">
        <div className="row align-items-end">
          <div className="col-5">
            <div style={{marginTop: '150px'}}>
              <img
                    src={process.env.PUBLIC_URL + '/img/Erebor.gif'}
                    alt="Erebor Icon" width="120" height="120"
              />
            </div>
            <h1 style={{color: 'Bisque', fontWeight: 'bold', fontSize: '40px'}}>Welcome to</h1>
            <h1 style={{color: 'Gold', fontWeight: 'bold', fontSize: '100px', fontFamily: 'serif'}}>EREBOR</h1>
            <p style={{color: 'Cornsilk', marginLeft: '0px'}}>Hidden Treasure Deep Within</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
