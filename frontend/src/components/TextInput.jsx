import '../styles/TextInputStyle.css'

/**
 * By Malo
 * @param {*} props
 * @returns
 */
function TextInput (props) {
  return (
    <div>
      <input type={props.type} placeholder={props.placeholder} />
      {props.text}
    </div>
  )
}

export default TextInput
