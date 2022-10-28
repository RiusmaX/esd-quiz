import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'

import '../styles/ResultStyle.css'
import Podium from '../components/Podium'
import TextInput from '../components/TextInput'
import Button from '../components/Button'

function Result () {
  const { width, height } = useWindowSize()

  return (
    <div className='Resultcontainer'>
      <Confetti
        width={width}
        height={height}
      />
      <p className='blocResult'>
        Resultats
      </p>
      <div className='blocDivScore'>
        <div className='divScore'>
          <p className='score'>
            SCORE
          </p>
        </div>
      </div>

      <div className='divTextClassement'>
        <p className='textClassement'>
          Vous avez obtenu X sur 15 !
        </p>
      </div>

      <div className='blocDivClassement'>
        <div className='divClassement'>
          <p className='Classement'>
            CLASSEMENT
          </p>
        </div>
      </div>

      <div className='divTextGagnant'>
        <p className='textGagnant'>
          Et nos gagnants sont ....
        </p>
      </div>

      <Podium />

      <div className='blocDivFelicitation'>
        <div className='divFelicitation'>
          <p className='Felicitation'>
            Félicitations à tous !
          </p>
        </div>
      </div>

      <div className='divTextReponse'>
        <p className='textReponse'>
          Retrouver vos résultats et toutes les réponses :
        </p>
      </div>

      <TextInput type='text' placeholder='Adresse@mail.com' />
      <Button text='Valider' />

      {/* <div className='divTextNoteApplication'>
        <p className='textNoteApplication'>
          Noter notre application :
        </p>
      </div> */}

    </div>
  )
}
export default Result
