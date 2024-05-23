import StandardInputProps from './StandardInputProps'
import { ReactNode } from 'react'
import './Button.scss'

interface ButtonProps extends StandardInputProps {
  children?: ReactNode
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  onclick,
}) => {
  return (
    <button className={`button ${className}`} onClick={onclick}>
      {children}
    </button>
  )
}

export default Button
