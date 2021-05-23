import React from 'react'
import { Button, Input } from "antd";

    const Products = ({ products }) => {
      const handleClick = () => {
        var penguinCartons = document.getElementById("penguinCartons").value;
        var penguinUnits = document.getElementById("penguinUnits").value;
        var horseShoeCartons = document.getElementById("horseShoeCartons").value;
        var horseShoeUnits = document.getElementById("horseShoeUnits").value;
        
        let formData = new FormData();
        formData.append('penguinCartons', penguinCartons);
        formData.append('penguinUnits', penguinUnits);
        formData.append('horseShoeCartons', horseShoeCartons);
        formData.append('horseShoeUnits', horseShoeUnits);

        fetch('http://localhost:9000/price',{
          body : formData,
          method: 'post'
        }).then(res => res.json())
        .then((data) => {
          document.getElementById("tot").innerHTML = data;
        }) 
      }
      return (
        <div>
          <center><h1>Product List</h1></center>
          {products.map((product) => (
            <div className="card" key={product.name}>
              <div className="card-body">
                <h5 className="card-title">Name: {product.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Units per Carton: {product.unitsPerCarton}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Carton Price: {product.cartonPrice}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Unit Price: {product.unitPrice}</h6>
              </div>
            </div>
          ))}
          
          <div>
            <center><h1>Shopping Cart</h1></center>
            <form>
              <label>Penguin Ears - Number of Cartons: </label>
              <Input type="number" id="penguinCartons" min="0"/>
              <br />
              <label>Penguin Ears - Number of Units: </label>
              <Input type="number" id="penguinUnits" min="0"/>
              <br />
              <label>Horse Shoe - Number of Cartons: </label>
              <Input type="number" id="horseShoeCartons" min="0"/>
              <br />
              <label>Horse Shoe - Number of Units: </label>
              <Input type="number" id="horseShoeUnits" min="0"/>
              <br />
              <Button type="primary" onClick={handleClick}>
                Calculate Price
              </Button>
              <br />
              <label>Total Price : </label>
              <label id="tot"></label>
            </form>
          </div>
        </div>
      )
    };
    
    export default Products