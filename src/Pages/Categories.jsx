import React, { useEffect, useState } from "react";
import NavScrollExample from "../Components/Navbar";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Categories() {
  const [showcategorywithname, updatecategorywithname] = useState([]);
  console.log(showcategorywithname);
  const { items } = useParams();
  useEffect(() => {
    const fetchcategorieswithcategoryname = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/category/${items}`
        );
        const actualres = await response.json();
        updatecategorywithname([...actualres.products]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchcategorieswithcategoryname();
  }, [items]);
  return (
    <div>
      <NavScrollExample />
      <Banner />
      <div className="container-fluid">
        <div className="row justify-content-center ">
          <h1 className="d-flex justify-content-center mt-2 mb-2">{items}</h1>
          <p className="d-flex justify-content-center mt-2 mb-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis necessitatibus id adipisci aut incidunt ratione </p>
          {showcategorywithname.map((items) => (
            <>
              <div className="col-4 mt-4 mb-4">
                <Card >
                  <Card.Img variant="top" style={{height:"200px"}} src={items.images[0]}/>
                  <Card.Body>
                    <Card.Title>{items.title}</Card.Title>
                    <Card.Text>
                    {items.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
            </>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
