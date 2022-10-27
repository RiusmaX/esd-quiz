import '../styles/ProgressBarStyle.css'

function ProgressBar (props) {
  const steps = []
  for (let i = 1; i <= props.length; i++) {
    steps.push(
      <div className={`step ${props.progress >= i && 'selected'}`} />
    )
  }
  return (
    <div className='progress-container'>
      {steps}
    </div>
  )
}

export default ProgressBar
