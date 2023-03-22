import 'tailwindcss/tailwind.css';
import '../styles/global.css';
import Layout from '@/ui/layout';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useThemeStore } from '@/store';

export const darkTheme = createTheme({
  type: 'dark',
});
export const lightTheme = createTheme({
  type: 'light',
});
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const { theme, getThemeLocalStorage } = useThemeStore((state) => state);
  useEffect(() => {
    getThemeLocalStorage();
  }, [getThemeLocalStorage]);
  return (
    <>
      <NextUIProvider
        disableBaseline={false}
        theme={theme ? darkTheme : lightTheme}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </>
  );
}
