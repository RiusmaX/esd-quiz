/* import Header from '../components/Header' */
import '../styles/ResultStyle.css'
import Podium from '../components/Podium'
import TextInput from '../components/TextInput'
import Button from '../components/Button'

function Result () {
  return (
    <div className='Resultcontainer'>
      {/* <Header /> */}
      <p className='blocResult'>
        Resultat
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
          Récupérez votre résultat et toutes les réponses :
        </p>
      </div>

      <TextInput type='text' placeholder='Adresse@mail.com' />
      <Button text='Valider' />

      <div className='divTextNoteApplication'>
        <p className='textNoteApplication'>
          Noter notre application :
        </p>
      </div>

    </div>
  )
}
export default Result

/* function texteScore () {
  return (

  )
}
export {texteScore}

function Score () {
  return (

  )
}
export {Score}

function Classement () {
  return (

  )
}
export {Classement}

function TextClassement () {
  return (

  )
}
export {TextClassement}
<Podium />
function Textfelecitations () {
  return (

  )
}
export{Textfelecitations}
*/
