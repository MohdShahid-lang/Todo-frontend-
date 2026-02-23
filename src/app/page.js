import React from 'react';
import ProtectedRoutes from './components/ProtectedRoutes';
import Todo from './components/Todo';


function page() {
  return (
    <ProtectedRoutes>
    <Todo />
    </ProtectedRoutes>
  )
}

export default page