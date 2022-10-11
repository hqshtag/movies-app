import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'DM sans';
    },
`;

interface ITextProps {
  size: keyof typeof TextSizes;
  weight: "Regular" | "Medium" | "Bold";
  color?: string;
  align?: "center" | "left" | "right"
}

//usage: const Text = Typography({size: "3xl", weight: "Bold"});
//in your render / return <Text> Hello Typography </Text>
export const Typography = ({
  size = "base",
  weight = "Regular",
  color = "white",
  align = "center",
}: ITextProps) => {
  const [fontSize, lineHeight] = TextSizes[size];
  const w = weight === "Regular" ? 400 : weight === "Medium" ? 500 : 700;
  return styled.p`
    font-size: ${fontSize}rem;
    line-height: ${lineHeight}rem;
    font-weight: ${w};
    text-align: ${align};
    color: ${color};
    margin: 4px;
    padding: 2px;
  `;
};

//usage; COLORS.gray['50']: #F9FAFB;


 export const COLORS = { Gray: 
    { 50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827' } ,
 Red: 
    { 50: '#FEF2F2',
      100: '#FEE2E2',
      200: '#FECACA',
      300: '#FCA5A5',
      400: '#F87171',
      500: '#EF4444',
      600: '#DC2626',
      700: '#B91C1C',
      800: '#991B1B',
      900: '#7F1D1D' } ,
 Orange: 
    { 50: '#FFF7ED',
      100: '#FFEDD5',
      200: '#FED7AA',
      300: '#FDBA74',
      400: '#FB923C',
      500: '#F97316',
      600: '#EA580C',
      700: '#C2410C',
      800: '#9A3412',
      900: '#7C2D12' } ,
 Amber: 
    { 50: '#FFFBEB',
      100: '#FEF3C7',
      200: '#FDE68A',
      300: '#FCD34D',
      400: '#FBBF24',
      500: '#F59E0B',
      600: '#D97706',
      700: '#B45309',
      800: '#92400E',
      900: '#78350F' } ,
  Emerald: 
    { 50: '#ECFDF5',
      100: '#D1FAE5',
      200: '#A7F3D0',
      300: '#6EE7B7',
      400: '#34D399',
      500: '#10B981',
      600: '#059669',
      700: '#047857',
      800: '#065F46',
      900: '#064E3B' } ,
 Teal: 
    { 50: '#F0FDFA',
      100: '#CCFBF1',
      200: '#99F6E4',
      300: '#5EEAD4',
      400: '#2DD4BF',
      500: '#14B8A6',
      600: '#0D9488',
      700: '#0F766E',
      800: '#115E59',
      900: '#134E4A' } ,
  Cyan: 
    { 50: '#ECFEFF',
      100: '#CFFAFE',
      200: '#A5F3FC',
      300: '#67E8F9',
      400: '#22D3EE',
      500: '#164E63',
      600: '#155E75',
      700: '#0E7490',
      800: '#0891B2',
      900: '#06B6D4' } ,
  Skyblue: 
    { 50: '#F0F9FF',
      100: '#E0F2FE',
      200: '#BAE6FD',
      300: '#7DD3FC',
      400: '#38BDF8',
      500: '#0EA5E9',
      600: '#0284C7',
      700: '#0369A1',
      800: '#075985',
      900: '#0C4A6E' } ,
  Blue: 
    { 50: '#EFF6FF',
      100: '#DBEAFE',
      200: '#BFDBFE',
      300: '#93C5FD',
      400: '#60A5FA',
      500: '#3B82F6',
      600: '#2563EB',
      700: '#1D4ED8',
      800: '#1E40AF',
      900: '#1E3A8A' } ,
 Indigo: 
    { 50: '#EEF2FF',
      100: '#E0E7FF',
      200: '#C7D2FE',
      300: '#A5B4FC',
      400: '#818CF8',
      500: '#6366F1',
      600: '#4F46E5',
      700: '#4338CA',
      800: '#3730A3',
      900: '#312E81' } ,
 Violet: 
    { 50: '#F5F3FF',
      100: '#EDE9FE',
      200: '#DDD6FE',
      300: '#C4B5FD',
      400: '#A78BFA',
      500: '#8B5CF6',
      600: '#7C3AED',
      700: '#6D28D9',
      800: '#5B21B6',
      900: '#4C1D95' } ,
  Pink: 
    { 50: '#FDF2F8',
      100: '#FCE7F3',
      200: '#FBCFE8',
      300: '#F9A8D4',
      400: '#F472B6',
      500: '#EC4899',
      600: '#DB2777',
      700: '#BE185D',
      800: '#9D174D',
      900: '#831843' } ,
  Rose: 
    { 50: '#FFF1F2',
      100: '#FFE4E6',
      200: '#FECDD3',
      300: '#FDA4AF',
      400: '#FB7185',
      500: '#F43F5E',
      600: '#E11D48',
      700: '#BE123C',
      800: '#9F1239',
      900: '#881337' } 
 }

const TextSizes = {
  xs: [0.75, 1],
  sm: [0.875, 1.25],
  base: [1, 1.5],
  lg: [1.125, 1.75],
  xl: [1.25, 1.75],
  "2xl": [1.5, 2],
  "3xl": [1.875, 2.25],
  "4xl": [2.25, 25],
  "5xl": [3, 3],
  "6xl": [3.75, 3.75],
  "7xl": [4.5, 4.5],
  "8xl": [6, 6],
  "9xl": [8, 8],
};
