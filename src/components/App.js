
import './../styles/App.css';
import React, { useEffect, useState } from 'react'


const App = () => {

  const [progress, setProgress] = useState(0);

    useEffect(()=> {
        let intervalId = setInterval(()=> {
            setProgress(prev => prev+10)
        }, 1000); 

        return () => {
            clearTimeout(intervalId);
        }
    }, []);

    if(progress > 100){
        setProgress(0)
    }
  
  return (
    <div style={{width: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3>Progress Bar</h3>
        <div id='barOuter' style={{width: '300px', height: '15px', backgroundColor: 'grey'}}>
            <div id='barInner' style={{width: `${progress}%`, height: '100%', backgroundColor: 'blue'}}></div>
        </div>
        <p>{progress}%</p>
    </div>
  )
}

export default App
