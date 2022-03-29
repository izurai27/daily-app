import React from 'react'
import listImg from '../images/listbelanja.svg'

const AddList = (props) => {

  const handleAddList = () => {
    console.log(props._id)
  }

  return (
    <img src={listImg} className="img-thumbnail" alt="listbelanjaImg" style={{width:"35px", height:"35px", border:"none", cursor:"pointer"}} onClick={handleAddList}></img>
  )
}

export default AddList