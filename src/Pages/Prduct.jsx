import React, { useEffect, useState } from 'react'
import NavScrollExample from '../Components/Navbar'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Prduct() {
  const [fetchproducts,updatefetchproducts] =useState([])
  useEffect(() => {
    const fetchproducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products"
        );
        const actualres = await response.json();
        console.log(actualres)
        updatefetchproducts([...actualres.products]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchproducts();
  }, []);
  return (
    <div>
      <NavScrollExample/>
      <Banner/>
      <div className='container-fluid mb-5'>
        <div className='row '>
          <h1 className='d-flex justify-content-center mt-3 mb-3'>Products</h1>
          {
            fetchproducts.map(Element=>(
              <>
                <div className='col-4 mt-5'>
                <Card >
                  <Card.Img variant="top" style={{height:"200px"}} src={Element.images[0]}/>
                  <Card.Body>
                    <Card.Title>{Element.title}</Card.Title>
                    <Card.Text>
                    {Element.description}
                   <div className='d-flex justify-content-between mt-3 mb-3'>
                    <div className='d-flex flex-column gap-2'>  
                      <h5>Price</h5>
                     <span >{Element.price}</span> 
                      </div>
                      <div className='d-flex flex-column gap-2 align-items-end'>  
                      <h5>Discount</h5>
                     <span >{Element.discountPercentage}</span> 
                      </div>
                   </div>
                   <div className='d-flex justify-content-between mt-3 mb-3'>
                   <div className='d-flex flex-column gap-2'>  
                      <h5>Stock</h5>
                     <span>{Element.stock}</span> 
                      </div>
                      <div className='d-flex flex-column gap-2 align-items-end'>  
                      <h5>Rating</h5>
                     <span >{Element.rating}</span> 
                      </div>
                   </div>
                    </Card.Text>
                    <Button variant="primary">Add to cart</Button>
                  </Card.Body>
                </Card>
                </div>
              </>
            ))
          }
        

          </div>
        </div>
      <Footer/>
    </div>
  )
}
