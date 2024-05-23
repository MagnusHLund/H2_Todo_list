import StandardInputProps from './StandardInputProps'
import './TextInput.scss'

interface TextInputProps extends StandardInputProps {
  placeholder?: string
  className?: string
  multiLine?: boolean
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder = '',
  className = '',
  multiLine = false,
  onChange,
}) => {
  return multiLine ? (
    <textarea
      className={`text-input__multi ${className}`}
      placeholder={placeholder}
      onChange={onChange}
    />
  ) : (
    <input
      type="text"
      className={`text-input__single ${className}`}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default TextInput
