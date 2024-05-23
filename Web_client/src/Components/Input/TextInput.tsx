import StandardInputProps from './StandardInputProps'
import './TextInput.scss'

interface TextInputProps extends StandardInputProps {
  text?: string
  className?: string
  multiLine?: boolean
}

const TextInput: React.FC<TextInputProps> = ({
  text = '',
  className = '',
  multiLine = false,
  onChange,
}) => {
  return multiLine ? (
    <textarea
      className={`text-input__multi ${className}`}
      value={text}
      onChange={onChange}
    />
  ) : (
    <input
      type="text"
      className={`text-input__single ${className}`}
      placeholder="title"
      onChange={onChange}
    />
  )
}

export default TextInput
