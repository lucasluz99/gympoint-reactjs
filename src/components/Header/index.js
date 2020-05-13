import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import logo from '../../assets/images/logo-header.png';
import { signOut } from '../../store/modules/auth/actions';
import { Container, Logo, Menu, MenuItem, Logout } from './styles';

function Header() {
  const dispatch = useDispatch();

  const [items, setItems] = useState([
    { text: 'Alunos', to: '/students' },
    { text: 'Planos', to: '/plans' },
    { text: 'Matrículas', to: '/registrations' },
    { text: 'Pedidos de Auxílio', to: '/help-orders' },
  ]);
  const [active, setActive] = useState(0);
  const name = useSelector((state) => state.auth.admin.name);
  return (
    <Container>
      <div>
        <Logo to="/dashboard">
          <img src={logo} alt="Gympoint" />
        </Logo>
        <Menu>
          {items.map((item, i) => (
            <MenuItem
              to={item.to}
              onClick={() => setActive(i)}
              active={i === active}
            >
              {item.text}
            </MenuItem>
          ))}
        </Menu>
      </div>

      <Logout>
        <p>{name}</p>
        <button type="button" onClick={() => dispatch(signOut())}>
          Sair da aplicação
        </button>
      </Logout>
    </Container>
  );
}

export default Header;
