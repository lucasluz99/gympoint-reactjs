import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-header.png';
import { Container, Logo, Menu, MenuItem, Logout } from './styles';

function Header() {
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
        <span>Sair da aplicação</span>
      </Logout>
    </Container>
  );
}

export default Header;
