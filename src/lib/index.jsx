import React, { useState } from 'react'
import 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
import RotateLeftIcon from '@mui/icons-material/RotateLeft'
import RotateRightIcon from '@mui/icons-material/RotateRight'
import DownloadIcon from '@mui/icons-material/Download'
import { IconButton } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'

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
  // const colors = new Array(data.length)

  // deconstructing the JSON object into ids and scores
  for (let i = 0; i < data.length; i++) {
    ids[i] = data[i].id
    scores[i] = data[i].score
  }

  // let paletteIndex = 0;
  // for (let i = 0; i < data.length; i++) {

  //   if (colors[i] == undefined) {

  //     colors[i] = palette[paletteIndex]
      
  //     let firstWord = ids[i]

  //     if (ids[i].indexOf('_') != -1) {
  //       firstWord = ids[i].substring(0, ids[i].indexOf('_'))
  //     }

  //     for (let j = i+1; j < data.length; j++) {

  //       let firstWord2 = ids[j]

  //       if (ids[j].indexOf('_') != -1) {
  //         firstWord2 = ids[j].substring(0, ids[j].indexOf('_'))
  //       }
  //       if (firstWord === firstWord2) {
  //         colors[j] = palette[paletteIndex]
  //       }  
  //     }

  //     paletteIndex++

  //     if (paletteIndex >= paletteIndex.size) paletteIndex = 0
  //   }
  // }

  const colors = (props.palette !== undefined) ? props.palette : ["blue"] 

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
        <div className={props.style.toolBar}>
          {
            orientation == "vertical" 
              ? <Tooltip title="Horizontal View" placement="top">
                  <IconButton className={props.style.button}>
                    <RotateRightIcon onClick={()=>swapOrientation()} />
                  </IconButton>
                </Tooltip>
              : <Tooltip title="Vertical View" placement="top">
                  <IconButton className={props.style.button}>
                    <RotateLeftIcon onClick={()=>swapOrientation()} />
                  </IconButton>
                </Tooltip> 
          }
          <Tooltip title="Download Image" placement="top">
            <IconButton className={props.style.button}>
              <DownloadIcon />
            </IconButton>
          </Tooltip>
        </div>
        <Bar
          data={graphData}
          options={options}
        />
      </div>
  )
}