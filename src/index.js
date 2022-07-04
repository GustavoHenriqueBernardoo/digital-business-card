import React from 'react'
import ReactDOM from 'react-dom'

// Components
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'

//css
import './index.css'

function App() {
  return (
    <div className='app'>
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))