import React, { useEffect, useState,useRef } from 'react';
import "./App.css"
import Show from './Show';
import Cities from "./Cities.json"
import clearsky from "./clear-sky.png"


const App = () => {
  const [text,settext]= useState()
  const ref1 = useRef()
  const [city, setcity] = useState(Cities);
 
  const [citynames,setcitynames]= useState()
  
  const [data,setdata]=useState({})
   
  
  
  const searchcity=(e="bhopal")=>{
     
    const API_key="12c33bb2b303e46d911ec4e7d49c338d"
    const base_url=`https://api.openweathermap.org/data/2.5/weather?q=${e}&units=metric&APPID=${API_key}`
    fetch(base_url)
    .then(res => res.json())
    .then(dataa => {
      setdata(dataa);
     
      setcitynames('')
        
      
    });
  
  }
  useEffect(() => {
      searchcity()
  },[])
  
 

  const setchange=(e)=>{
    const texte=e.target.value
    settext({[e.target.name]:e.target.value})

    const cityname=city.filter((d,i)=>{
       return d.name.toLowerCase().includes(texte.toLowerCase())
    })
   
    if (texte === "") {
      setcitynames([]);
    } else {
      setcitynames(cityname);
    }
    
      
  }
  
  const DateCurrent=(d)=>{
   return `${d}`  }
 
  const selectcity=(d)=>{
      searchcity(d)
      ref1.current.value=""

   }
  
  

  return <div className={(typeof data.main != "undefined")?((data.main.temp>20)?"app warm":"app"):"app"}>
    
          <main>
            <div className="searchBox">
                <input
                   placeholder='search...'
                   className='search-bar'
                   onChange={setchange} 
                   ref={ref1}
             
                /> 
            </div><br></br> <br></br>
              { citynames &&   <div className='searchingbox'>
                       {citynames.map((d,i)=>{
                             return <div  onClick={()=>selectcity(d.name)} key={i} className='list'>
                             <li  >{d.name}</li>
                                               
                                                </div>
                                                 })
                                   }
                                  
  
                </div>}
          {data.name !== undefined && <div>
            <div className="location-box">
               <div className="location">{data.name}</div><br></br>
               <div className="date">{DateCurrent(new Date().toDateString())}</div>
            </div>
            <div className="weather-box">
              {data.main?<div className="temp">
                         {data.main.temp}°c</div>:""}
                {data.main? <div className="weather">{data.weather[0].description}
                <div>
                      {data.weather[0].description === "clear sky" && <img src='https://cdn-icons-png.flaticon.com/128/984/984622.png' /> }   
                      {data.weather[0].description === "smoke" && <img src='https://cdn-icons.flaticon.com/png/128/4414/premium/4414055.png?token=exp=1644770630~hmac=c3908d2d6e30d048087c0887a157c34a'/>}   
                      {data.weather[0].description === "haze" && <img src='https://cdn-icons.flaticon.com/png/128/3104/premium/3104495.png?token=exp=1644769101~hmac=619dbf165ea72e1810477ba1b70c81a7'/>}   
                      {data.weather[0].description === "mist" && <img src='https://cdn-icons.flaticon.com/png/128/4138/premium/4138078.png?token=exp=1644770408~hmac=b7a02e919c4bac109a87049f407d4be2'/>}   
                      {data.weather[0].description === "few clouds" && <img src='https://cdn-icons-png.flaticon.com/128/414/414927.png' />}
                      {data.weather[0].description === "overcast clouds" && <img src='https://cdn-icons-png.flaticon.com/128/414/414927.png' />}                              
                      {data.weather[0].description === "broken cloud" && <img src='' />}                              
                </div>
                </div>:""}
          </div>
          </div> }
           

          
          </main>
  </div>;
};

export default App;
















// import React, { useState } from 'react';
// import "./App.css"
// const api = {
//   key:"6ea5e08a0416125e8297bd9bdf4b5113",
//   base: "https://api.openweathermap.org/data/2.5/"
// }

// function App() {
//   const [query, setQuery] = useState('');
//   const [weather, setWeather] = useState({});

//   const search = evt => {
//     if (evt.key === "Enter") {
      // fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      //   .then(res => res.json())
      //   .then(result => {
      //     setWeather(result);
      //     setQuery('');
      //     console.log(result);
      //   });
//     }
//   }

//   const dateBuilder = (d) => {
//     let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//     let day = days[d.getDay()];
//     let date = d.getDate();
//     let month = months[d.getMonth()];
//     let year = d.getFullYear();

//     return `${day} ${date} ${month} ${year}`
//   }

//   return (
//     <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
//       <main>
//         <div className="search-box">
//           <input 
//             type="text"
//             className="search-bar"
//             placeholder="Search..."
//             onChange={e => setQuery(e.target.value)}
//             value={query}
//             onKeyPress={search}
//           />
//         </div>
//         {(typeof weather.main != "undefined") ? (
//         <div>
          // <div className="location-box">
          //   <div className="location">{weather.name}, {weather.sys.country}</div>
          //   <div className="date">{dateBuilder(new Date())}</div>
          // </div>
          // <div className="weather-box">
          //   <div className="temp">
          //     {Math.round(weather.main.temp)}°c
          //   </div>
          //   <div className="weather">{weather.weather[0].main}</div>
          // </div>
//         </div>
//         ) : ('')}
//       </main>
//     </div>
//   );
// }

// export default App;










