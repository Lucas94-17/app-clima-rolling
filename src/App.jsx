// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import { Input } from "./Components/Input/Input"
import { DataCard } from './Components/Card/DataCard';
import { Error } from './Components/Error/Error'

function App() {
  // const [count, setCount] = useState(0)
  const [weatherData,setWeatherData] = useState({});
  const [error, setError] = useState(false);

  return (
    <>
      <h1>Clima App ☁</h1>
      <main>
      <Input setWeatherData={setWeatherData} setError={setError}></Input>
      {
        !error ? (
          <DataCard weatherData={weatherData}></DataCard>
        ) : (
          <Error />
        )
      }
      </main>
      <footer>
        <p>&copy : Todos los derechos reservados</p>
      </footer>
    </>
  )
}

export default App
{/* 
        ESTO SERIA LO MISMO QUE LO DE ARRIBA, ES UN TERNARIO
        {
        if (!error) {
          <Card weatherData={weatherData}></Card>
        }else{
          <Error></Error>
        }
      } */}