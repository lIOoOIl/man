import axios from 'axios'

let CITY = {
  '北京': '110000',
  '武汉': '420100'
}

//使用高德api
export default (city) => {
  let city_ = CITY[city] || CITY.北京
  return new Promise((resolve, reject) => {
    axios.get(`https://restapi.amap.com/v3/weather/weatherInfo?city=${city_}&key=dba4e6242d0ff544c76a8f8adb93dc5a`)
    .then(msg => {
      if(msg.status === 200){
        resolve(msg.data.lives[0])
      }else{
        reject()
      }
    })
  })
}