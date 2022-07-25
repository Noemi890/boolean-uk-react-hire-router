import { useEffect, useState } from "react"
import { Routes, Route, Link } from "react-router-dom"
import PeopleList from "./components/PeopleList"

const URL = 'https://randomuser.me/api/?results=50'

function Dashboard(props) {
  const { hiredPeople } = props

  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch(URL)
    .then(resp => resp.json())
    .then(resp => setPeople(resp.results))
  },[])

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <Routes>
          <Route
          path="*"
          element={
          <PeopleList people={people} />}
          />
        </Routes>
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  )
}

export default Dashboard
