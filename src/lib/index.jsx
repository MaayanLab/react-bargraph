import React, { useState } from 'react'
import 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
import RotateLeftIcon from '@mui/icons-material/RotateLeft'
import RotateRightIcon from '@mui/icons-material/RotateRight'
import DownloadIcon from '@mui/icons-material/Download'
import { IconButton } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import { saveAs } from 'file-saver'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

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
  const [anchorEl, setAnchorEl] = React.useState(null)

  React.useEffect(() => {
    if (props.orientation !== undefined) setOrientation(props.orientation)
  }, [props.orientation])
  
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const printRef = React.useRef()

  let displayTitle = true
  if (props.title === undefined) {
    displayTitle = false
  }

  function swapOrientation() {
    if (orientation === "horizontal") {
      setOrientation("vertical")
    } else {
      setOrientation("horizontal")
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

  // deconstructing the JSON object into ids and scores
  for (let i = 0; i < data.length; i++) {
    ids[i] = data[i].id
    scores[i] = data[i].score
  }

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
          display: displayTitle,
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
          display: displayTitle,
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
          <Tooltip title="Download Graph" placement="top">
            <IconButton 
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick} 
              className={props.style.button}>
              <DownloadIcon />
            </IconButton>
          </Tooltip>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
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