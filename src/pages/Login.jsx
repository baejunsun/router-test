import React from 'react'


export default function Login({location, history, match}) {
  return (
    <div>
      <h1>로그인</h1>
      <button onClick={click}>로그인</button>
    </div>
}

function click() {
  setTimeout(() => {
    console.log('이동')
    // location.href='/'
    history.pushState("/");
  }, 1000)
}