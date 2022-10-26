import '../styles/ProjectionStyle.css'
import Leftside from '../components/Leftside'
import Lienconnexion from '../components/Lienconnexion'
import Nbrparticipant from '../components/Nbrparticipant'
import NumberQuestion from '../components/NumberQuestion'
import TextQuestion from '../components/TextQuestion'
import Podium from '../components/Podium'
import Header from '../components/Header'

function Projection () {
  return (
    <div className='container'>
      <Header />
      <div className='row'>

        <div className='col leftside'>
          <Leftside />
          <Lienconnexion />
          <Nbrparticipant />
        </div>

        <div className='col centerside'> </div>

        <div className='col rightside'>
          <div className='question-project'>
            <NumberQuestion number='Question 1' />
            <TextQuestion question='Dans quelle ville l’ESP et l’ESD ne sont pas présente ? ' />
          </div>
          <h4 className='classement'>Classement</h4>
          <div className='border'> </div>
          <Podium />
        </div>

      </div>

    </div>
  )
}

export default Projection
/*  */
