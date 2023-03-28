import React from 'react'
import { useLocation } from 'react-router-dom'
import { CounterContext } from '../../context/counterContext';

const Home = () => {
    const {state}=useLocation();
  return (
    <div>
        <h1>{`Hello ${state?.email}`}</h1>
        <CounterContext.Consumer>
          {(data)=>(
            <div>
              <p>{data?.counter}</p>
              <button type='button' onClick={()=>{
                data.setCounter((val)=>val+1)}}>Increment</button>
            </div>
          )}
          </CounterContext.Consumer>
        
    </div>
  )
}

export default Home