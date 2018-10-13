import React from 'react';
import '../App.css';
// import Container from '../components/Container'
const Home = () => 
 <div>
    <div className='card'>
    <div className='symptoms'>

        <h1>Symptoms</h1>
        <button className="btn success">Fever</button>
        <button className="btn info">Aches</button>
        <button className="btn warning">Chills</button>
        <button className="btn danger">Sweats</button>
        <button className="btn default">headaches</button>
        <button className="btn success">Stomach pain</button>
        <button className="btn info">Nausea</button>
        <button className="btn warning">Bloating</button>
        <button className="btn danger">Nasal congestion</button>
        <button className="btn default">Sneezing</button>
        <button className="btn success">Runny nose</button>
        <button className="btn info">Sore throat</button>
        <button className="btn warning">Vomiting</button>
        <button className="btn danger">Diarrhea</button>
        <button className="btn default">Sleep problem</button>
        <button className="btn default">Joint pain</button>
        <button className="btn success">Fatigue</button>
        <button className="btn info">Rash</button>
        <button className="btn warning">Severe headache</button>
        <button className="btn danger">confusion</button>
        

    </div>
    
    </div>
        <div className='card'>
        <div>
        <h1>Diagnosis</h1>
            <p>Result will be pulled from Database here</p>
        </div>
        
   </div>
</div>


export default Home;