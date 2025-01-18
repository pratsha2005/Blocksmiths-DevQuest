import React from 'react'
import SearchBar from './searchBar'
import PatientCard from './patientCard'
import { PatientRecords } from './patientRecords'

function Patients() {
  return (
    <div>
      <SearchBar />
      <PatientCard />

    </div>
  )
}

export default Patients
