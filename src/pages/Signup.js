import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import { Container } from "react-bootstrap"
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
import '../App.css';

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

export default function Signup() {

  // Formik stuff
  const { values, errors, touched, handleBlur, handleChange } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      // console.log("🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values", values );
      action.resetForm();
    },
  });
  // FormHandleSubmit()
  // console.log("🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",errors);

  const form = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useNavigate()

  async function FormhandleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }
    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history('/')
    } catch (error) {
      setError('Failed to create account')
    }
    setLoading(false)
  }
  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Sign Up</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form ref={form} onSubmit={FormhandleSubmit}>

                <Form.Group id="name">
                  <Form.Label htmlFor="name">Name</Form.Label>
                  <Form.Control placeholder="Username" type="name" name="name" id="name" ref={emailRef} required
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name ? (
                    <p className="form-error">{errors.name}</p>
                  ) : null}
                </Form.Group>

                <Form.Group id="email">
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <Form.Control placeholder="Email" type="email" name="email" id="email" ref={emailRef} required
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? (
                    <p className="form-error">{errors.email}</p>
                  ) : null}
                </Form.Group>

                <Form.Group id="password">
                  <Form.Label htmlFor="password">Password</Form.Label>
                  <Form.Control type="password" name="password" id="password" placeholder="Password" ref={passwordRef} required
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password ? (
                    <p className="form-error">{errors.password}</p>
                  ) : null}
                </Form.Group>

                <Form.Group id="password-confirm">
                  <Form.Label htmlFor="confirm_password">Password Confirmation</Form.Label>
                  <Form.Control type="password" name="confirm_password" id="confirm_password" placeholder="Confirm_Password" ref={passwordConfirmRef} required
                    value={values.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.confirm_password && touched.confirm_password ? (
                    <p className="form-error">{errors.confirm_password}</p>
                  ) : null}
                </Form.Group>

                <br />
                <Button disabled={loading} className="w-100" type="submit">
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/login">Log In</Link>
          </div>
        </div>
      </Container>
    </>
  )
}
