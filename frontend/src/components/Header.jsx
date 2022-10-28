import '../styles/HeaderStyle.css'

function Header (props) {
  return (
    <div>
      <div className={`leheader ${!props.name ? 'center' : null}`}>
        <div className='divlogo'>
          <img className='logo' src='/CROSS_Logo_esdESP_White.png' alt='logo-esp' />
        </div>
        <div className='divlogo'>
          <img className='nextGen' src='/Nantes_BNG_white.png' alt='logo-new-gen' />
        </div>
      </div>

      <div className='traitheader' />
    </div>
  )
}
export default Header
