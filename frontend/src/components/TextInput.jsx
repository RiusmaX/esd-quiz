import '../styles/TextInputStyle.css'

/**
 * By Malo
 * @param {*} props
 * @returns
 */
function TextInput (props) {
  return (
    <div>
      <input {...props} />
      {props.text}
    </div>
  )
}

export default TextInput
