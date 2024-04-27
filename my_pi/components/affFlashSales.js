"use client"; 
import React from "react"; 
import { useSelector} from "react-redux"; 
export default function FlashSalesPage() { 
 const { entities, loading }= useSelector((state) =>state.product); 
 console.log("====================") 
 console.log(entities); 
 console.log("====================") 
 return ( 
 <div className="row row-cols-8">
 {loading ? ( 
 <h1>Loading...</h1>
 ) : ( 
 entities?.map((prod) => ( 
 <div className="col" key={prod.id}>
 <div className="card">
 <img src={prod.images[0]} className="card-img-top"
alt={prod.title} />
 <div className="card-body">
 <h5 className="card-title">{prod.title}</h5>
 <p className="card-text">
 <s>{prod.price}$</s> 
 </p>
 <p className="card-text">
 {prod.price-prod.price*0.1}$ 
 </p>
 </div>
 </div>
 </div>
 ) 
 ) 
 )}
 </div>
 ); 
} 
