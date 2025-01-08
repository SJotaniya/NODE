import React from 'react'
import Home from './Components/Home'
import { Provider } from 'react-redux'
import { store } from './Components/Store'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  )
}
