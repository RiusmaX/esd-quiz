import '../styles/NbrparticipantStyle.css'

function Nbrparticipant (props) {
  return (
    <div className='joueurconnecte'>
      <p>Connectez-vous, <strong>{props.players}</strong> joueurs déjà en jeu !</p>
    </div>
  )
}

export default Nbrparticipant
