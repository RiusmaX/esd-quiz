import '../styles/HeaderStyle.css'

function Header (props) {
  return (
    <div>
      <div className={`leheader ${!props.name ? 'center' : null}`}>
        <div className='divlogo'>
          <img className='logo' src='/logo.png' alt='logo-esp' />
        </div>
      </div>

      <div className='traitheader' />
    </div>
  )
}
export default Header
