import React from 'react'

const App = () => {
  return (
    <>
      <div style={{ margin: "1rem" }}>
        <h3>These are the two Microfrontends rendered simultaneously:</h3>
      </div>
      <div style={{ margin: "1rem", padding: "1rem" }}>
        <slot name="mf-1">This is the place for micro frontend 1.</slot>
      </div>
      <div style={{ margin: "1rem", padding: "1rem" }}>
        <slot name="mf-2">This is the place for micro frontend 2.</slot>
      </div>
    </>
  )
}

export default App