import type{ ThemeConfig } from '../types';

// ========== CORES DO SITE ==========
export const defaultTheme: ThemeConfig = {
  // Cores principais
  primary: '#0d9488',
  primaryLight: '#f8fafc',
  primaryDark: '#1e293b',
  primaryBg: '#ffffff',
  primaryBgBlack: '#f1f5f9',
  
  // Cores de texto
  textPrimary: '#0f172a',
  textSecondary: '#334155',
  textLight: '#475569',
  textDark: '#0f172a',
  textMuted: '#6b7280',
  
  // Cores de interação
  hoverText: '#0f766e',
  linkText: '#0d9488',
  buttonBg: '#0d9488',
  buttonHover: '#0f766e',
  buttonActive: '#115e59',
  
  // Cores de fundo
  background: '#ffffff',
  backgroundLight: '#f8fafc',
  backgroundSecondary: '#f8fafc',
  cardBackground: '#ffffff',
  
  // Cores de status
  success: '#059669',
  warning: '#d97706',
  info: '#0369a1',
  error: '#dc2626',
  
  // Cores de acento
  accent: '#0891b2',
  accentTeal: '#0d9488',
  accentBlue: '#0369a1',
  accentEmerald: '#10b981',
  accentAmber: '#f59e0b',
  accentCyan: '#0891b2',
  
  // Cores com variações
  primaryMedical: '#3b82f6',
  primaryWellness: '#059669',
  primaryCare: '#7c3aed',
  
  // Gradientes
  gradientMedical: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
  gradientWellness: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
  gradientCalm: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)',
  gradientFresh: 'linear-gradient(135deg, #ecfdf5 0%, #f0fdfa 100%)',
  gradientSoft: 'linear-gradient(135deg, #fef7ff 0%, #faf5ff 100%)',
  
  // Tamanhos de fonte
  fontSizeBannerTitle: '3.5rem',
  fontSizeBannerSubtitle: '2.5rem',
  fontSizeSubtitle: '2rem',
  fontSizeTextXl: '1.25rem',
  fontSizeTextLg: '1.125rem',
  fontSizeTextMd: '1rem',
  fontSizeTextSm: '0.875rem',
  fontSizeTextXs: '0.75rem',
  
  // Fontes
  fontPrimary: "'Inter', 'Segoe UI', system-ui, sans-serif",
  fontSecondary: "'Poppins', -apple-system, sans-serif",
  
  // Border radius
  borderRadius: '12px',
  borderRadiusSm: '8px',
  borderRadiusMd: '12px',
  borderRadiusLg: '16px',
  borderRadiusXl: '24px',
  
  // Sombras
  shadowSm: '0 1px 2px rgba(0, 0, 0, 0.03)',
  shadowMd: '0 2px 4px rgba(0, 0, 0, 0.04)',
  shadowLg: '0 4px 8px rgba(0, 0, 0, 0.05)',
  shadowXl: '0 8px 16px rgba(0, 0, 0, 0.06)',
  shadowMedical: '0 20px 25px -5px rgba(59, 130, 246, 0.1)',
  shadowWellness: '0 20px 25px -5px rgba(5, 150, 105, 0.1)',
  
  // Transições
  transitionFast: '0.2s ease',
  transitionNormal: '0.3s ease',
  transitionSlow: '0.4s ease',
  
  // Breakpoints
  breakpointMobile: '768px',
  breakpointTablet: '1024px',
  breakpointDesktop: '1200px',
  
  // Cores de cards
  cardSoftBlue: '#f8fafc',
  cardSoftGreen: '#f0fdf4',
  cardSoftPurple: '#faf5ff',
  cardSoftAmber: '#fffbeb',
  
  // Cores de texto específicas
  textMedical: '#1e40af',
  textWellness: '#065f46',
  textCare: '#5b21b6',
  textInfo: '#075985',
  textSuccess: '#065f46',
  
  // Cores de fundo de status
  successLight: '#d1fae5',
  warningLight: '#fef3c7',
  infoLight: '#dbeafe',
  errorLight: '#fee2e2',
  
  // Cores de anel de foco
  focusRing: '#bae6fd',
  
  // Cores específicas
  phoneBg: '#0d9488',
  onWhiteBg: '#ffffff',
  ctaTitle: '#0f172a',
  titleText: '#0f172a',
  cardText: '#334155',
  subtitleText: '#475569',
  white: '#ffffff',
  
  // Container backgrounds
  navBackground: '#ffffff',
  headerBackground: '#f8fafc',
  
  // Variações de teal
  teal: '#0d9488',
  tealLight: '#ccfbf1',
  tealDark: '#0f766e',
  
  // Variações de blue
  blue: '#0369a1',
  blueLight: '#bae6fd',
  blueDark: '#075985',
  
  // Variações de emerald
  emerald: '#10b981',
  emeraldLight: '#a7f3d0',
  emeraldDark: '#047857',
  
  // Variações de amber
  amber: '#f59e0b',
  amberLight: '#fef3c7',
  amberDark: '#d97706',
  
  // Variações de cyan
  cyan: '#0891b2',
  cyanLight: '#cffafe',
  cyanDark: '#0e7490',
  
  // Cores extras
  softTeal: '#2a9d8f',
  warmAmber: '#e9c46a',
  deepPlum: '#9d4edd',
  softSage: '#87a96b',
  lightCoral: '#ff8fa3',
  
  // Objetos aninhados
  medical: {
    primary: '#3b82f6',
    light: '#dbeafe',
    dark: '#1e40af',
    text: '#1e40af',
    gradient: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
    shadow: '0 20px 25px -5px rgba(59, 130, 246, 0.1)'
  },
  wellness: {
    primary: '#059669',
    light: '#d1fae5',
    dark: '#047857',
    text: '#065f46',
    gradient: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
    shadow: '0 20px 25px -5px rgba(5, 150, 105, 0.1)'
  },
  care: {
    primary: '#7c3aed',
    light: '#ede9fe',
    dark: '#5b21b6',
    text: '#5b21b6',
    gradient: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)',
    shadow: '0 20px 25px -5px rgba(124, 58, 237, 0.1)'
  }
};

export const darkTheme: ThemeConfig = {
  ...defaultTheme,
  primary: '#0d9488',
  primaryLight: '#1e293b',
  primaryDark: '#0f172a',
  primaryBg: '#0f172a',
  primaryBgBlack: '#1e293b',
  textPrimary: '#f8fafc',
  textSecondary: '#cbd5e1',
  textLight: '#94a3b8',
  textDark: '#f8fafc',
  textMuted: '#64748b',
  background: '#0f172a',
  backgroundLight: '#1e293b',
  backgroundSecondary: '#1e293b',
  cardBackground: '#1e293b',
  cardSoftBlue: '#1e293b',
  cardSoftGreen: '#1e293b',
  cardSoftPurple: '#1e293b',
  cardSoftAmber: '#1e293b',
  navBackground: '#0f172a',
  headerBackground: '#1e293b',
  onWhiteBg: '#1e293b',
  shadowSm: '0 1px 2px rgba(0, 0, 0, 0.3)',
  shadowMd: '0 2px 4px rgba(0, 0, 0, 0.4)',
  shadowLg: '0 4px 8px rgba(0, 0, 0, 0.5)',
  shadowXl: '0 8px 16px rgba(0, 0, 0, 0.6)',
  gradientMedical: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
  gradientWellness: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
  gradientCalm: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
  gradientFresh: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
  gradientSoft: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
  textMedical: '#60a5fa',
  textWellness: '#34d399',
  textCare: '#a78bfa',
  textInfo: '#38bdf8',
  textSuccess: '#34d399',
  successLight: '#065f46',
  warningLight: '#78350f',
  infoLight: '#1e3a5f',
  errorLight: '#7f1d1d',
  tealLight: '#0f766e',
  tealDark: '#ccfbf1',
  blueLight: '#075985',
  blueDark: '#bae6fd',
  emeraldLight: '#047857',
  emeraldDark: '#a7f3d0',
  amberLight: '#78350f',
  amberDark: '#fef3c7',
  cyanLight: '#0e7490',
  cyanDark: '#cffafe',
  medical: {
    primary: '#3b82f6',
    light: '#1e293b',
    dark: '#0f172a',
    text: '#60a5fa',
    gradient: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
    shadow: '0 20px 25px -5px rgba(59, 130, 246, 0.2)'
  },
  wellness: {
    primary: '#059669',
    light: '#1e293b',
    dark: '#0f172a',
    text: '#34d399',
    gradient: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
    shadow: '0 20px 25px -5px rgba(5, 150, 105, 0.2)'
  },
  care: {
    primary: '#7c3aed',
    light: '#1e293b',
    dark: '#0f172a',
    text: '#a78bfa',
    gradient: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
    shadow: '0 20px 25px -5px rgba(124, 58, 237, 0.2)'
  }
};