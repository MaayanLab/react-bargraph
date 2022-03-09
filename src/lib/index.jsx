import React, { useState } from 'react'
import 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import RotateRightIcon from '@mui/icons-material/RotateRight';

function classes(...C) {
  if (C.length === 1 && typeof C[0] === 'object') {
    const _C = []
    for (const c in C[0]) {
      if (C[0][c]) {
        _C.push(c)
      }
    }
    return _C.join(' ')
  } else {
    return C.join(' ')
  }
}

const palette = [
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

export default function ReactBarGraph(props) {

  const [orientation, setOrientation] = useState(props.orientation)
  
  React.useEffect(() => {
    if (props.orientation !== undefined) setOrientation(props.orientation)
  }, [props.orientation])

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
  for (let i = 0; i < data.length; i++) {
    ids[i] = data[i].id
    scores[i] = data[i].score
  }

  let paletteIndex = 0;
  for (let i = 0; i < data.length; i++) {

    if (colors[i] == undefined) {

      colors[i] = palette[paletteIndex]
      
      let firstWord = ids[i]

      if (ids[i].indexOf('_') != -1) {
        firstWord = ids[i].substring(0, ids[i].indexOf('_'))
      }

      for (let j = i+1; j < data.length; j++) {

        let firstWord2 = ids[j]

        if (ids[j].indexOf('_') != -1) {
          firstWord2 = ids[j].substring(0, ids[j].indexOf('_'))
        }
        if (firstWord === firstWord2) {
          colors[j] = palette[paletteIndex]
        }  
      }

      paletteIndex++

      if (paletteIndex >= paletteIndex.size) paletteIndex = 0
    }
  }

  const graphData = {
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

  const options = {}

  if (orientation == "vertical") {
    Object.assign(options, {
      indexAxis: 'x',
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: props.title,
          font: {
            size: 50
          }
        },
        legend: {
          display: false
       }}
    })
  } else if (orientation == "horizontal") {
    Object.assign(options,{
      indexAxis: 'y',
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: props.title,
          font: {
            size: 50
          }
        },
        legend: {
          display: false
       }}
    })
  } else {
    throw new Error('Unsupported orientation')
  }

  return (
      
      <div className={props.style.layout}>
        {
          orientation == "vertical" 
            ? <RotateRightIcon className={props.style.button} onClick={()=>swapOrientation()}></RotateRightIcon> 
            : <RotateLeftIcon className={props.style.button} onClick={()=>swapOrientation()}></RotateLeftIcon> 
        }
        <Bar
          data={graphData}
          options={options}
        />
      </div>
  )
}