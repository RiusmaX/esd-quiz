import '../styles/HeaderStyle.css'

function Header (props) {
  return (
    <div>
      <div className={`leheader ${!props.name ? 'center' : null}`}>
        <div className='divlogo'>
          <img className='logo' src='/CROSS_Logo_esdESP_White.png' alt='image' />
        </div>
        {
          props.name
            ? <h2 className='textebienvenue'>Bienvenue 'name'</h2>
            : null
        }
      </div>

      <div className='traitheader' />
    </div>
  )
}
export default Header
