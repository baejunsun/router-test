import React from 'react';

export default function About(props) {
  const name = new URLSearchParams(props.location.search).get('name')
  if (name === null) {
    return (
      <div>
        <h1>About</h1>
      </div>
    )
  }
  return (
    <div>
      <h1>About : {name}</h1>
    </div>
  )
}