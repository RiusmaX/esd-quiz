import '../styles/ProjectionStyle.css'
import { useEffect, useState } from 'react'
import Leftside from '../components/Leftside'
import Lienconnexion from '../components/Lienconnexion'
import Nbrparticipant from '../components/Nbrparticipant'
import NumberQuestion from '../components/NumberQuestion'
import TextQuestion from '../components/TextQuestion'
import Podium from '../components/Podium'
import { getPlayers } from '../services/Api'

function Projection () {
  const [players, setPlayers] = useState(0)

  useEffect(() => {
    const getData = async () => {
      const data = await getPlayers()
      if (data && data.data) {
        setPlayers(data.meta.pagination.total)
      }
    }
    getData()
  }, [])

  return (
    <div className='container'>
      <div className='row'>
        <div className='col leftside'>
          <Leftside />
          <Lienconnexion />
          <Nbrparticipant players={players} />
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
