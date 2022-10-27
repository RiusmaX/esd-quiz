import QRCode from 'react-qr-code'
import '../styles/LeftsideStyle.css'

function Leftside (props) {
  return (
    <div className='topleft'>

      <div className='sizecode'>
        <QRCode
          size={256}
          style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
          viewBox='0 0 256 256'
          value='https://esd-quiz.sergent.tech'
        />
      </div>

      <p className='connexiontext'>
        Lien pour se connecter :
      </p>

    </div>
  )
}

export default Leftside
