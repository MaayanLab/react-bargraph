import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _typeof from "@babel/runtime/helpers/typeof";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React, { useState } from 'react';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import DownloadIcon from '@mui/icons-material/Download';
import { IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { saveAs } from 'file-saver';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function classes() {
  for (var _len = arguments.length, C = new Array(_len), _key = 0; _key < _len; _key++) {
    C[_key] = arguments[_key];
  }

  if (C.length === 1 && _typeof(C[0]) === 'object') {
    var _C = [];

    for (var c in C[0]) {
      if (C[0][c]) {
        _C.push(c);
      }
    }

    return _C.join(' ');
  } else {
    return C.join(' ');
  }
}

export default function ReactBarGraph(props) {
  var _useState = useState(props.orientation),
      _useState2 = _slicedToArray(_useState, 2),
      orientation = _useState2[0],
      setOrientation = _useState2[1];

  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  React.useEffect(function () {
    if (props.orientation !== undefined) setOrientation(props.orientation);
  }, [props.orientation]);
  var open = Boolean(anchorEl);

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  var printRef = React.useRef();

  function swapOrientation() {
    if (orientation === "horizontal") {
      setOrientation("vertical");
    } else {
      setOrientation("horizontal");
    }
  }

  var handleDownloadToPNG = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var canvasSave;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              canvasSave = document.getElementById('graph');
              canvasSave.toBlob(function (blob) {
                saveAs(blob, "graph.png");
              });
              handleClose();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleDownloadToPNG() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleDownloadToSVG = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleDownloadToSVG() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleDownloadToEPS = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleDownloadToEPS() {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleDownloadToPDF = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
      var element, canvas, data, pdf, imgProperties, pdfWidth, pdfHeight;
      return _regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              element = printRef.current;
              _context4.next = 3;
              return html2canvas(element);

            case 3:
              canvas = _context4.sent;
              data = canvas.toDataURL('image/png');
              pdf = new jsPDF();
              imgProperties = pdf.getImageProperties(data);
              pdfWidth = pdf.internal.pageSize.getWidth();
              pdfHeight = imgProperties.height * pdfWidth / imgProperties.width;
              pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
              pdf.save('graph.pdf');
              handleClose();

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function handleDownloadToPDF() {
      return _ref4.apply(this, arguments);
    };
  }();

  var data = props.data;
  var ids = new Array(data.length);
  var scores = new Array(data.length); // deconstructing the JSON object into ids and scores

  for (var i = 0; i < data.length; i++) {
    ids[i] = data[i].id;
    scores[i] = data[i].score;
  }

  var colors = props.palette !== undefined ? props.palette : ["blue"];
  var graphData = {
    labels: ids,
    datasets: [{
      data: scores,
      backgroundColor: colors,
      borderColor: ["black"],
      borderWidth: 1
    }]
  };
  var options = {};

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
        }
      }
    });
  } else if (orientation == "horizontal") {
    Object.assign(options, {
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
        }
      }
    });
  } else {
    throw new Error('Unsupported orientation');
  }

  return /*#__PURE__*/React.createElement("div", {
    className: props.style.layout
  }, /*#__PURE__*/React.createElement("div", {
    className: props.style.toolBar
  }, orientation == "vertical" ? /*#__PURE__*/React.createElement(Tooltip, {
    title: "Horizontal View",
    placement: "top"
  }, /*#__PURE__*/React.createElement(IconButton, {
    onClick: function onClick() {
      return swapOrientation();
    },
    className: props.style.button
  }, /*#__PURE__*/React.createElement(RotateRightIcon, null))) : /*#__PURE__*/React.createElement(Tooltip, {
    title: "Vertical View",
    placement: "top"
  }, /*#__PURE__*/React.createElement(IconButton, {
    onClick: function onClick() {
      return swapOrientation();
    },
    className: props.style.button
  }, /*#__PURE__*/React.createElement(RotateLeftIcon, null))), /*#__PURE__*/React.createElement(Tooltip, {
    title: "Download Graph",
    placement: "top"
  }, /*#__PURE__*/React.createElement(IconButton, {
    id: "basic-button",
    "aria-controls": open ? 'basic-menu' : undefined,
    "aria-haspopup": "true",
    "aria-expanded": open ? 'true' : undefined,
    onClick: handleClick,
    className: props.style.button
  }, /*#__PURE__*/React.createElement(DownloadIcon, null))), /*#__PURE__*/React.createElement(Menu, {
    id: "basic-menu",
    anchorEl: anchorEl,
    open: open,
    onClose: handleClose,
    MenuListProps: {
      'aria-labelledby': 'basic-button'
    }
  }, /*#__PURE__*/React.createElement(MenuItem, {
    onClick: handleDownloadToPNG
  }, "PNG"), /*#__PURE__*/React.createElement(MenuItem, {
    onClick: handleDownloadToSVG
  }, "SVG (not functional yet)"), /*#__PURE__*/React.createElement(MenuItem, {
    onClick: handleDownloadToEPS
  }, "EPS (not functional yet)"), /*#__PURE__*/React.createElement(MenuItem, {
    onClick: handleDownloadToPDF
  }, "PDF"))), /*#__PURE__*/React.createElement("div", {
    className: props.style.graphDiv,
    ref: printRef
  }, /*#__PURE__*/React.createElement(Bar, {
    id: "graph",
    data: graphData,
    options: options
  })));
}