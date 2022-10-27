import '../styles/NbrparticipantStyle.css'

function Nbrparticipant (props) {
  return (
    <div className='joueurconnecte'>
      <p><strong>Connectez-vous,</strong></p>
      <p className='textedif'><strong>{props.players}</strong> joueurs déjà en jeu !</p>
    </div>
  )
}

export default Nbrparticipant
