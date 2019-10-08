import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notification from '~/components/Notification';

import { Container, Content, Profile } from './styles';
import logoPurple from '~/assets/logo_purple.svg';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

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
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src={
                profile.avatar.url ||
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt="Juliano Krindges"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
