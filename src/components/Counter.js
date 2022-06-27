import React,{useState} from 'react'

const Counter = ({start_value, max_value, min_value}) => {
  const[count,setCount]=useState(start_value);
  const inc=()=>{
    if(count<max_value)
    setCount(Number(count)+1);
  }
  const dec=()=>{
    if(count>min_value)
    setCount(count-1);
  }
  const handleChange = (e)=>{
    setCount(e.target.value);
   }
  return (
    <div className='counter'>
        <input type="number" className="form-control" value={count} onChange={handleChange}/>
        <div className = 'button-container'>
            <button className='control-button' onClick={dec} >-</button>
            <button className='control-button' onClick={inc}>+</button>
        </div>
    </div>
  )
}
export default Counter