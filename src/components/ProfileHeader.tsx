import React from 'react';
import styled from 'styled-components';
import type { ProfileData } from '../types';

const HeaderContainer = styled.div<{ bgColor: string }>`
  text-align: center;
  padding: 2rem 1rem;
  background: ${props => props.bgColor || 'transparent'};
  border-radius: 16px;
  margin-bottom: 2rem;
`;

const AvatarContainer = styled.div<{ primary: string }>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  border: 4px solid ${props => props.primary};
  overflow: hidden;
  background: ${props => props.primary}20;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 600;
  color: ${props => props.primary};
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Name = styled.h1<{ color: string }>`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${props => props.color};
  margin: 0.5rem 0;
`;

const Title = styled.p<{ color: string }>`
  font-size: 1rem;
  color: ${props => props.color};
  opacity: 0.8;
  margin: 0.25rem 0;
`;

const Bio = styled.p<{ color: string }>`
  font-size: 0.95rem;
  color: ${props => props.color};
  opacity: 0.7;
  margin-top: 0.5rem;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

interface ProfileHeaderProps {
  profile: ProfileData;
  theme: any;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile, theme }) => {
  const initials = profile.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <HeaderContainer bgColor={theme.background}>
      <AvatarContainer primary={theme.primary}>
        {profile.avatar ? (
          <AvatarImage src={profile.avatar} alt={profile.name} />
        ) : (
          initials
        )}
      </AvatarContainer>
      <Name color={theme.textPrimary}>{profile.name}</Name>
      <Title color={theme.textSecondary}>{profile.title}</Title>
      {profile.bio && <Bio color={theme.textSecondary}>{profile.bio}</Bio>}
      {profile.companyName && (
        <Title color={theme.textSecondary} style={{ marginTop: '0.5rem' }}>
          {profile.companyLogo ? `🏢 ${profile.companyName}` : profile.companyName}
        </Title>
      )}
    </HeaderContainer>
  );
};