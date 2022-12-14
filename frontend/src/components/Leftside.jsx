import QRCode from 'react-qr-code'
import '../styles/LeftsideStyle.css'

function Leftside (props) {
  return (
    <div className='topleft'>
      <div className='white-background'>
        <div className='sizecode'>
          <QRCode
            size={256}
            style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
            viewBox='0 0 256 256'
            value='https://espub-quiz.fr'
          />
        </div>
      </div>

    </div>
  )
}

export default Leftside
