import { NavLink } from 'react-router-dom';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Nav() {
  return (
    <div className='nav flex space-btw'>
      <ul className='flex'>
        <NavLink activeClassName='active' exact to='/'>
          <li className='popular'>Popular</li>
        </NavLink>
        <NavLink to='/battle'>
          <li className='battle'>Battle</li>
        </NavLink>
      </ul>
      <div>{<FontAwesomeIcon icon={faLightbulb} />}</div>
    </div>
  );
}

export default Nav;
