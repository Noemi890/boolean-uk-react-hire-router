import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import HireForm from "./components/HireForm"

function PersonProfile(props) {
  const [person, setPerson] = useState()

  const {hiredPeople, setHiredPeople} = props

  const location = useLocation()

  useEffect(() => {
    console.log(location.state)
    setPerson(location.state)
  },[])

  return (
    <>
      { (person) && (
        <article>
          <h2>
            {person.name.first} {person.name.last}
          </h2>
            <HireForm person={person} setPerson={setPerson} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>
        </article>
      )}
    </>
  )
}

export default PersonProfile
