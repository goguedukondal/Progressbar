
import './App.css';
import {useEffect,useState,useRef} from 'react'

function App() {
  const [status,setStatus] = useState(false)
  const [value,setValue] = useState(0)
  let timer = useRef(null)
  useEffect(()=>{
  if(value<100){
    setStatus(true)
    timer.current = setInterval(()=>{
      setValue((prev)=>prev+1)
    },200)
  }
  else{
    setStatus(false)
    clearInterval(timer.current)
  }
  return (()=>{
    setStatus(false)
    clearInterval(timer.current)
  })
  },[value])
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <div className='outer'>
      <div className='inner' style={{width:`${value}%`,background:'green',height:'100%',display:'flex',alignItems:'center',transition:'width 0.3s ease'}}>
          <p style={{color:value>50?'white':'black',width:'50px',margin:'0',position:'absolute',left:'21vw'}}>{value} %</p>
      </div>
      </div>
      {status?(<h3>Loading...</h3>):(<h3>Completed !</h3>)}
    </div>
  );
}

export default App;
