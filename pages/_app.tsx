import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider, createTheme } from '@nextui-org/react';

const theme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      primary: '#fa7711',
      secondary: '#fcaf27',
      background: '#2b2d31',
      backgroundColor: '#2b2d31'
    }
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return <NextUIProvider theme={theme}>
    <Component {...pageProps} />
  </NextUIProvider>
}
