import { useState, useEffect } from 'react'
import ReactWordcloud from 'react-wordcloud'
import Header from '../components/Header'
import { getWords } from '../services/Api'

import '../styles/NuagedemotsStyle.css'

const _words = [
  {
    text: 'told',
    value: 20
  },
  {
    text: 'mistake',
    value: 40
  },
  {
    text: 'mistake',
    value: 60
  }
]

const options = {
  colors: ['#fff', '#00C4B3', '#FAE100'],
  enableTooltip: true,
  deterministic: false,
  fontFamily: 'bahnschrift',
  fontSizes: [30, 60],
  fontStyle: 'normal',
  fontWeight: 'normal',
  padding: 1,
  rotations: 3,
  rotationAngles: [0, 0],
  scale: 'sqrt',
  spiral: 'archimedean',
  transitionDuration: 1000
}

function Nuagedemots () {
  const [words, setWords] = useState([])
  useEffect(() => {
    const getData = async () => {
      const data = await getWords()
      if (data && data.data) {
        const _words = data.data.map((w) => {
          return {
            text: w.attributes.word.toUpperCase(),
            value: Math.floor(Math.random() * (60 - 30 + 1)) + 30
          }
        })
        setWords(_words)
      }
    }
    getData()
    const interval = setInterval(() => {
      getData()
    }, 5000)

    return function cleanup () {
      clearInterval(interval)
    }
  }, [])
  return (
    <div className='ndm'>
      <div style={{ height: 500, width: 1000, marginTop: 50 }}>
        <ReactWordcloud words={words} options={options} />
      </div>
    </div>

  )
}

export default Nuagedemots
