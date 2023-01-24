// TODO: create a component that displays a single bakery item
import React from "react";

export default function BakeryItem({item, index, addToCart }) {
    return (
        <div style={{display: "flex", flexDirection: "column", maxWidth: 300, borderStyle: "solid",
            borderWidth: "5px", borderColor: "#FAD074", padding:" 1vw 1vh"}}>
            <img src={item.image} alt={"Pastry image"} style={{width: "100%", height: "auto"}}/>
            <p style={{color:"indianred"}}>{item.name}</p>
            <button style={{backgroundColor:"#FFA570"}} onClick={() => addToCart(index)}>Add To Cart</button>
        </div>
    )
}