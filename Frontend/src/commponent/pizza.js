import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Pizza({ pizza }) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ margin: '80px' }} className="shadow-lg p-3 mb-5 bg-white rounded">
      <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img
          src={pizza.image}
          className="img-fluid"
          style={{ height: "200px", width: "200px" }}
          alt={pizza.name}
        />
      </div>
      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Variants</p>
          <select className="form-control" value={varient} onChange={(e) => setVarient(e.target.value)}>
            {pizza.varients.map((varient, index) => (
              <option key={index} value={varient}>
                {varient}
              </option>
            ))}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Quantity</p>
          <select className="form-control"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(10).keys()].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-1">Price: {pizza.prices[0][varient] * quantity} Rs/</h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn">Add To Cart</button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={pizza.image}
            className="img-fluid"
            style={{ height: "300px", width: "300px" }}
            alt={pizza.name}
          />
          <p>{pizza.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Pizza;
