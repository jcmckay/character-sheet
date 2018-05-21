import React from 'react'
import { connect } from 'react-redux'
import SavingThrow from '../components/SavingThrow'
import { modifierHelper } from '../helpers/modifierHelper'

const SavingThrows = ({ attributes, proficiencyBonus }) => {

  return (
    <div className="saving-throws">
      <h2>Saving Throws</h2>
      {
        attributes.map( (attr, index) => {
          let modifier = modifierHelper(attr.score)
          return (
            <SavingThrow
              key={index}
              attribute={attr}
              modifier={modifier}
              proficiencyBonus={proficiencyBonus}
            />
          )
        })
      }
    </div>
  )
}

const mapStateToProps = state => ({
  attributes: state.attributes,
  proficiencyBonus: state.proficiencyBonus
})

export default connect(mapStateToProps)(SavingThrows)