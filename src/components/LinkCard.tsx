import React from 'react';
import styled from 'styled-components';
import  type { LinkItem } from '../types';
import { FiExternalLink } from 'react-icons/fi';

const Card = styled.a<{ bgColor?: string; textColor?: string; primary: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  margin: 0.75rem 0;
  background: ${props => props.bgColor || props.primary + '15'};
  color: ${props => props.textColor || props.primary};
  border: 2px solid ${props => props.bgColor || props.primary + '30'};
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    border-color: ${props => props.primary};
  }

  &:active {
    transform: scale(0.98);
  }
`;

const LinkContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
`;

const LinkIcon = styled.span`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;

const LinkInfo = styled.div`
  flex: 1;
`;

const LinkTitle = styled.div<{ textColor?: string }>`
  font-weight: 600;
  font-size: 1rem;
  color: ${props => props.textColor || 'inherit'};
`;

const LinkDescription = styled.div<{ textColor?: string }>`
  font-size: 0.85rem;
  opacity: 0.7;
  color: ${props => props.textColor || 'inherit'};
  margin-top: 0.2rem;
`;

const ExternalIcon = styled.span<{ textColor?: string }>`
  opacity: 0.5;
  color: ${props => props.textColor || 'inherit'};
  transition: opacity 0.3s ease;

  ${Card}:hover & {
    opacity: 1;
  }
`;

interface LinkCardProps {
  link: LinkItem;
  primaryColor: string;
}

export const LinkCard: React.FC<LinkCardProps> = ({ link, primaryColor }) => {
  if (!link.enabled) return null;

  return (
    <Card
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      bgColor={link.backgroundColor}
      textColor={link.textColor}
      primary={primaryColor}
    >
      <LinkContent>
        {link.icon && <LinkIcon>{link.icon}</LinkIcon>}
        <LinkInfo>
          <LinkTitle textColor={link.textColor}>{link.title}</LinkTitle>
          {link.description && (
            <LinkDescription textColor={link.textColor}>
              {link.description}
            </LinkDescription>
          )}
        </LinkInfo>
      </LinkContent>
      <ExternalIcon textColor={link.textColor}>
        <FiExternalLink size={18} />
      </ExternalIcon>
    </Card>
  );
};