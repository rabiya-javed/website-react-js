import React from 'react'
import Form from 'react-bootstrap/Form';
export default function Resuableform(props)
{
    console.log(props)
    const {label,type,placeholder } =props
    return <>
  
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>{label}</Form.Label>
        <Form.Control type={type} placeholder={placeholder} required />
      </Form.Group>
   
    </>
}