import { useState } from 'react'

import './App.css'
import Navvar from './components/header/Navvar'
import Banner from './components/banner/Banner'

function App() {
  

  return (
    <div className='max-w-screen-lg mx-auto'>
     <Navvar> </Navvar>
      <Banner></Banner>
      
    </div>
  )
}

export default App
