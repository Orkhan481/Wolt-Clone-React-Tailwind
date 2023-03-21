import React from 'react'
import Spinner from 'reactjs-simple-spinner'

export default function Loader() {
  return (
    <div className="App">
              <Spinner />
              <hr />
              <Spinner message="Loading..." />
              <hr />
              <Spinner size="tiny" message="Loading..." />
              <hr />
              <Spinner size="small" message="Loading..." />
              <hr />
              <Spinner size="medium" message="Loading..." />
              <hr />
              <Spinner size="large" message="Loading..." />
              <hr />
              <Spinner size="big" message="Loading..." />
              <hr />
              <Spinner size="huge" message="Loading..." />
              <hr />
              <Spinner size="massive" message="Loading..." />
              <hr />
              <Spinner size={55} />
              <hr />
              <Spinner size={88} />
              <hr />
              <Spinner lineSize={7} />
              <hr />
              <Spinner lineSize={12} />
              <hr />
              <Spinner size={55} lineSize={7} />
              <hr />
              <Spinner size={88} lineSize={12} />
              <hr />
              <Spinner lineFgColor="#009900" />
              <hr />
              <Spinner line-bg-color="#555555" />
              <hr />
              <Spinner lineFgColor="#009900" lineBgColor="#555555" />
              <hr />
              <Spinner speed="0.4" />
              <hr />
              <Spinner speed={2} />
              <hr />
              <Spinner speed={6} />
              <hr />
              <Spinner spacing={55} message="I'm 55px below the Spinner" />
              <hr />
              <Spinner fontSize={20} message="I'm a 20px font size" />
              <hr />
          </div>
  )
}
