import StandardInputProps from './StandardInputProps'
import './TextInput.scss'

interface TextInputProps extends StandardInputProps {
  text?: string
  className?: string
}

const TextInput: React.FC<TextInputProps> = ({
  text = '',
  className = '',
  onChange,
}) => {
  return (
    <textarea className={`text-input ${className}`} onChange={onChange}>
      {text}
    </textarea>
  )
}

export default TextInput
