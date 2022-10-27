import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { createWord } from '../services/Api'

import '../styles/InsertmotStyle.css'
// import { createMot } from '../services/Api'

function Insertmot (props) {
  const [mot, setMot] = useState('')
  const navigate = useNavigate()

  const handleClick = async () => {
    const result = await createWord(mot)
    if (result && result.data) {
      // navigate('/result')
    }
  }

  return (
    <div>
      <h2 className='soustitrenuage'> Dernière question </h2>
      <h1 className='titrenuage'>Mettez 1 mot qui caractérise pour vous le mieux l'ESD et ESP</h1>
      <TextInput
        type='text'
        placeholder='Votre mot'
        onChange={(e) => setMot(e.target.value)}
        value={mot}
      />
      <div className='buttonmot'>
        <Button onClick={handleClick} text='Valider' />
      </div>
    </div>

  )
}

export default Insertmot
