import './App.css'
import Header from './Header.jsx'


import Home from './Home.jsx'

function App() {
  let Component
  switch (window.location.pathname){
    case: "/":
    Component = Home
    case: "/about":
    Component = 
    case: "/create":
    Component
  }



  return (
    <>
      <Header></Header>
    </>
  )
}

export default App
