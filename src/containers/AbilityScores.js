import React from 'react'
import { connect } from 'react-redux'
import AbilityScore from '../components/AbilityScore'
import { saveStateToFirebase }  from '../database/firebase'
import { modifierHelper } from '../helpers/modifierHelper'

const AbilityScores = ( {abilityScores, race} ) => {

 return (
    <div className="ability-scores">
        <form onSubmit={e => { e.preventDefault() }}>
          {
            abilityScores.map((ability, key) => {
              let score = ability.score + race.ability_bonuses[key]
              let modifier = modifierHelper(score)

              return <AbilityScore
                        key={key}
                        name={ability.name}
                        fullName={ability.full_name}
                        score={score}
                        modifier={modifier}
                      />
            })
          }

          <button onClick={(e) =>  saveStateToFirebase()}>Save State</button>
        </form>
    </div>
  )
}

const mapStateToProps = state => ({
    abilityScores: state.abilityScores,
    race: state.race
})

export default connect(mapStateToProps)(AbilityScores)