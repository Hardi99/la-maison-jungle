import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Cart from './components/Cart'
import ShoppingList from './components/ShoppingList'
import { useState } from 'react'

function App() {
  const [cart, updateCart] = useState([])

  return (
    <>
      <Banner />
      <div className='lmj-layout-inner'>
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </>
  )
}

export default App
