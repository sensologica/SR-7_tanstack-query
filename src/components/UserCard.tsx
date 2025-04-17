import { Link } from 'react-router'

interface UserProps {
  id: number
  name: string
  email: string
  company: string
}

export const UserCard = ({ id, name, email, company }: UserProps) => {
  return (
    <Link to={`/user/${id}`}>
      <div>
        <h2>{name}</h2>
        <div>{email}</div>
        <div>{company}</div>
      </div>
    </Link>
  )
}