'use client';

import { ThemeProvider } from 'styled-components';
import { theme } from '@/style/theme';

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}