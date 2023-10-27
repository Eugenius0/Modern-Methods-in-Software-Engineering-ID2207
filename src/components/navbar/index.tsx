import styles from './styles.module.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const { navMenu, navLogo, navLink } = styles

  return (
    <ul className={navMenu}>
      <Link to='/' className={navLogo}>
        SEP
      </Link>
      <Link to='/eventRequest' className={navLink}>
        <li>Event Requests</li>
      </Link>
      <Link to='/taskAssigment' className={navLink}>
        <li>Task Assignment</li>
      </Link>
      <Link to='/staffRecruitment' className={navLink}>
        <li>Staff Recruitment</li>
      </Link>
      <Link to='/financialRequest' className={navLink}>
        <li>Financial Requests</li>
      </Link>
    </ul>
  )
}