import { useQuery } from '@tanstack/react-query'
import { UserCard } from '../components/UserCard'
import axios from 'axios'

import type { User as IUser } from '../types/types'

export const Users = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['users'],
    queryFn: (): Promise<IUser[]> => 
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => response.data)
  })

  if (isLoading) return 'Загрузка...'
  if (error) return 'Произошла ошибка: ' + error.message

  return (
    <>
      {
        data && data.map(user => 
          <UserCard
            key={user.name}
            id={user.id}
            name={user.name}
            email={user.email}
            company={user.company.name}
          />
        )
      }
    </>
  )
}