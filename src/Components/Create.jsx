import React from 'react'

const Create = () => {
  return (
    <div className='form-container'> 
        <form>
            <input type="text" name='title' placeholder='Write Title'></input><br />
            <input type="text" name='desc' placeholder='Write Title'></input><br />
            <input type="file" name='desc' placeholder='Write Title'></input><br />
            <button className='newblog-btn'>Submit</button>
        </form>
    </div>
  )
}

export default Create