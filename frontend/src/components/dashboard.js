import React from 'react';
import DbChart from './dbchart';
import './styles.css'

const Dashboard = () => {
  return (
    <div className="backgroundpict">
      <img 
            src={process.env.PUBLIC_URL + '/img/Background2.jpg'} 
            alt="background"/>
      <div className="container-xl" style={{marginTop: '100px'}}>
        <DbChart />
      </div>
    </div>
  );
};

export default Dashboard;
