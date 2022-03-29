import React from 'react'


const AddList = (props) => {

  const handleAddList = () => {
    console.log(props._id)
  }

  return (
    <i class="bi bi-cart-plus" onClick={handleAddList} style={{fontSize: "2rem"}}></i>
       
  )
}

export default AddList