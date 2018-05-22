import React from 'react'
import SetAttributes from '../containers/SetAttributes'
import SavingThrows from '../containers/SavingThrows'
import Skills from '../containers/Skills'
import Classes from '../containers/Classes'

const App = () => (
  <div>
    <h1>Rodney 'lil Rod'</h1>
    <Classes />
    <div className="character-sheet">
      <SetAttributes />
      <div>
        <SavingThrows />
        <Skills />
      </div>
    </div>
  </div>
)

export default App