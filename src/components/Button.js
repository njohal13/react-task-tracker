import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {

  return <button 
  onClick={onClick} 
  style={{backgroundColor: color}} 
  className='btn'>{text}</button>
}

//Set the default prop 
Button.defaultProps = {
  color: 'steelblue'
}

//Set the type of prop
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
}
export default Button