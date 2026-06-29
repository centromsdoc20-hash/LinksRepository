export interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon?: string;
  description?: string;
  backgroundColor?: string;
  textColor?: string;
  enabled: boolean;
  order: number;
}

export interface ProfileData {
  name: string;
  title: string;
  avatar?: string;
  bio?: string;
  companyName: string;
  companyLogo?: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  links: LinkItem[];
  socialLinks: SocialLink[];
}

export interface SocialLink {
  id: string;
  platform: 'instagram' | 'linkedin' | 'twitter' | 'youtube' | 'facebook' | 'github' | 'whatsapp';
  url: string;
  enabled: boolean;
}

export interface ThemeConfig {
  // Cores principais
  primary: string;
  primaryLight: string;
  primaryDark: string;
  primaryBg: string;
  primaryBgBlack: string;
  
  // Cores de texto
  textPrimary: string;
  textSecondary: string;
  textLight: string;
  textDark: string;
  textMuted: string;
  
  // Cores de interação
  hoverText: string;
  linkText: string;
  buttonBg: string;
  buttonHover: string;
  buttonActive: string;
  
  // Cores de fundo
  background: string;
  backgroundLight: string;
  backgroundSecondary: string;
  cardBackground: string;
  
  // Cores de status
  success: string;
  warning: string;
  info: string;
  error: string;
  
  // Cores de acento
  accent: string;
  accentTeal: string;
  accentBlue: string;
  accentEmerald: string;
  accentAmber: string;
  accentCyan: string;
  
  // Cores com variações
  primaryMedical: string;
  primaryWellness: string;
  primaryCare: string;
  
  // Gradientes
  gradientMedical: string;
  gradientWellness: string;
  gradientCalm: string;
  gradientFresh: string;
  gradientSoft: string;
  
  // Tamanhos de fonte
  fontSizeBannerTitle: string;
  fontSizeBannerSubtitle: string;
  fontSizeSubtitle: string;
  fontSizeTextXl: string;
  fontSizeTextLg: string;
  fontSizeTextMd: string;
  fontSizeTextSm: string;
  fontSizeTextXs: string;
  
  // Fontes
  fontPrimary: string;
  fontSecondary: string;
  
  // Border radius
  borderRadius: string;
  borderRadiusSm: string;
  borderRadiusMd: string;
  borderRadiusLg: string;
  borderRadiusXl: string;
  
  // Sombras
  shadowSm: string;
  shadowMd: string;
  shadowLg: string;
  shadowXl: string;
  shadowMedical: string;
  shadowWellness: string;
  
  // Transições
  transitionFast: string;
  transitionNormal: string;
  transitionSlow: string;
  
  // Breakpoints
  breakpointMobile: string;
  breakpointTablet: string;
  breakpointDesktop: string;
  
  // Cores de cards
  cardSoftBlue: string;
  cardSoftGreen: string;
  cardSoftPurple: string;
  cardSoftAmber: string;
  
  // Cores de texto específicas
  textMedical: string;
  textWellness: string;
  textCare: string;
  textInfo: string;
  textSuccess: string;
  
  // Cores de fundo de status
  successLight: string;
  warningLight: string;
  infoLight: string;
  errorLight: string;
  
  // Cores de anel de foco
  focusRing: string;
  
  // Cores específicas
  phoneBg: string;
  onWhiteBg: string;
  ctaTitle: string;
  titleText: string;
  cardText: string;
  subtitleText: string;
  white: string;
  
  // Container backgrounds
  navBackground: string;
  headerBackground: string;
  
  // Variações de teal
  teal: string;
  tealLight: string;
  tealDark: string;
  
  // Variações de blue
  blue: string;
  blueLight: string;
  blueDark: string;
  
  // Variações de emerald
  emerald: string;
  emeraldLight: string;
  emeraldDark: string;
  
  // Variações de amber
  amber: string;
  amberLight: string;
  amberDark: string;
  
  // Variações de cyan
  cyan: string;
  cyanLight: string;
  cyanDark: string;
  
  // Cores extras
  softTeal: string;
  warmAmber: string;
  deepPlum: string;
  softSage: string;
  lightCoral: string;
  
  // Objetos aninhados
  medical: {
    primary: string;
    light: string;
    dark: string;
    text: string;
    gradient: string;
    shadow: string;
  };
  wellness: {
    primary: string;
    light: string;
    dark: string;
    text: string;
    gradient: string;
    shadow: string;
  };
  care: {
    primary: string;
    light: string;
    dark: string;
    text: string;
    gradient: string;
    shadow: string;
  };
}

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon?: string;
  description?: string;
  enabled: boolean;
  order: number;
}

export interface SocialLink {
  id: string;
  platform: 'instagram' | 'linkedin' | 'twitter' | 'youtube' | 'facebook' | 'github' | 'whatsapp';
  url: string;
  enabled: boolean;
}

export interface ProfileData {
  name: string;
  title: string;
  avatar?: string;
  bio?: string;
  companyName: string;
  companyLogo?: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  links: LinkItem[];
  socialLinks: SocialLink[];
}

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon?: string;
  description?: string;
  enabled: boolean;
  order: number;
}

export interface SocialLink {
  id: string;
  platform: 'instagram' | 'linkedin' | 'twitter' | 'youtube' | 'facebook' | 'github' | 'whatsapp';
  url: string;
  enabled: boolean;
}

export interface ProfileData {
  name: string;
  title: string;
  avatar?: string;
  bio?: string;
  companyName: string;
  companyLogo?: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  links: LinkItem[];
  socialLinks: SocialLink[];
}