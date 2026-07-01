import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ThemeToggle } from './components/ThemeToggle';
import { defaultTheme, darkTheme } from './styles/theme';
import { 
  FaInstagram, FaFacebook, FaYoutube, FaWhatsapp,
  FaPhone, FaMapMarkerAlt, FaClock, FaLinkedin,
  FaBuilding, FaCreditCard, FaBriefcaseMedical, 
  FaStar, FaGlobe, FaVideo, FaMapPin
} from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import logo from '../src/assets/apple-touch-icon.png';

const CONFIG = {
  nome: 'Centro Médico Sapiranga',
  bio: 'Cuidando da sua saúde com excelência e humanidade há mais de 48 anos.',
  empresa: 'Centro Médico Sapiranga',
  telefone: '(51) 3500-0714',
  endereco: 'Av. João Corrêa, 683 - Centro, Sapiranga',
  horario: 'Segunda a Sexta: 7h às 21h | Sábados e feriados: 8h às 19h',
  cor: '#0d9488',
  imagemFachada: 'https://centroms.com.br/assets/fachada-B4EfD_BT.jpg',
  logo: logo,
  
  links: [
    { 
      titulo: 'Atendimento Geral', 
      url: 'https://api.whatsapp.com/send?phone=555135000714&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.', 
      icone: FaBuilding,
      descricao: 'Agendamento e informações',
      destaque: true
    },
    { 
      titulo: 'Contato', 
      url: 'tel:5135000714',  
      icone: FaPhone,
      descricao: 'Fale conosco'
    },
    { 
      titulo: 'Teleconsulta', 
      url: 'https://api.whatsapp.com/send/?phone=555135000714&text&type=phone_number&app_absent=0', 
      icone: FaVideo,
      descricao: 'Consultas online'
    },
    { 
      titulo: 'Cartões', 
      url: 'https://api.whatsapp.com/send/?phone=5551993481804&text&type=phone_number&app_absent=0', 
      icone: FaCreditCard,
      descricao: 'Benefícios e descontos'
    },
    { 
      titulo: 'Medicina do Trabalho', 
      url: 'https://api.whatsapp.com/send/?phone=5551989666385&text&type=phone_number&app_absent=0', 
      icone: FaBriefcaseMedical,
      descricao: 'Saúde ocupacional'
    },
    { 
      titulo: 'Avalie no Google', 
      url: 'https://www.google.com/search?q=centro+m%C3%A9dico+sapiranga&sca_esv=560664892&sxsrf=AB5stBgiilcJAewBvlJPMTjmdLB6rFgH5A%3A1693243927774&ei=F9rsZO3tLq7t1sQPsJWFuAU&ved=0ahUKEwit1dSW8f-AAxWutpUCHbBKAVcQ4dUDCA8&uact=5&oq=centro+m%C3%A9dico+sapiranga&gs_lp=Eg', 
      icone: FaStar,
      descricao: 'Deixe sua nota'
    },
    { 
      titulo: 'Endereço', 
      url: 'https://www.google.com/maps/place/Centro+M%C3%A9dico+Sapiranga/@-29.638385,-51.002844,15z/data=!4m6!3m5!1s0x95193f653d179439:0xd3fcf4242b471aad!8m2!3d-29.638385!4d-51.002844!16s%2Fg%2F1vgqf7ps?entry=ttu', 
      icone: FaMapPin,
      descricao: 'Como chegar'
    },
    { 
      titulo: 'Site', 
      url: 'https://centroms.com.br/', 
      icone: FaGlobe,
      descricao: 'centroms.com.br'
    },
  ],
  
  sociais: [
    { plataforma: 'instagram', url: 'https://www.instagram.com/centromedicosapiranga/?hl=pt' },
    { plataforma: 'facebook', url: 'https://www.facebook.com/centromedicosapiranga/?locale=pt_BR' },
    { plataforma: 'whatsapp', url: 'https://api.whatsapp.com/send?phone=555135000714' },
    { plataforma: 'linkedin', url: 'https://br.linkedin.com/company/centro-m%C3%A9dico-sapiranga' },
  ]
};


const Container = styled.div`
  min-height: 100vh;
  padding: 1rem;
  background: ${props => props.theme.background};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  
  @media (min-width: 768px) {
    padding: 2rem;
    align-items: center;
  }
`;

const Content = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  
  @media (min-width: 480px) {
    max-width: 440px;
  }
  
  @media (min-width: 768px) {
    max-width: 520px;
  }
`;

const Card = styled.div`
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadiusLg};
  box-shadow: ${props => props.theme.shadowXl};
  overflow: hidden;
  border: none;
`;

const BannerImage = styled.div<{ imagem: string }>`
  width: 100%;
  height: 160px;
  background-image: url(${props => props.imagem});
  background-size: cover;
  background-position: center;
  position: relative;
  
  @media (min-width: 480px) {
    height: 180px;
  }
  
  @media (min-width: 768px) {
    height: 200px;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70%;
    background: linear-gradient(to top, 
      ${props => props.theme.cardBackground} 0%,
      ${props => props.theme.cardBackground}CC 30%,
      transparent 100%
    );
  }
`;

const CardContent = styled.div`
  padding: 0 1rem 1.5rem 1rem;
  margin-top: -2rem;
  position: relative;
  z-index: 1;
  
  @media (min-width: 480px) {
    padding: 0 1.5rem 1.5rem 1.5rem;
  }
  
  @media (min-width: 768px) {
    padding: 0 2rem 2rem 2rem;
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${props => props.theme.primary}08;
  
  @media (min-width: 480px) {
    margin-bottom: 1.25rem;
    padding-bottom: 1.25rem;
  }
  
  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
  }
`;

const LogoWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  background: ${props => props.theme.cardBackground};
  box-shadow: ${props => props.theme.shadowMd};
  border: 3px solid ${props => props.theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  
  @media (min-width: 480px) {
    width: 90px;
    height: 90px;
    margin-bottom: 0.6rem;
  }
  
  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
    margin-bottom: 0.75rem;
  }
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 6px;
  
  @media (min-width: 480px) {
    padding: 7px;
  }
  
  @media (min-width: 768px) {
    padding: 8px;
  }
`;

const Nome = styled.h1`
  font-size: 1.25rem;
  color: ${props => props.theme.textPrimary};
  font-family: ${props => props.theme.fontPrimary};
  margin: 0;
  text-align: center;
  line-height: 1.2;
  
  @media (min-width: 480px) {
    font-size: 1.5rem;
  }
  
  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;


const Bio = styled.p`
  color: ${props => props.theme.textLight};
  font-size: 0.75rem;
  font-family: ${props => props.theme.fontSecondary};
  margin: 0.2rem 0 0 0;
  line-height: 1.4;
  text-align: center;
  max-width: 100%;
  padding: 0 0.5rem;
  
  @media (min-width: 480px) {
    font-size: 0.8rem;
    max-width: 350px;
    padding: 0;
  }
  
  @media (min-width: 768px) {
    font-size: 0.875rem;
    max-width: 400px;
    line-height: 1.5;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin: 1rem 0;
  
  @media (min-width: 480px) {
    gap: 0.6rem;
    margin: 1.25rem 0;
  }
  
  @media (min-width: 768px) {
    gap: 0.75rem;
    margin: 1.5rem 0;
  }
  
  @media (max-width: 380px) {
    grid-template-columns: 1fr;
    gap: 0.4rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: ${props => props.theme.backgroundLight};
  border-radius: ${props => props.theme.borderRadiusSm};
  font-size: 0.7rem;
  color: ${props => props.theme.textSecondary};
  font-family: ${props => props.theme.fontSecondary};
  border: none;
  min-height: 40px;
  
  @media (min-width: 480px) {
    padding: 0.6rem;
    gap: 0.6rem;
    font-size: 0.75rem;
    min-height: 44px;
  }
  
  @media (min-width: 768px) {
    padding: 0.75rem;
    gap: 0.75rem;
    font-size: 0.875rem;
    min-height: 48px;
  }
  
  svg {
    color: ${props => props.theme.primary};
    flex-shrink: 0;
    font-size: 0.875rem;
    
    @media (min-width: 480px) {
      font-size: 1rem;
    }
  }
  
  a {
    color: ${props => props.theme.linkText};
    text-decoration: none;
    font-size: 0.7rem;
    word-break: break-all;
    
    @media (min-width: 480px) {
      font-size: 0.75rem;
    }
    
    @media (min-width: 768px) {
      font-size: 0.875rem;
    }
    
    &:hover {
      color: ${props => props.theme.hoverText};
    }
  }
  
  span {
    font-size: 0.65rem;
    line-height: 1.2;
    
    @media (min-width: 480px) {
      font-size: 0.7rem;
    }
    
    @media (min-width: 768px) {
      font-size: 0.875rem;
    }
  }
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 0;
  flex-wrap: wrap;
  
  @media (min-width: 480px) {
    gap: 0.6rem;
    padding: 0.875rem 0;
  }
  
  @media (min-width: 768px) {
    gap: 0.75rem;
    padding: 1rem 0;
  }
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: ${props => props.theme.backgroundLight};
  color: ${props => props.theme.primary};
  transition: all ${props => props.theme.transitionNormal};
  text-decoration: none;
  border: none;
  
  @media (min-width: 480px) {
    width: 40px;
    height: 40px;
  }
  
  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }

  &:hover {
    transform: translateY(-2px);
    background: ${props => props.theme.primary};
    color: white;
    box-shadow: ${props => props.theme.shadowWellness};
  }
  
  svg {
    font-size: 0.875rem;
    
    @media (min-width: 480px) {
      font-size: 1rem;
    }
    
    @media (min-width: 768px) {
      font-size: 1.125rem;
    }
  }
`;

const LinkCard = styled.a<{ destaque?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.destaque ? '0.75rem 1rem' : '0.625rem 0.875rem'};
  margin: 0.4rem 0;
  background: ${props => props.destaque ? props.theme.primary : props.theme.cardBackground};
  color: ${props => props.destaque ? 'white' : props.theme.textPrimary};
  border: ${props => props.destaque ? 'none' : `1px solid ${props.theme.primary}10`};
  border-radius: ${props => props.theme.borderRadiusMd};
  text-decoration: none;
  transition: all ${props => props.theme.transitionNormal};
  cursor: pointer;
  box-shadow: ${props => props.destaque ? props.theme.shadowWellness : 'none'};
  min-height: 48px;
  
  @media (min-width: 480px) {
    padding: ${props => props.destaque ? '0.875rem 1.25rem' : '0.75rem 1rem'};
    margin: 0.45rem 0;
    min-height: 52px;
  }
  
  @media (min-width: 768px) {
    padding: ${props => props.destaque ? '1rem 1.5rem' : '0.875rem 1.25rem'};
    margin: 0.5rem 0;
    min-height: 56px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.destaque ? props.theme.shadowMedical : props.theme.shadowMd};
    border-color: ${props => props.destaque ? 'transparent' : props.theme.primary};
    background: ${props => props.destaque ? props.theme.buttonHover : props.theme.backgroundLight};
  }

  &:active {
    transform: scale(0.98);
  }
`;

const LinkContent = styled.div<{ destaque?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
  min-width: 0;
  
  @media (min-width: 480px) {
    gap: 0.875rem;
  }
  
  @media (min-width: 768px) {
    gap: 1rem;
  }
`;

const LinkIconWrapper = styled.div<{ destaque?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  color: ${props => props.destaque ? 'white' : props.theme.primary};
  flex-shrink: 0;
  
  @media (min-width: 480px) {
    width: 32px;
    height: 32px;
  }
  
  @media (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
  
  svg {
    font-size: 0.875rem;
    
    @media (min-width: 480px) {
      font-size: 1rem;
    }
    
    @media (min-width: 768px) {
      font-size: 1.125rem;
    }
  }
`;

const LinkInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`;

const LinkTitle = styled.span<{ destaque?: boolean }>`
  font-weight: 600;
  color: ${props => props.destaque ? 'white' : props.theme.textPrimary};
  font-family: ${props => props.theme.fontPrimary};
  font-size: 0.8rem;
  line-height: 1.2;
  
  @media (min-width: 480px) {
    font-size: 0.85rem;
  }
  
  @media (min-width: 768px) {
    font-size: ${props => props.destaque ? '1rem' : '0.875rem'};
  }
`;

const LinkDescription = styled.span<{ destaque?: boolean }>`
  font-size: 0.65rem;
  color: ${props => props.destaque ? 'rgba(255,255,255,0.8)' : props.theme.textLight};
  font-family: ${props => props.theme.fontSecondary};
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (min-width: 480px) {
    font-size: 0.7rem;
  }
  
  @media (min-width: 768px) {
    font-size: 0.75rem;
  }
`;

const ExternalIcon = styled(FiExternalLink)<{ destaque?: boolean }>`
  color: ${props => props.destaque ? 'rgba(255,255,255,0.6)' : props.theme.textLight};
  opacity: 0.5;
  flex-shrink: 0;
  transition: opacity ${props => props.theme.transitionNormal};
  font-size: 0.875rem;
  
  @media (min-width: 480px) {
    font-size: 1rem;
  }
  
  ${LinkCard}:hover & {
    opacity: 1;
  }
`;

const Footer = styled.div`
  text-align: center;
  margin-top: 1.25rem;
  padding-top: 0.75rem;
  border-top: 1px solid ${props => props.theme.primary}08;
  font-size: 0.65rem;
  color: ${props => props.theme.textLight};
  font-family: ${props => props.theme.fontSecondary};
  opacity: 0.7;
  
  @media (min-width: 480px) {
    font-size: 0.7rem;
    margin-top: 1.5rem;
    padding-top: 0.875rem;
  }
  
  @media (min-width: 768px) {
    font-size: 0.75rem;
    margin-top: 1.5rem;
    padding-top: 1rem;
  }
`;

const getIcon = (plataforma: string) => {
  const icons: Record<string, any> = {
    instagram: FaInstagram,
    facebook: FaFacebook,
    youtube: FaYoutube,
    whatsapp: FaWhatsapp,
    linkedin: FaLinkedin,
  };
  return icons[plataforma] || null;
};


function App() {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? darkTheme : defaultTheme;

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ThemeToggle 
          isDark={isDark} 
          onToggle={toggleTheme} 
          primaryColor={theme.primary} 
        />
        
        <Content>
          <Card>
            <BannerImage imagem={CONFIG.imagemFachada} />
            
            <CardContent>
              <LogoSection>
                <LogoWrapper>
                  <LogoImage src={CONFIG.logo} alt="Centro Médico Sapiranga" />
                </LogoWrapper>
                <Nome>{CONFIG.nome}</Nome>
                <Bio>{CONFIG.bio}</Bio>
              </LogoSection>

              <InfoGrid>
                <InfoItem>
                  <FaPhone />
                  <a href={`tel:${CONFIG.telefone.replace(/\D/g, '')}`}>
                    {CONFIG.telefone}
                  </a>
                </InfoItem>
                <InfoItem>
                  <FaMapMarkerAlt />
                  <span>{CONFIG.endereco}</span>
                </InfoItem>
                <InfoItem>
                  <FaClock />
                  <span>{CONFIG.horario}</span>
                </InfoItem>
              </InfoGrid>

              <SocialContainer>
                {CONFIG.sociais.map((social, index) => {
                  const Icon = getIcon(social.plataforma);
                  return Icon ? (
                    <SocialIcon 
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon />
                    </SocialIcon>
                  ) : null;
                })}
              </SocialContainer>

              {CONFIG.links.map((link, index) => {
                const IconComponent = link.icone;
                return (
                  <LinkCard
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    destaque={link.destaque}
                  >
                    <LinkContent destaque={link.destaque}>
                      <LinkIconWrapper destaque={link.destaque}>
                        <IconComponent />
                      </LinkIconWrapper>
                      <LinkInfo>
                        <LinkTitle destaque={link.destaque}>{link.titulo}</LinkTitle>
                        {link.descricao && (
                          <LinkDescription destaque={link.destaque}>
                            {link.descricao}
                          </LinkDescription>
                        )}
                      </LinkInfo>
                    </LinkContent>
                    <ExternalIcon destaque={link.destaque} />
                  </LinkCard>
                );
              })}

              <Footer>
                © {new Date().getFullYear()} {CONFIG.empresa} - Todos os direitos reservados
              </Footer>
            </CardContent>
          </Card>
        </Content>
      </Container>
    </ThemeProvider>
  );
}

export default App;