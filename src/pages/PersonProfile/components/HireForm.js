import { useState } from "react"
import { useNavigate, useParams } from "react-router"

function HireForm(props) {
  const [wage, setWage] = useState(0)

  const {person, setPerson, hiredPeople, setHiredPeople} = props

  const navigate = useNavigate()

  const handleonChange = e => {
    const value = e.target.value
    setWage(value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const personCopy = {...person}
    personCopy.wage = wage
    const found = hiredPeople.find(person => person.id === personCopy.id)
    if (!found) {
    setHiredPeople([...hiredPeople, personCopy])
    navigate('/')
    }
    else navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => handleonChange(e)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm
