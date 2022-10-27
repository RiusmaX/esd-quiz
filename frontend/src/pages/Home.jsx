import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TextInput from '../components/TextInput'
import Button from '../components/Button'

import '../styles/HomeStyle.css'
import { createPlayer } from '../services/Api'

function Home () {
  const [name, setName] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const player = JSON.parse(window.localStorage.getItem('PLAYER'))
    if (player) {
      navigate('/quiz')
    }
  }, [])

  const handleClick = async () => {
    const player = await createPlayer(name)
    if (player && player.data) {
      window.localStorage.setItem('PLAYER', JSON.stringify(player.data))
      navigate('/quiz')
    }
  }

  return (
    <div className='home'>
      <h1>
        Bienvenue sur le quiz
        de l’inauguration
        de l’ESP-ESD
      </h1>
      <TextInput
        type='text'
        placeholder='Votre prénom/nom'
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <p>
        Vous allez participer à un quiz interactif.
        <span>
          Pour chaque question, un indice musical sera diffusé dans la salle 🎶.
        </span>
        <span>
          Ouvrez bien vos oreilles...
        </span>
      </p>
      <Button disabled={name.length < 3} onClick={handleClick} text="C'est parti" />
    </div>
  )
}

export default Home
