import React from 'react'
import Header from './Header'
import List from './List'
import { db } from './Firebase'

export default function App() {
  console.log(db)
  return (
    <div className="App">
      <Header />
      <List />
    </div>
  )
}
