import '../styles/HeaderStyle.css'

function Header () {
  return (
    <div>
      <div className='leheader'>
        <div className='divlogo'>
          <img className='logo' src='/CROSS_Logo_esdESP_White.png' alt='image' />
        </div>
        <h2 className='textebienvenue'>Bienvenue 'name'</h2>
      </div>

      <div className='traitheader' />
    </div>
  )
}
export default Header
