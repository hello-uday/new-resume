import React,{useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import background from '../assets/background.jpg'
import { ReactTyped } from 'react-typed';
import axios from'axios'


const Home = () => {
  const Navigate = useNavigate()

  const [ip, setip]=useState('');
  const [location, setlocation]= useState('')

  const handleclicksubmit = () => {
    Navigate('/About')
  }

  const getlocation=async(ip)=>{
    const response = await axios.get(`https://ipapi.co/${ip}/json/`);
    console.log(response.data);
    
  }

  const getip=async()=>{
        const response = await axios.get('https://api.bigdatacloud.net/data/client-ip')
        const data = response.data
        console.log(data.ipString);
        // alert(data.ipString)
        getlocation(data.ipString);
  }

  useEffect(()=>{
    getip();
  })

  return (
        <div style={styles.home}>
            <h1 style={{textAlign:'center'}}>Hi,</h1>
            <h2 style={{textAlign:'center'}}>I'm <span style={{color:'#5AB2FF'}}>Uday </span></h2>
            <h2 style={{textAlign:'center'}}>
            <ReactTyped
                strings={["A Web Developer", "A CPP programmer", "A Web Designer", "A Coder"]}
                typeSpeed={80}
                backSpeed={50}
                backDelay={1000}
                loop
              />
            </h2>
            <div style={styles.buttondiv}>
                <button style={styles.button} onClick={handleclicksubmit}>Let's Begin</button>
            </div>
        </div>
  )
}
const styles={
      home:{
        backgroundImage: `url(${background})`,
        paddingTop: '100px',
        fontSize: '25px',
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        height: '74.5vh', 
      },
       
      buttondiv:{
        display: 'flex',
        justifyContent: 'center'
      },
      button:{
        borderRadius: '12px',
        color: 'white',
        backgroundColor: 'green',
        padding: '10px 20px',
        border: 'none',
        cursor:'pointer',
        fontSize: '18px', 
      }
}
export default Home
