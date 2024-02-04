import './App.css'
import Header from './Header.jsx'

import Home from './Home.jsx'
import About from './About.jsx'
import Create from './Create.jsx'

function App() {
  let Component
  switch (window.location.pathname){
    case "/":
      Component = <Home></Home>
      break
    case "/about":
      Component = <About></About>
      break
    case "/create":
      Component = <Create></Create>
      break
  }
  return (
    <>
      <Header></Header>
      {Component}
    </>
  )
}

export default App
