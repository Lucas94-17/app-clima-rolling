import { useState } from 'react'
import './App.css'
import  WeatherForm  from "./Components/Input/Input"
import  {DataCard}  from './Components/Card/DataCard';
import Error  from './Components/Error/Error'
import "bootstrap-icons/font/bootstrap-icons.css";


function App() {
  const [weatherData,setWeatherData] = useState({});
  const [error, setError] = useState(false);

  return (
    <>

      <main>
      <WeatherForm setWeatherData={setWeatherData} setError={setError}></WeatherForm>
      {
        !error ? (
          <DataCard weatherData={weatherData}></DataCard>
        ) : (
          <Error />
        )
      }
      </main>
      <footer>
        <p> © : Todos los derechos reservados</p>
      </footer>
    </>
  )
}

export default App
