import React, {useState} from "react";

function FoodBox(props){

    let{ele,index}=props;
    let {img,name,cal}=ele;

    const [input, setInput]=useState(0);
    const [quantity, setQuantity]=useState(0);

    function quantityHandler(){
        setQuantity(input)
    }

    return (
        <>
            <div className="box">
                <div id="divider" className="box">
                    <img src={img} alt="itempic" />
                    <div className="name-cal1">
                        <span><b>{name}</b></span>
                        <span>{cal}</span>
                    </div>
                    <div className="quantity">
                        <input type="number"
                            onChange={(e)=>{setInput(e.target.value)}} 
                            value={input} />
                            
                        <button className="plus" onClick={quantityHandler}>+</button>
                    </div>
                </div>
                
                <div className="name-cal2">
                    <p><b>{quantity} {name} = {quantity*cal} calories</b></p>
                </div>
                
                <button className="reset-button" onClick={()=>{
                    setInput(0)
                    setQuantity(0)
                }}>reset</button>
            </div>
        </>
    )
}
export default FoodBox;