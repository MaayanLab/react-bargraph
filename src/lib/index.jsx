import React, { useState } from 'react'
import 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
import RotateLeftIcon from '@mui/icons-material/RotateLeft'
import RotateRightIcon from '@mui/icons-material/RotateRight'
import DownloadIcon from '@mui/icons-material/Download'
import { IconButton } from '@mui/material'
import SortIcon from '@mui/icons-material/Sort'
import PaletteIcon from '@mui/icons-material/Palette'
import Tooltip from '@mui/material/Tooltip'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import { saveAs } from 'file-saver'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { ChromePicker } from 'react-color'
import Popover from '@mui/material/Popover'
import Values from 'values.js'

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
  const [sorted, setSorted] = useState(true)
  const [downloadMenuAnchorEl, setDownloadMenuAnchorEl] = useState(null)
  const [colorPickerAnchorEl, setColorPickerAnchorEl] = useState(null)
  const [selectedColor, setSelectedColor] = useState({hex: "#590000", rgb: {r:89, g:0, b:0}})

  React.useEffect(() => {
    if (props.orientation !== undefined) setOrientation(props.orientation)
  }, [props.orientation])
  
  // Download menu
  const downloadMenuOpen = Boolean(downloadMenuAnchorEl)
  const handleDownloadMenuClick = (event) => {
    setDownloadMenuAnchorEl(event.currentTarget)
  }
  const handleDownloadMenuClose = () => {
    setDownloadMenuAnchorEl(null)
  }

  // Color picker popover
  const handleColorPickerClick = (event) => {
    setColorPickerAnchorEl(event.currentTarget);
  }

  const handleColorPickerClose = () => {
    setColorPickerAnchorEl(null);
  }

  const colorPickerOpen = Boolean(colorPickerAnchorEl);
  const id = colorPickerOpen ? 'simple-popover' : undefined;

  // For downloading graph
  const printRef = React.useRef()

  let displayTitle = true
  if (props.title === undefined) {
    displayTitle = false
  }

  let displayHorizontalOrientationXaxis = true
  if (props.horizontalOrientationXaxis === undefined) {
    displayHorizontalOrientationXaxis = false
  }

  let displayHorizontalOrientationYaxis = true
  if (props.horizontalOrientationYaxis === undefined) {
    displayHorizontalOrientationYaxis = false
  }


  function swapOrientation() {
    if (orientation === "horizontal") {
      setOrientation("vertical")
    } else {
      setOrientation("horizontal")
    }
  }

  function reverseOrder() {
    if (sorted === true) {
      setSorted(false)
    } else {
      setSorted(true)
    }
  }

  const handleDownloadToPNG = async () => {

    const canvasSave = document.getElementById('graph')
    canvasSave.toBlob(function (blob) {
        saveAs(blob, "graph.png")
    })
    
    handleClose()
  }

  const handleDownloadToSVG = async () => {
    //TODO
  }

  const handleDownloadToEPS = async () => {
    //TODO
  }

  const handleDownloadToPDF = async () => {
    const element = printRef.current
    const canvas = await html2canvas(element)
    const data = canvas.toDataURL('image/png')

    const pdf = new jsPDF()
    const imgProperties = pdf.getImageProperties(data)
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight =
      (imgProperties.height * pdfWidth) / imgProperties.width

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save('graph.pdf')
    handleClose()
  }

  const data = props.data

  const ids = new Array(data.length)
  const scores = new Array(data.length)

  // Deconstructing the JSON object into ids and scores
  for (let i = 0; i < data.length; i++) {
    ids[i] = data[i].id
    scores[i] = data[i].score
  }

  // Rearranging values to achieve sorted order
  // Note that we retain the original ids array and scores array so that we know which id corresponds to each score
  const sortedIds = new Array(data.length)
  const sortedScores = new Array(data.length)

  for(let i = 0; i < data.length; i++) {
    sortedScores[i] = scores[i]
  }

  // Bubblesort
  for (let i = 0; i < data.length-1; i++) {
    for (let j = 0; j < data.length-i-1; j++) {
      if (sortedScores[j] > sortedScores[j+1]) {
        let temp = sortedScores[j]
        sortedScores[j] = sortedScores[j+1]
        sortedScores[j+1] = temp
      }
    }
  }

  // Adjusting sortedIds
  for(let i = 0; i < data.length; i++) {
    let old_index = -1
    for(let j = 0; j < data.length; j++) {
        if (sortedScores[i] == scores[j]) {
          old_index = j
          break
        }
    }
    sortedIds[i] = ids[old_index]
  }

  const palette = (props.palette !== undefined) ? props.palette : ["darkred"]
  const colors = new Array(palette.length)

  // Creating gradient, if requested
  if (props.gradient === undefined || props.gradient != true) {
    for (let i = 0; i < palette.length; i++) {
      colors[i] = palette[i]
    }
  } else {

    const maxValue = sortedScores[data.length - 1]
    const minValue = sortedScores[0]

    for (let i = 0; i < data.length; i++) {

      const darkestColor = new Values(String(selectedColor.hex))
      colors[i] = darkestColor.tint(100 * (1 - (sortedScores[i]/maxValue))).hexString()

    }
  }

  // Getting reverse sorted info
  const reverseSortedIds = new Array(data.length)
  const reverseSortedScores = new Array(data.length)
  const reversedColors = new Array(data.length)

  for (let i = 0; i < data.length; i++) {
    reverseSortedIds[i] = sortedIds[data.length-1-i]
    reverseSortedScores[i] = sortedScores[data.length-1-i]
    reversedColors[i] = colors[data.length-1-i]
  }

  // Choosing whether to use sorted or reverse sorted order
  let scoresToUse
  let idsToUse
  let colorsToUse

  if (sorted) {
    scoresToUse = sortedScores
    idsToUse = sortedIds
    colorsToUse = colors
  } else {
    scoresToUse = reverseSortedScores
    idsToUse = reverseSortedIds
    colorsToUse = reversedColors
  }

  const graphData = {
    labels: idsToUse,
    datasets: [
      {
        data: scoresToUse,
        backgroundColor: colorsToUse,
        // borderColor: ["black"],
        // borderWidth: 1,
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
          display: displayTitle,
          text: props.title,
          font: {
            size: 50
          }
        },
        legend: {
          display: false
       }},
       scales: {
        x: {
          title: {
            display: displayHorizontalOrientationYaxis,
            text: props.horizontalOrientationYaxis,
            font: {
              size: 25
            }
          }, 
          ticks: {
            maxRotation: 90,
            minRotation: 30
          }
        },
        y: {
          title: {
            display: displayHorizontalOrientationXaxis,
            text: props.horizontalOrientationXaxis,
            font: {
              size: 25
            }
          }
        }
      }
    })
  } else if (orientation == "horizontal") {
    Object.assign(options,{
      indexAxis: 'y',
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: displayTitle,
          text: props.title,
          font: {
            size: 50
          }
        },
        legend: {
          display: false
       }},
       scales: {
        x: {
          title: {
            display: displayHorizontalOrientationXaxis,
            text: props.horizontalOrientationXaxis,
            font: {
              size: 25
            }
          }
        },
        y: {
          title: {
            display: displayHorizontalOrientationYaxis,
            text: props.horizontalOrientationYaxis,
            font: {
              size: 25
            }
          }
        }
      }   
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
                  <IconButton onClick={()=>swapOrientation()} className={props.style.button}>
                    <RotateRightIcon />
                  </IconButton>
                </Tooltip>
              : <Tooltip title="Vertical View" placement="top">
                  <IconButton onClick={()=>swapOrientation()} className={props.style.button}>
                    <RotateLeftIcon />
                  </IconButton>
                </Tooltip> 
          }
          <Tooltip title="Reverse Order" placement="top">
            <IconButton onClick={()=>reverseOrder()} className={props.style.button}>
              <SortIcon />
            </IconButton>
          </Tooltip>
          {
            props.gradient && (
            <>
              <Tooltip title="Change Color" placement="top">
                <IconButton className={props.style.button} aria-describedby={id} variant="contained" onClick={handleColorPickerClick}>
                  <PaletteIcon />
                </IconButton>
              </Tooltip>      
              <Popover
                id={id}
                open={colorPickerOpen}
                anchorEl={colorPickerAnchorEl}
                onClose={handleColorPickerClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <ChromePicker disableAlpha= { true } color={ selectedColor } onChangeComplete={ setSelectedColor } />
              </Popover>
            </>
          )
          }
  
          <Tooltip title="Download Graph" placement="top">
            <IconButton 
              id="basic-button"
              aria-controls={downloadMenuOpen ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={downloadMenuOpen ? 'true' : undefined}
              onClick={handleDownloadMenuClick} 
              className={props.style.button}>
              <DownloadIcon />
            </IconButton>
          </Tooltip>
          <Menu
            id="basic-menu"
            anchorEl={downloadMenuAnchorEl}
            open={downloadMenuOpen}
            onClose={handleDownloadMenuClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleDownloadToPNG}>PNG</MenuItem>
            <MenuItem onClick={handleDownloadToSVG}>SVG (not functional yet)</MenuItem>
            <MenuItem onClick={handleDownloadToEPS}>EPS (not functional yet)</MenuItem>
            <MenuItem onClick={handleDownloadToPDF}>PDF</MenuItem>
          </Menu>
        </div>
        <div className={props.style.graphDiv} ref={printRef}>
          <Bar
            id="graph"
            data={graphData}
            options={options}
          />
        </div>
              
      </div>
  )
}