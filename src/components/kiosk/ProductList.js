import axios from "axios";
import { useEffect, useState } from "react";

const ProductList = ({requestViewProduct}) => {

  // 상태
  const [obj, setObj] = useState([])

  console.log(obj)

  // await, async 못 씀
  useEffect(() => {

    axios.get('http://localhost/products').then(res => {
      console.log("effect inside"+ res.data)
      setObj(res.data)
  
    })

  }, [])

  if(obj.length === 0) {
    return (
      <div className="text-4xl">Loading.........</div>
    )
  }

  return ( 
    <ul>
      {obj.map(p => <li 
      key={p.id}
      onClick={() => requestViewProduct(p.id)}>
         {p.id} {p.pname} {p.price}</li>)}
    </ul>
   );
}
 
export default ProductList;