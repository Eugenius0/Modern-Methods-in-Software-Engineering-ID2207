import { useContext } from 'react';
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../../App';

export default function Navbar() {
  const { navMenu, navLogo, navLink, role } = styles

  const { userRole } = useContext(UserContext);

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
      <div className={role}>
        User Role: {userRole}
      </div>
    </ul>
  )
}