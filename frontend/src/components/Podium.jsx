// import Loader from './Loader'
import '../styles/PodiumStyle.css'

function Podium (props) {
  if (!props.classement || !props.classement[0] || !props.classement[1] || !props.classement[2]) {
    return null
  }
  return (
    <div id='podium' className='container'>
      <div className='classement'>
        <div className='podium'>
          <div className='card'>
            <h4>{props.classement[1].attributes.player.data.attributes.name}</h4>
            <div className='col col1'>
              <p>2</p>
            </div>
          </div>

          <div className='card'>
            <h4>{props.classement[0].attributes.player.data.attributes.name}</h4>
            <div className='col col2'>
              <p>1</p>
            </div>
          </div>

          <div className='card'>
            <h4>{props.classement[2].attributes.player.data.attributes.name}</h4>
            <div className='col col3'>
              <p>3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Podium
