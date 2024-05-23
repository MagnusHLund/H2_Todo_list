import { useNavigate } from 'react-router-dom'
import './TodoListOption.scss'
import Button from '../Input/Button'

interface TodoListOptionProps {
  listName: string
  className?: string
}

const TodoListOption: React.FC<TodoListOptionProps> = ({
  listName,
  className = '',
}) => {
  const navigate = useNavigate()
  return (
    <Button
      className={`todo-list-option ${className}`}
      onclick={() => {
        navigate(`/list?name=${listName}`)
      }}
    >
      <h1 className="todo-list-option__title">{listName}</h1>
    </Button>
  )
}

export default TodoListOption
