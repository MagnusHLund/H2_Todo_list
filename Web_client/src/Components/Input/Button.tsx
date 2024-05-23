import StandardInputProps from './StandardInputProps'
import './Button.scss'

interface ButtonProps extends StandardInputProps {
  text?: string
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  text = '',
  className = '',
  onclick,
}) => {
  return (
    <button className={`button ${className}`} onClick={onclick}>
      {text}
    </button>
  )
}

export default Button
