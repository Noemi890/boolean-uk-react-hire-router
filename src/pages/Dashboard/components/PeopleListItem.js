import { Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"
import PersonProfile from "../../PersonProfile"

function PeopleListItem(props) {
  const { person } = props
   console.log('my person', person)
  return (
    <>
      <li>
        <Link to={`/profile/${person.id.value}`} state={person} >
          <h3>
            {person.name.first} {person.name.last}
          </h3>
          {person.wage && <p>Wage: £{person.wage}</p>}
        </Link>
      </li>
    </>
  )
}

export default PeopleListItem
