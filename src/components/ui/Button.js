import PropTypes from 'prop-types'

const Button = ({ onClick, children, className }) => (
  <button
    className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Button
