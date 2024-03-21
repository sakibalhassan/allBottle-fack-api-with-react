import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'


const Bottles = () => {
    const[bottles,setBottles]=useState([]);
    const[cart,setCart]=useState([]);

    useEffect(()=>{
        fetch('bottle.json')
        .then(res=>res.json())
        .then(data=>setBottles(data))
    },[])

const handleAddCart=(bottle)=>{
    const newCart=[...cart,bottle];
    setCart(newCart)

    // const newCart=cart+1;
    // setCart(newCart);
}


    return (
        <div>
            <h2>bottles Avaliable {bottles.length}</h2>
            <h4>Cart : {cart.length}</h4>
            <div className="bottle-container">
            {
                bottles.map(bottle=> <Bottle
                 bottle={bottle}
                 key={bottle.id}
                 handleAddCart={handleAddCart}
                 ></Bottle>)
            }
            </div>
        </div>
       
    );
};

export default Bottles;