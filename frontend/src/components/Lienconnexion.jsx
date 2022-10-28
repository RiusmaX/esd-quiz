import '../styles/LienconnexionStyle.css'

function Lienconnexion (props) {
  return (
    <>
      <p className='connexiontext'>
        Lien pour se connecter :
      </p>

      <div className='blockyellow'>
        <a href={props.lien} className='urlsite'>{props.lien}</a>
      </div>
    </>
  )
}

export default Lienconnexion
