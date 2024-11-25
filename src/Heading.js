import React from 'react'

const Heading = ({tittle}) => {
  return (
    <>
        <div
  className="d-flex align-items-center"
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  }}
>
  <div
    style={{
      flexGrow: 1,
      borderTop: "10px double #ff00ff",
      height: "0",
      marginRight: "10px",
    }}
  ></div>
  <h1
    style={{
      textShadow: "1px 1px 2px yellow, 0 0 1em pink, 0 0 0.2em pink",
      textAlign: "center",
      whiteSpace: "nowrap",
      margin: "0",
    }}
  >
    {tittle}
  </h1>
  <div
    style={{
      flexGrow: 1,
      borderTop: "10px double #ff00ff",
      height: "0",
      marginLeft: "10px",
    }}
  ></div>
</div>
    </>
  )
}

export default Heading