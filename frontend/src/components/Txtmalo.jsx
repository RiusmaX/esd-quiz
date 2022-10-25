import '../styles/TxtmaloStyle.css'

function Txtmalo (props) {
  return (
    <div>

      <input type='email' placeholder='Esd@esp.com' />
      {props.text}
    </div>
  )
}

export default Txtmalo
