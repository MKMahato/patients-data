import React , {useState, useEffect} from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { Data } from '../Data';


export const LineChart = () => {


  const [key, setKey] = useState({
    value: "",
    isLoading: true
  })
  const handleChange = (e) => {
    setKey({value: e.target.value, isLoading: false})
  }

    const onSubmit = (e)=> {
      const obj2 = Data.find(e => e.Name === key.value);
      const idx = Data.indexOf(obj2)
      
      const valUser =  Object.values(Data[idx])
      valUser.shift()

      let arr = userData.datasets
      arr.push({
        label: "que",
        data: valUser,
        backgroundColor: [
            "red","orange","blue","gree","violet"
        ]
      })
      
      setUserData({
        ...userData,
        datasets: arr
      })
    console.log(userData);
  }

  const obj = Object.keys(Data[0]);
  obj.splice(obj.indexOf("Name"), 1)
  const valIdeal = Object.values(Data[0])
    valIdeal.shift()

  const [userData, setUserData] = useState({
    labels: obj,
    datasets: [{
      label: "que",
      data: valIdeal,
      backgroundColor: [
          "red","orange","blue","gree","violet"
      ]
    }]
  })

  return (
    <div>
        <input
        placeholder="Enter Name"
        onChange={handleChange}
        />
        <button onClick={onSubmit}>Search</button>

        <Line
        data={userData}/>
    </div>
  )
}