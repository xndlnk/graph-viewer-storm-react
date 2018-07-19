import * as React from 'react'
import * as ReactDOM from 'react-dom'

import 'storm-react-diagrams/dist/style.min.css'
import './index.css'
import * as storm from 'storm-react-diagrams'

const App = () => {
  const engine = new storm.DiagramEngine()
  engine.installDefaultFactories()

// 2) setup the diagram model
  const model = new storm.DiagramModel()

// 3) create a default node
  const node1 = new storm.DefaultNodeModel('Node 1', 'rgb(0,192,255)')
  const port1 = node1.addOutPort('Out')
  node1.setPosition(100, 100)

// 4) create another default node
  const node2 = new storm.DefaultNodeModel('Node 2', 'rgb(192,255,0)')
  const port2 = node2.addInPort('In')
  node2.setPosition(400, 100)

// 5) link the ports
  const link1 = port1.link(port2)

// 6) add the models to the root graph
  model.addAll(node1, node2, link1)

// 7) load model into engine
  engine.setDiagramModel(model)

  return (
    <storm.DiagramWidget className="srd-demo-canvas" diagramEngine = { engine } / >
  )
}

const container = document.getElementById('root')
const renderApp = () => ReactDOM.render(<App />, container)

renderApp()

/*if ((module as any).hot) {
  (module as any).hot.accept(renderApp)
}*/
