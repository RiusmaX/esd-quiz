import '../styles/PodiumStyle.css'

function Podium (props) {
  return (
    <div className='container'>
      <div className='classement'>
        <div className='podium'>

          <div className='card'>
            <h4>Patrick Fiori</h4>
            <div className='col col1'>
              <p>2</p>
            </div>
          </div>

          <div className='card'>
            <h4>Patrick Bruel</h4>
            <div className='col col2'>
              <p>1</p>
            </div>
          </div>

          <div className='card'>
            <h4>Patrick Etoile de Mer</h4>
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
