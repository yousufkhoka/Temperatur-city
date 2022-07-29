const api_key = `7b7213c39a11302c996d41b534cbe510`
const searchTemperatur = () =>{
    const city = document.getElementById('inputName').value
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`; 
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperatur(data))  
}
searchTemperatur()
const setInnerText = (id , text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperatur= data => {
    console.log(data)
   setInnerText('city', data.name)
   setInnerText('temperatur', data.main.temp)
   setInnerText('condition', data.weather[0].main) 
   const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
   const imgIcon = document.getElementById('weater-icon')
   imgIcon.setAttribute('src', url)
}


    