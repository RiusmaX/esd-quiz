import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'

import Podium from '../components/Podium'
import TextInput from '../components/TextInput'
import Button from '../components/Button'

import '../styles/ResultStyle.css'
import { useEffect, useState } from 'react'
import { getResults, getClassement, updatePlayer } from '../services/Api'

function Result () {
  const [total, setTotal] = useState(0)
  const [email, setEmail] = useState('')

  const [classement, setClassement] = useState([])
  const { width } = useWindowSize()

  useEffect(() => {
    const player = JSON.parse(window.localStorage.getItem('PLAYER'))
    const _getClassement = async () => {
      const result = await getClassement()
      setClassement(result.data)
    }
    _getClassement()
    const getData = async () => {
      const result = await getResults(player.id)
      setTotal(result?.attributes?.total)
      console.log(result)
    }
    getData()
  }, [])

  const handleClickEmail = async () => {
    const player = JSON.parse(window.localStorage.getItem('PLAYER'))

    await updatePlayer(player.id, email)
  }

  return (
    <div className='Resultcontainer'>
      <Confetti
        width={width}
        height={1110}
      />
      <h1 className='blocResult'>
        Resultats
      </h1>

      <div className='blocDivFelicitation'>
        <div className='divFelicitation'>
          <p className='Felicitation'>
            Félicitations !
          </p>
        </div>
      </div>

      <div className='blocDivScore'>
        <div className='divScore'>
          <p className='score'>
            SCORE
          </p>
        </div>
      </div>

      <div className='divTextClassement'>
        <p className='textClassement'>
          Vous avez obtenu <strong>{total}</strong> points !
        </p>
      </div>

      <div className='blocDivClassement'>
        <div className='divClassement'>
          <p className='Classement'>
            CLASSEMENT
          </p>
        </div>
      </div>

      {/* <div className='divTextGagnant'>
        <p className='textGagnant'>
          Et nos gagnants sont ....
        </p>
      </div> */}
      <div className='podium'>
        <Podium classement={classement} />
      </div>

      <div className='divTextReponse'>
        <p className='textReponse'>
          Pour plus d'informations :
        </p>
      </div>

      <TextInput
        type='email'
        placeholder='Adresse@mail.com'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className='separatorEmpty' />
      <Button text='Valider' onClick={handleClickEmail} />

      {/* <div className='divTextNoteApplication'>
        <p className='textNoteApplication'>
          Noter notre application :
        </p>
      </div> */}

    </div>
  )
}
export default Result
