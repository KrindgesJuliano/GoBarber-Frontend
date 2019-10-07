import React from 'react';
import { Link } from 'react-router-dom';

import Notification from '~/components/Notification';

import { Container, Content, Profile } from './styles';
import logoPurple from '~/assets/logo_purple.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logoPurple} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notification />
          <Profile>
            <div>
              <strong>Juliano Krindges</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Juliano Krindges"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
