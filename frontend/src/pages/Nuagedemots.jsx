import ReactWordcloud from 'react-wordcloud'
import Header from '../components/Header'

import '../styles/NuagedemotsStyle.css'

const words = [
  {
    text: 'told',
    value: 20
  },
  {
    text: 'mistake',
    value: 20
  },
  {
    text: 'thought',
    value: 20
  },
  {
    text: 'bad',
    value: 20
  },
  {
    text: 'bad',
    value: 20
  },
  {
    text: 'bad',
    value: 20
  },
  {
    text: 'bad',
    value: 20
  },
  {
    text: 'bad',
    value: 20
  },
  {
    text: 'bad',
    value: 20
  },
  {
    text: 'bad',
    value: 20
  },
  {
    text: 'bad',
    value: 20
  },
  {
    text: 'bad',
    value: 20
  },
  {
    text: 'bad',
    value: 20
  },
  {
    text: 'bad',
    value: 20
  },
  {
    text: 'bad',
    value: 20
  },
  {
    text: 'bad',
    value: 20
  },
  {
    text: 'bad',
    value: 20
  },
  {
    text: 'Antonin',
    value: 20
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
  return (
    <div className='ndm'>
      <Header />
      <div style={{ height: 500, width: 1000, marginTop: 50 }}>
        <ReactWordcloud words={words} options={options} />
      </div>
    </div>

  )
}

export default Nuagedemots
