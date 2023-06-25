// import React from 'react';
// import { useState,useEffect } from 'react';
// import { Form, Button, Row, Col } from "react-bootstrap";


// export const WeatherForm = ({setWeatherData,setError}) => {
//     const [city , setCity] = useState("San Miguel de Tucumán")
//     const [country , setCountry] = useState("AR");
//     const API = '90012dfe3f754ccd3b5f413421bde26f';


//     useEffect(() => {
//         queryAPI();
//      }, []);

//     const queryAPI = async() =>{
//         try{
//             const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&lang=es&appid=${API}&units=metric`)
//             const data = await response.json();
//             console.log(data)
//                 if(response.status === 200){
//                   setWeatherData(data);
//                   setError(false)
//                 }else{
//                   setError(true)
//                 }
//         }catch(error)
//         {
//             console.log('error al consultar la api')
//         }
//       }
  
  
//       const handleSubmit = (e) => {
//         e.preventDeFault()
//         queryAPI();
//         }

//     return(
//       <section className="text-light">
//         {/* <h1>Clima App <i className="bi bi-cloud-sun"></i></h1> */}
//           <Form className="my-5" onSubmit={handleSubmit}>
//             <Row>
//               <Col md={6}>
//                 <Form.Group className="mb-3" controlId="formCity">
//                   <Form.Label>Ciudad</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Ingresa una ciudad"
//                     required
//                     minLength={3}
//                     maxLength={50}
//                     onChange={(e)=> setCity(e.target.value)}
//                     value={city}
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md={6}>
//                 <Form.Group className="mb-3" controlId="formCountry">
//                   <Form.Label>Codigo de pais</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Ingresa un codigo de pais ej: AR"
//                     required
//                     minLength={2}
//                     maxLength={3}
//                     onChange={(e)=>setCountry(e.target.value)} 
//                     value={country}               
//                   />
//                 </Form.Group>
//               </Col>
//             </Row>
//               <Button variant="danger" type="submit" className="mb-3">
//                 Buscar
//               </Button>
//           </Form>
//       </section>
//     )
// }

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';
import { Form, Button, Row, Col } from "react-bootstrap";

const WeatherForm = ({setWeatherData, setError}) => {
  const [city, setCity] = useState("San Miguel de Tucumán");
  const [country, setCountry] = useState("AR");
  const API = '90012dfe3f754ccd3b5f413421bde26f';

  useEffect(() => {
     queryAPI();
  }, []);

  const queryAPI = async() =>{
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&lang=es&appid=${API}&units=metric`)
        const data = await response.json();
        console.log(data)
        if(response.status === 200){
          setWeatherData(data);
          setError(false)
        }else{
          setError(true)
        }
    }catch(error)
    {
        console.log('error al consultar la api')
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    queryAPI();
  }

  return (
    <section className="text-light">
      <h1>Clima App <i className="bi bi-cloud-sun"></i></h1>
      <Form className="my-5" onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formCity">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa una ciudad"
                required
                minLength={3}
                maxLength={50}
                onChange={(e)=> setCity(e.target.value)}
                value={city}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formCountry">
              <Form.Label>Codigo de pais</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa un codigo de pais ej: AR"
                required
                minLength={2}
                maxLength={3}
                onChange={(e)=>setCountry(e.target.value)}
                value={country}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="danger" type="submit" className="mb-3">
          Buscar
        </Button>
      </Form>
    </section>
  );
};

export default WeatherForm;
