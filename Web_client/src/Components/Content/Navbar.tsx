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
      console.log('Add new list, go to that list')
    } else {
      console.log('Add new to-do item')
    }
  }

  return (
    <div className="navbar">
      <Button onclick={() => navigate('/home')}>
        <Image src="/Firello icon.png" alt="Firello icon" />
      </Button>
      <Button className="navbar__button" onclick={addNew}>
        +
      </Button>
      {currentPage.includes('/list') && <TextInput></TextInput>}
    </div>
  )
}

export default Navbar
