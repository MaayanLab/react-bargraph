import React from 'react'
import ReactDOM from 'react-dom'
import Suspense from './components/Suspense'
import { useAsyncResource } from 'use-async-resource'

import ReactBarGraphStyle from './lib/index.module.css'
const ReactBarGraph = React.lazy(() => import('./lib'))

function Component({ getDemo }) {

  const demo = getDemo()

  return (
    <ReactBarGraph style={ReactBarGraphStyle} orientation={"horizontal"} data={demo} />
  )
}

function App() {
  const [getDemo] = useAsyncResource(() => import('./demo.json'), []);
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
