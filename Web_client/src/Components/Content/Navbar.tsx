import './Navbar.scss'
import Button from '../Input/Button'
import { useNavigate } from 'react-router-dom'
import TextInput from '../Input/TextInput'
import Image from './Image'

const Navbar: React.FC = () => {
  const navigate = useNavigate()
  const currentPage = window.location.toString()

  const addNew = () => {
    if (currentPage.includes('/home')) {
      // TODO: If on the home page, add new list and go to the new list page
    } else {
      // TODO: If on a todo list page, add a new card to that page. It has to be added to the top and be within the "todo" column.
    }
  }

  const changeListName = () => {
    /**  TODO:
     * Get current list, based on the List ID
     * Change the list name, within the json object.
     * */
  }

  return (
    <div className="navbar">
      <Button
        onclick={() => navigate('/home')}
        className="navbar__button"
        transparent={true}
      >
        <Image
          src="/Firello icon.png"
          alt="Firello icon"
          className="navbar__image"
        />
      </Button>
      <Button className="navbar__button" onclick={addNew}>
        +
      </Button>
      {currentPage.includes('/list') && (
        <TextInput
          multiLine={false}
          placeholder="List title"
          onChange={changeListName}
        />
      )}
    </div>
  )
}

export default Navbar
