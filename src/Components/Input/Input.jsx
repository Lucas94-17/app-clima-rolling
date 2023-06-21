import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export const Input = ({setWeatherData,setError}) => {
    const [city , setCity] = useState("San Miguel de Tucumán")
    const [country , setCountry] = useState("AR");
    const API = process.env.REACT_APP_APIKEY;


    useEffect(() => {
        queryAPI();
     }, []);

    const queryAPI = async() =>{
        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&lang=es&appid=${API}&units=metric`)
            const data = await response.json();
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
    const handleSubmit = (e) => {
        e.preventDeFault()
        queryAPI();
    }

    return(
    <>
        <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
            onChange={(e) => setCity(e.target.value)}
            value = {city}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Código de país</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
            onChange={(e) => setCountry(e.target.value)}
            value = {country}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
     <Button type="submit">Buscar</Button>
    </Form>
    </>
    )
}