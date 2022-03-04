import ReactDOM from 'react-dom'
import React, { useState } from 'react';
import Suspense from './components/Suspense'
import { ChartJS } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'


export default function ReactBarGraph(props) {

  const [orientation, setOrientation] = useState("horizontal")

  function swapOrientation() {
    if (orientation === "horizontal") {
      setOrientation("vertical")
    } else {
      setOrientation("horizontal")
    }
  }

  const data = props.data

  const ids = new Array(data.length)
  const scores = new Array(data.length)
  const colors = new Array(data.length)

  // deconstructing the JSON object into ids and scores
  for (var i = 0; i < data.length; i++) {
    ids[i] = data[i].id
    scores[i] = data[i].score
  }

  var palette = 
  [
    "#ce9197",
    "#8ee400",
    "#c600ff",
    "#e7ff32",
    "#5e44ff",
    "#e8cc2a",
    "#005cff",
    "#ffb800",
    "#3e41cc",
    "#27d370",
    "#ff3bff",
    "#006f00",
    "#ff75ff",
    "#006c00",
    "#000078",
    "#68de84",
    "#002aa6",
    "#ff8700",
    "#0059cc",
    "#ff3f00",
    "#00ffff",
    "#ba0000",
    "#00ffc9",
    "#ff338c",
    "#00c97c",
    "#3d2ca1",
    "#ff6002",
    "#0085f1",
    "#b14400",
    "#00ffff",
    "#ff355b",
    "#00d8f1",
    "#ff386c",
    "#7ef2d1",
    "#000348",
    "#df9040",
    "#004bae",
    "#ff995d",
    "#0049a1",
    "#876500",
    "#bf84ff",
    "#00651a",
    "#f582ff",
    "#006820",
    "#ff9cff",
    "#004600",
    "#ff9bed",
    "#003000",
    "#ffabfe",
    "#002c00",
    "#ffa7ef",
    "#002800",
    "#5697ff",
    "#873600",
    "#00a9ff",
    "#ff795b",
    "#00a9ff",
    "#363900",
    "#4888ef",
    "#0d2a00",
    "#9092f3",
    "#002600",
    "#95389a",
    "#00542f",
    "#f26f98",
    "#4fe7ff",
    "#370000",
    "#bbffff",
    "#420014",
    "#32dcff",
    "#350500",
    "#00c6fd",
    "#351000",
    "#00b7ff",
    "#ec856c",
    "#00b7ff",
    "#783424",
    "#00aff1",
    "#ff919a",
    "#002061",
    "#e0beae",
    "#0057ab",
    "#bc7663",
    "#75affc",
    "#003e33",
    "#ff8dbb",
    "#002931",
    "#ffd3ff",
    "#007470",
    "#ff99b5",
    "#00aec2",
    "#e8a8d5",
    "#798275",
    "#e0bdff",
    "#6e5c7c",
    "#88d6ff",
    "#b599d1",
    "#cee1f5",
    "#9e9c99",
    "#9bc3e3"
  ]

  var palleteIndex = 0;
  for (var i = 0; i < data.length; i++) {

    if (colors[i] == undefined) {

      colors[i] = palette[palleteIndex]
      
      var firstWord = ids[i]

      if (ids[i].indexOf('_') != -1) {
        firstWord = ids[i].substring(0, ids[i].indexOf('_'))
      }

      for (var j = i+1; j < data.length; j++) {

        var firstWord2 = ids[j]

        if (ids[j].indexOf('_') != -1) {
          firstWord2 = ids[j].substring(0, ids[j].indexOf('_'))
        }
        if (firstWord === firstWord2) {
          colors[j] = palette[palleteIndex]
        }  
      }

      palleteIndex++

      if (palleteIndex >= palleteIndex.size) palleteIndex = 0
    }
  }

  // var width = props.width
  var height = props.height

  // if (width === undefined) width = '10px'
  if (height === undefined) height = '500px'

  var graphData = {
    labels: ids,
    datasets: [
      {
        data: scores,
        backgroundColor: colors,
        borderColor: ["black"],
        borderWidth: 1,
      },
    ],
  }

  var options = {
    indexAxis: 'y',
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Title here",
        font: {
          size: 50
        }
      },
      legend: {
        display: false
     }}
  }

  if (orientation == "vertical") {
    options = {
      indexAxis: 'x',
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Title here",
          font: {
            size: 50
          }
        },
        legend: {
          display: false
       }}
    }
  }

  return (
    <Suspense>
      
      <div style={{height, display: 'flex', flex: '1 1 auto', position: 'relative', overflow: 'hidden'}}>
        <button style={{width: '100px', height: '50px'}} onClick={()=>swapOrientation()}>Switch Orientation</button>
        <div style={{width: '90%'}}>
          <Bar
            data={graphData}
            options={options}
          />
        </div>
      </div>
    </Suspense>
  )
}




