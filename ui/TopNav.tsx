import { useThemeStore } from '@/store';
import { Button, Link, Navbar, Text } from '@nextui-org/react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

export default function TopNav() {
  const { theme, toggleTheme } = useThemeStore((state) => state);
  return (
    <>
      <Navbar isBordered variant="sticky" shouldHideOnScroll>
        <Navbar.Brand>
          <Text b size={24}>
            <Link href="/" color="inherit">
              Vercel
            </Link>
          </Text>
        </Navbar.Brand>
        <Navbar.Content variant="highlight-rounded">
          <Navbar.Link isActive href="/">
            Home
          </Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Button
            auto
            bordered
            icon={theme ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
            onPress={() => toggleTheme()}
          />
          <Navbar.Link color="inherit" href="/login">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Link href="/sign-in">Sign Up</Link>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </>
  );
}
