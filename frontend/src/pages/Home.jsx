import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'

import '../styles/HomeStyle.css'

function Home () {
  return (
    <div className='home'>
      <Header />
      <h1>
        Bienvenue sur le quiz
        de l’inauguration
        de l’ESP-ESD
      </h1>
      <TextInput type='text' placeholder='Votre nom' />
      <p>
        Vous allez participer à un quiz interactif.
        <span>
          Pour chaque question, un indice musical sera diffusé dans la salle 🎶.
        </span>
        <span>
          Ouvrez bien vos oreilles...
        </span>
      </p>
      <Button text="C'est parti" />
    </div>
  )
}

export default Home
