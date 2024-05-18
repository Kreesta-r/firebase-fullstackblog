import React from 'react'
import "./loading.css"
import { PulseLoader } from 'react-spinners'


const Loading = () => {
  return (
    <div className='loading-page'>
        <PulseLoader color="#ffcb74" loading={true} size={40} className='load' />
        <h2>Shh, the blog is thinking...</h2>
    </div>
  )
}

export default Loading