import { useState, useEffect } from "react"
import { Routes, Route, Link } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import PersonProfile from "./pages/PersonProfile"
import "./styles.css"

const URL = 'https://randomuser.me/api/?results=50'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch(URL)
    .then(resp => resp.json())
    .then(resp => setPeople(resp.results))
  },[])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <Link to='/'>
              <li>Dashboard</li>
            </Link>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Dashboard people={people} hiredPeople={hiredPeople}/>} />
        <Route path={`/profile/:id`} element={<PersonProfile hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>}/>
      </Routes>
    </>
  )
}
