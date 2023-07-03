import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const [ListCatagories, updatecategories] = useState([]);
  const Navigate=useNavigate()
  useEffect(() => {
    const fetchcategories = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/categories"
        );
        const actualres = await response.json();
        updatecategories([...actualres]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchcategories();
  }, []);
  const opencategories=async(item)=>{
    Navigate(`/Productcategories/${item}`)
  }
  return (
    <div className="container mb-5">
      <div className="row justify-content-center gap-5" >
        <h1 className="d-flex justify-content-center mt-4 mb-4">Catagories</h1>
        {ListCatagories.map((item) => (
          <>
            <div className="col-5 fs-3 shadow  ps-3 pe-3 pt-3 pb-3" style={{cursor:"pointer"}} onClick={()=>opencategories(item)}>{item}</div>
          </>
        ))}
      </div>
    </div>
  );
}
