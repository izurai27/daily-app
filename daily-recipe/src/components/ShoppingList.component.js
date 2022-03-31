import React, {useEffect, useState} from 'react'
import axios from 'axios';

const IngredientList = () => {

  const [shoppingItem,setShoppingItem] = useState([])
  
  const userid = 'izma'

  useEffect(() =>  {
    
    
    const sendGetRequest = async () => {
      try {
          const resp = await axios.get('http://localhost:5000/shoppingList/userid='+userid);

          setShoppingItem(resp.data)
                    
      } catch (err) {
          
          console.error(err);
      }
    };
  
  sendGetRequest();

  },[]);
  
  console.log(shoppingItem)
  function handleChecked (e) {
    const id = e.target.dataset.id;
    const value = (e.target.value === false) ? false : true;
    axios.patch('http://localhost:5000/shoppingList/updateStatus/_id='+id,{"status": !value})
    .then(res => console.log(res));
    console.log(value,!value)


  }

  return (
    <div>
      <div>IngredientList</div>
      <button className='btn btn-secondary'>refresh list</button>
      <div>
      {/* <ol> */}
        {shoppingItem.map(element => (
          <div className="form-check" key={element._id}>
            {/* {element.userid} */}
              <input className="form-check-input" type="checkbox" value={element.status} id="flexCheckDefault" data-id={element._id} onChange={handleChecked}/>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                  {element.ingredientsName} {element.quantity} {element.measurement} 
              </label>
        </div>
        ))}
      {/* </ol> */}
      </div>
    </div>

  )
}

export default IngredientList