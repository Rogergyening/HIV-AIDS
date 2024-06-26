// import React from "react";
// import React, { useRef, useState } from 'react';
// import { Form, Button, Card, Alert } from 'react-bootstrap';
// import { useAuth, useHistory } from '../contexts/AuthContext';
// import { Link } from 'react-router-dom';

// export default function UpdateProfile() {
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const passwordConfirmRef = useRef();
//   const { currentUser, updatePassword, updateEmail } = useAuth();
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const history = useHistory();

//   async function handleSubmit(e) {
//     e.preventDefault();

//     if (passwordRef.current.value!== passwordConfirmRef.current.value) {
//       return setError("Passwords do not match");
//     }

//     try {
//       await updateEmail(emailRef.current.value);
//       await updatePassword(passwordRef.current.value);
//       history.push("/");
//     } catch (error) {
//       setError(error.message);
//     }
//   }

//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <Card>
//             <Card.Body>
//               <h2 className="text-center mb-4">Update Profile</h2>
//               {error && <Alert variant="danger">{error}</Alert>}
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group id="email">
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control
//                     type="email"
//                     ref={emailRef}
//                     required
//                     defaultValue={currentUser.email}
//                   />
//                 </Form.Group>
//                 <Form.Group id="password">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control
//                     type="password"
//                     ref={passwordRef}
//                     placeholder="Leave blank to keep the same"
//                   />
//                 </Form.Group>
//                 <Form.Group id="password-confirm">
//                   <Form.Label>Password Confirmation</Form.Label>
//                   <Form.Control
//                     type="password"
//                     ref={passwordConfirmRef}
//                     placeholder="Leave blank to keep the same"
//                   />
//                 </Form.Group>
//                 <Button type="submit" className="w-100" disabled={loading}>
//                   Update
//                 </Button>
//               </Form>
//             </Card.Body>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }
// import { Link } from "react-router-dom";

// import React, { useRef, useState } from "react";
// import { Form, Button, Card, Alert } from "react-bootstrap";
// import { useAuth } from "../contexts/AuthContext";
// import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";

// export default function UpdateProfile() {
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const { signup } = useAuth();
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const history = useHistory();

//   async function handleSubmit(e) {
//     e.preventDefault();

//     if (passwordRef.current.value!== passwordConfirmRef.current.value) {
//       return setError("Passwords do not match");
//     }

//     try {
//       await signup(emailRef.current.value, passwordRef.current.value);
//       history.push("/login");
//     } catch (error) {
//       setError(error.message);
//     }
//   }

//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <Card>
//             <Card.Body>
//               <h2 className="text-center mb-4">Sign Up</h2>
//               {error && <Alert variant="danger">{error}</Alert>}
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group id="email">
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control type="email" ref={emailRef} required />
//                 </Form.Group>
//                 <Form.Group id="password">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control type="password" ref={passwordRef} required />
//                 </Form.Group>
//                 <Form.Group id="password-confirm">
//                   <Form.Label>Password Confirmation</Form.Label>
//                   <Form.Control
//                     type="password"
//                     ref={passwordConfirmRef}
//                     required
//                   />
//                 </Form.Group>
//                 <Button type="submit" className="w-100" disabled={loading}>
//                   Sign Up
//                 </Button>
//               </Form>
//               <div className="text-center mt-2">
//                 <Link to="/login">Already have an account? Login</Link>
//               </div>
//             </Card.Body>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }
//   const { currentUser, updatePassword, updateEmail } = useAuth();
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const history = useHistory();

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (passwordRef.current.value!== passwordConfirmRef.current.value) {
//       return setError("Passwords do not match");
//     }

//     const promises = [];
//     setLoading(true);
//     setError("");

//     if (emailRef.current.value!== currentUser.email) {
//       promises.push(updateEmail(emailRef.current.value));
//     }
//     if (passwordRef.current.value) {
//       promises.push(updatePassword(passwordRef.current.value));
//     }

//     Promise.all(promises)
//      .then(() => {
//         history.push("/");
//       })
//      .catch(() => {
//         setError("Failed to update account");
//       })
//      .finally(() => {
//         setLoading(false);
//       });
//   }

//   return (
//     <>
//       <Card>
//         <Card.Body>
//           <h2 className="text-center mb-4">Update Profile</h2>
//           {error && <Alert variant="danger">{error}</Alert>}
//           <Form onSubmit={handleSubmit}>
//             <Form.Group id="email">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 ref={emailRef}
//                 required
//                 defaultValue={currentUser.email}
//               />
//             </Form.Group>
//             <Form.Group id="password">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 ref={passwordRef}
//                 placeholder="Leave blank to keep the same"
//               />
//             </Form.Group>
//             <Form.Group id="password-confirm">
//               <Form.Label>Password Confirmation</Form.Label>
//               <Form.Control
//                 type="password"
//                 ref={passwordConfirmRef}
//                 placeholder="Leave blank to keep the same"
//               />
//             </Form.Group>
//             <Button disabled={loading} className="w-100" type="submit">
//               Update
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card>
//       <div className="w-100 text-center mt-2">
//         <Link to="/">Cancel</Link>
//       </div>
//     </>
//   );


// export default function UpdateProfile() {
//   const emailRef = useRef()
//   const passwordRef = useRef()
//   const passwordConfirmRef = useRef()
//   const { currentUser, updatePassword, updateEmail } = useAuth()
//   const [error, setError] = useState("")
//   const [loading, setLoading] = useState(false)
//   const history = useHistory()

//   function handleSubmit(e) {
//     e.preventDefault()
//     if (passwordRef.current.value !== passwordConfirmRef.current.value) {
//       return setError("Passwords do not match")
//     }

//     const promises = []
//     setLoading(true)
//     setError("")

//     if (emailRef.current.value !== currentUser.email) {
//       promises.push(updateEmail(emailRef.current.value))
//     }
//     if (passwordRef.current.value) {
//       promises.push(updatePassword(passwordRef.current.value))
//     }

//     Promise.all(promises)
//       .then(() => {
//         history.push("/")
//       })
//       .catch(() => {
//         setError("Failed to update account")
//       })
//       .finally(() => {
//         setLoading(false)
//       })
//   }

//   return (
//     <>
//       <Card>
//         <Card.Body>
//           <h2 className="text-center mb-4">Update Profile</h2>
//           {error && <Alert variant="danger">{error}</Alert>}
//           <Form onSubmit={handleSubmit}>
//             <Form.Group id="email">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 ref={emailRef}
//                 required
//                 defaultValue={currentUser.email}
//               />
//             </Form.Group>
//             <Form.Group id="password">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 ref={passwordRef}
//                 placeholder="Leave blank to keep the same"
//               />
//             </Form.Group>
//             <Form.Group id="password-confirm">
//               <Form.Label>Password Confirmation</Form.Label>
//               <Form.Control
//                 type="password"
//                 ref={passwordConfirmRef}
//                 placeholder="Leave blank to keep the same"
//               />
//             </Form.Group>
//             <Button disabled={loading} className="w-100" type="submit">
//               Update
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card>
//       {/* <div className="w-100 text-center mt-2"> */}
//         <Link to="/">Cancel</Link>
//       </div>
//     </>
//   )
// }
