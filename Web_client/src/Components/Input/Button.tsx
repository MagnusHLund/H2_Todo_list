import StandardInputProps from './StandardInputProps'
import { ReactNode } from 'react'
import cn from 'classNames'
import './Button.scss'

interface ButtonProps extends StandardInputProps {
  children?: ReactNode
  className?: string
  transparent?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  transparent = false,
  cursor = 'pointer',
  onclick,
}) => {
  return (
    <button
      className={cn(`button ${className}`, { transparent: transparent })}
      onClick={onclick}
      style={{ cursor: cursor }}
    >
      {children}
    </button>
  )
}

export default Button
