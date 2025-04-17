import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router'
import { User } from '../types/types'

export const UserInfo = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const { isLoading, error, data } = useQuery({
    queryKey: ['user'],
    queryFn: (): Promise<User> => 
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.data)
  })

  if (isLoading) return 'Загрузка...'
  if (error) return 'Произошла ошибка: ' + error.message
  
  return (
    <>
      <div>{data?.name}</div>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  )
}