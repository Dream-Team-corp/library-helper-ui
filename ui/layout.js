import { useEffect } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { createTheme } from '@nextui-org/react';
import { useThemeStore } from '@/store';

export const darkTheme = createTheme({
  type: 'dark',
});
export const lightTheme = createTheme({
  type: 'light',
});

export default function Layout({ children }) {
  const { theme, getThemeLocalStorage } = useThemeStore((state) => state);
  useEffect(() => {
    getThemeLocalStorage();
  }, [getThemeLocalStorage]);
  return (
    <>
      <NextUIProvider theme={theme ? darkTheme : lightTheme}>
        <main>{children}</main>
      </NextUIProvider>
    </>
  );
}
