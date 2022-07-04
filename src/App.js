import './styles/App.css'
import {useState} from 'react'
import axios from 'axios'

const App=(props)=> {
  const[data, setData]=useState({});
  const[location, setLocation]=useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c2b8aa2a7cfaa0f5d03bfaa89f3b28be&units=metric`

  const searchLocation=(event)=>{
    if(event.key === 'Enter'){
      axios.get(url)
      .then((response)=>{
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
    
  }

  const handleChange=(event)=>{
    setLocation(event.target.value)
  }

  

  return (
    <div className='app'>
      <div className='search'>
            <input type='text' name='search' value={location} placeholder='Search City' onChange={handleChange} onKeyPress={searchLocation} />
          </div>
      <div className='container'>
        <div className='top'>
          
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1>: null}
          </div>
          <div className='description'>
            {data.weather ? <p >{data.weather[0].description}</p>: null}
          </div>

        </div>
      {data.name != undefined &&
        <div className='bottom'>
          <div className='feels'>
          {data.main ? <p>{data.main.feels_like.toFixed()}°C</p>: null}
            <p>Feels Like</p>
          </div>
          <div className='humidity'>
          {data.main ? <p>{data.main.humidity}%</p>: null}
            <p>Humitidy</p>
          </div>
          <div className='wind'>
          {data.wind ? <h1>{data.wind.speed.toFixed()} KM/h</h1>: null}
            <p>Wind</p>
          </div>
        </div>
}
      </div>

    </div>
  )
}




export default App;
