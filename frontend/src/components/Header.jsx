import '../styles/HeaderStyle.css'

function Header (props) {
  return (
    <div>
      <div className={`leheader ${!props.name ? 'center' : null}`}>
        <div className='divlogo'>
          <img className='logo' src='/CROSS_Logo_esdESP_White.png' alt='image' />
        </div>
        <div className='divlogo'>
          <img className='nextGen' src='/Nantes_BNG_white.png' alt='image' />
        </div>
      </div>

      <div className='traitheader' />
    </div>
  )
}
export default Header
