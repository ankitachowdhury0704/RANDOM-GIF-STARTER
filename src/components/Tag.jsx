import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Tag = () => {
    const[tag,setTag] = useState('car');
    const {gif,loading,fetchData} = useGif(tag);


    const changeInputHandler  = (event) =>{
        setTag(event.target.value);
    }

  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-3.75'>
      <h1 className='mt-3.75 text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>
      {loading ? <Spinner/> : <img src={gif} alt="" width={450}/>}
      <input className='w-10/12 text-lg py-2 rounded-lg mb-0.75 text-center bg-white' value={tag} onChange={changeInputHandler}/>
      <button  className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-5" onClick={()=>fetchData(tag)}>Generate</button>
    </div>
  )
}

export default Tag
