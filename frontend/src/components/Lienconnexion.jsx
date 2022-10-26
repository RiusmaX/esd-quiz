import '../styles/LienconnexionStyle.css'

function Lienconnexion (props) {
  return (
    <div className='blockyellow'>
      <a href={props.lien} className='urlsite'>{props.lien}</a>
    </div>
  )
}

export default Lienconnexion
