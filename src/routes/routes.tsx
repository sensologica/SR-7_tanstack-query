import { BrowserRouter, Route, Routes } from 'react-router'
import { Users } from '../pages/Users'
import { UserInfo } from '../components/UserInfo'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          index
          path='/'
          element={<Users />}
        />
        <Route 
          index
          path='/user/:id'
          element={<UserInfo />}
        />
      </Routes>
    </BrowserRouter>
  )
}