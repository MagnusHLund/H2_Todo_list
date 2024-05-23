import { useNavigate } from 'react-router-dom'
import './TodoListSelector.scss'
import Button from '../Input/Button'

interface TodoListSelectorProps {
  listName: string
  className?: string
}

const TodoListSelector: React.FC<TodoListSelectorProps> = ({
  listName,
  className = '',
}) => {
  const navigate = useNavigate()
  return (
    <Button
      className={`todo-list-selector ${className}`}
      onclick={() => {
        navigate(`/list?name=${listName}`)
      }}
    >
      <h1 className="todo-list-selector__title">{listName}</h1>
    </Button>
  )
}

export default TodoListSelector
