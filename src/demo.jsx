import React from 'react'
import ReactDOM from 'react-dom'
import Suspense from './components/Suspense'
import { useAsyncResource } from 'use-async-resource'

import ReactBarGraphStyle from './lib/index.module.css'
const ReactBarGraph = React.lazy(() => import('./lib'))

function Component({ getDemo }) {

  const demo = getDemo()
  const palette = 
    ["#d89735",
    "#7c60cd",
    "#59b74b",
    "#c063b9",
    "#a7b541",
    "#6d83c9",
    "#d0453d",
    "#48b6d2",
    "#c5704d",
    "#5bb78b",
    "#c75980",
    "#53803b",
    "#9b8542"]

  return (
    <div style={{ display: 'flex', flex: '1 1 auto', overflow: 'hidden', margin: '5%' }}>
      <ReactBarGraph style={ReactBarGraphStyle} gradient={true} title={"Demo React Bar Graph"} horizontalOrientationXaxis={"Score"} horizontalOrientationYaxis={"Tissue"} orientation={"horizontal"} palette={palette} data={demo} />
    </div>
  )
}

function App() {
  const [getDemo] = useAsyncResource(() => import('./bigDemo.json'), []);
  return (
    <Suspense>
      <Component getDemo={getDemo} />
    </Suspense>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
