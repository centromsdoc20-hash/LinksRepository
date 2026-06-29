import React from 'react';
import styled from 'styled-components';
import type { SocialLink } from '../types';
import { 
  FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube, 
  FaFacebook, FaGithub, FaWhatsapp 
} from 'react-icons/fa';

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 0;
  flex-wrap: wrap;
`;

const SocialIcon = styled.a<{ primary: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${props => props.primary}15;
  color: ${props => props.primary};
  border: 2px solid ${props => props.primary}30;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: translateY(-3px);
    background: ${props => props.primary};
    color: white;
    border-color: ${props => props.primary};
    box-shadow: 0 8px 25px ${props => props.primary}40;
  }

  &:active {
    transform: scale(0.95);
  }
`;

interface SocialLinksProps {
  links: SocialLink[];
  primaryColor: string;
}

const platformIcons: Record<string, React.ReactNode> = {
  instagram: <FaInstagram size={20} />,
  linkedin: <FaLinkedinIn size={20} />,
  twitter: <FaTwitter size={20} />,
  youtube: <FaYoutube size={20} />,
  facebook: <FaFacebook size={20} />,
  github: <FaGithub size={20} />,
  whatsapp: <FaWhatsapp size={20} />
};

export const SocialLinks: React.FC<SocialLinksProps> = ({ links, primaryColor }) => {
  const activeLinks = links.filter(link => link.enabled);

  if (activeLinks.length === 0) return null;

  return (
    <SocialContainer>
      {activeLinks.map(link => (
        <SocialIcon
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          primary={primaryColor}
        >
          {platformIcons[link.platform] || null}
        </SocialIcon>
      ))}
    </SocialContainer>
  );
};