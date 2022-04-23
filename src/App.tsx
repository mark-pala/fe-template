import React, { lazy, Suspense } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import ErrorPage from './ErrorPage'
import Vault from './Vault'

export const home = '/'

function App () {
  return (
    <Suspense fallback={<>fall back</>}>
      <Router>
        <div>vault header</div>
        <Routes>
          <Route path="/" element={<Vault/>} />
          <Route element={<ErrorPage/>} />
        </Routes>
      </Router>
    </Suspense>
  )
}

export default App