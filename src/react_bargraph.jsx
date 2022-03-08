import ReactDOM from 'react-dom'
import React from 'react'
import Suspense from './components/Suspense'

import ReactBarGraphStyle from './lib/index.module.css'
const ReactBarGraphComponent = React.lazy(() => import('./lib'))

export function ReactBarGraph(container, { width, height, ...props }) {
  if (width === undefined) width = '100%'
  if (height === undefined) height = '500px'
  ReactDOM.render(
    <Suspense>
      <div style={{
        height,
        display: 'flex',
        flex: '1 1 auto',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <ReactBarGraphComponent style={ReactBarGraphStyle} {...props} />
      </div>
    </Suspense>,
    container
  )
}
