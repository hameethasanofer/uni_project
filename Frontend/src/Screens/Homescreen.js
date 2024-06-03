import React from "react";
import pizzas from "../pizzadata";
import Pizza from "../commponent/pizza";
function Homescreen() {
  return (
    <div>
      <div className="row">
        {pizzas.map(pizza=>{
            return <div className="col-md-4">
                <div>
                    <Pizza pizza={pizza}/>
                    </div>
            </div>
        })}
        </div>
    </div>
  );
}

export default Homescreen;
