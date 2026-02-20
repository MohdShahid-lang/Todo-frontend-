import React from 'react'
import ProtectedRoutes from './components/ProtectedRoutes'

function page() {
  return (
    <ProtectedRoutes>
    <div>page</div>
    </ProtectedRoutes>
  )
}

export default page