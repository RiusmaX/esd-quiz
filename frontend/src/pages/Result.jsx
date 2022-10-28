import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'

import Podium from '../components/Podium'
import TextInput from '../components/TextInput'
import Button from '../components/Button'

import '../styles/ResultStyle.css'

function Result () {
  const { width, height } = useWindowSize()

  return (
    <div className='Resultcontainer'>
      <Confetti
        width={width}
        height={height}
      />
      <h1 className='blocResult'>
        Resultats
      </h1>
      <div className='blocDivScore'>
        <div className='divScore'>
          <p className='score'>
            SCORE
          </p>
        </div>
      </div>

      <div className='divTextClassement'>
        <p className='textClassement'>
          Vous avez obtenu <strong>X</strong> points !
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

      <Podium />

      <div className='blocDivFelicitation'>
        <div className='divFelicitation'>
          <p className='Felicitation'>
            Félicitations !
          </p>
        </div>
      </div>

      <div className='divTextReponse'>
        <p className='textReponse'>
          Pour plus d'informations :
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
