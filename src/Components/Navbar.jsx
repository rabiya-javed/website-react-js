import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Resuableform from "./Form";
import { Link } from "react-router-dom";
import './Navbar.css'
function NavScrollExample() {
  const [show, updateshow] = useState(false);
  const [showAuth, updateAuth] = useState(false);
  // const show=()=>
  // {

  // }
  const modal = () => {
    if(show)
    {
      updateshow(false)
    }
    else 
    {
      updateshow(true)
    }
   
  };
  const UpdateShowAuth =() =>
  {
    if(showAuth)
    {
      updateAuth(false)
    }
    else 
    {
      updateAuth(true)
    }
  }
  return (
    <>
      <Modal show={show} onHide={modal}>
        <Modal.Header closeButton></Modal.Header>
        {showAuth ? (
          <>
            <Modal.Body>
              <Modal.Title>Sign up</Modal.Title>
              <form id="form" className="mt-3">
                <Resuableform
                  label={"firstname"}
                  type={"text"}
                  placeholder={"Enter First Name Here"}
                />
                <Resuableform
                  label={"lastname"}
                  type={"text"}
                  placeholder={"Enter Last Name Here"}
                />
                <Resuableform
                  label={"Email"}
                  type={"email"}
                  placeholder={"Enter Email Address Here"}
                />
                <Resuableform
                  label={"Password"}
                  type={"password"}
                  placeholder={"Enter Password Here"}
                />
              </form>
              <div className="d-flex justify-content-between align-items-center">
                <span onClick={UpdateShowAuth}>Already have and account sign in ?</span>
                <Button variant="primary" type="submit" form="form" className="signup">
                  Sign up
                </Button>
              </div>
            </Modal.Body>
          </>
        ) : (
          <>
            <Modal.Body>
              <Modal.Title>Sign in</Modal.Title>
              <form id="form" className="mt-3">
                <Resuableform
                  label={"Email"}
                  type={"email"}
                  placeholder={"Enter Email Address Here"}
                />
                <Resuableform
                  label={"Password"}
                  type={"password"}
                  placeholder={"Enter Password Here"}
                />
              </form>
              <div className="d-flex justify-content-between align-items-center">
                <span onClick={UpdateShowAuth}>Create Account</span>
                <Button variant="primary" type="submit" form="form" className="signin">
                  Sign in
                </Button>
              </div>
            </Modal.Body>
          </>
        )}

        <Modal.Footer>
          <Button variant="secondary" onClick={modal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Shopzy</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to={"/"} className="nav-link ps-4 pe-4 " >
                Home
              </Link>
              <Link to={"/Product"} className="nav-link ps-4 pe-4">
                Product
              </Link>
              <Link className="nav-link ps-4 pe-4" onClick={modal}>Sign in</Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavScrollExample;
