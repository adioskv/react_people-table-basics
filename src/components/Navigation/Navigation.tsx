import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

export const Navigation = () => (
  <div className="container">
    <div className="navbar-brand">
      <NavLink
        className={
          ({ isActive }) => classNames(
            'navbar-item',
            { 'has-background-grey-lighter': isActive },
          )
        }
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={
          ({ isActive }) => classNames(
            'navbar-item',
            { 'has-background-grey-lighter': isActive },
          )
        }
        to="/people"
      >
        People
      </NavLink>
    </div>
  </div>
);
