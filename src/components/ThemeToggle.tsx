import React from 'react';
import styled from 'styled-components';
import { Switch } from '@radix-ui/react-switch';
import { FiSun, FiMoon } from 'react-icons/fi';




const ToggleContainer = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
`;

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${props => props.theme.primary}15;
  border: 2px solid ${props => props.theme.primary}30;
  border-radius: 30px;
  color: ${props => props.theme.primary};
  cursor: pointer;
  transition: all ${props => props.theme.transitionNormal};
  backdrop-filter: blur(10px);
  font-size: ${props => props.theme.fontSizeTextSm};
  font-family: ${props => props.theme.fontPrimary};

  &:hover {
    background: ${props => props.theme.primary}25;
    transform: scale(1.05);
  }
`;

const StyledSwitch = styled(Switch)`
  width: 40px;
  height: 22px;
  background: ${props => props.theme.primary}40;
  border-radius: 9999px;
  border: none;
  position: relative;
  cursor: pointer;
  transition: background ${props => props.theme.transitionNormal};

  &[data-state='checked'] {
    background: ${props => props.theme.primary};
  }
`;

const StyledThumb = styled.span`
  display: block;
  width: 18px;
  height: 18px;
  background: white;
  border-radius: 9999px;
  transition: transform ${props => props.theme.transitionNormal};
  transform: translateX(2px);
  will-change: transform;

  &[data-state='checked'] {
    transform: translateX(20px);
  }
`;

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
  primaryColor: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  isDark, 
  onToggle,  
}) => {
  return (
    <ToggleContainer>
      <ToggleButton 
        onClick={onToggle}
        aria-label="Alternar tema"
      >
        {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
        <StyledSwitch 
          checked={isDark}
          onCheckedChange={onToggle}
        >
          <StyledThumb />
        </StyledSwitch>
      </ToggleButton>
    </ToggleContainer>
  );
};