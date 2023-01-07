import {
  Avatar,
  Box,
  Container,
  DarkMode,
  Flex,
  Heading,
  HStack,
  IconButton,
  Spinner,
  useToast,
} from '@chakra-ui/react';
import { GoogleAuthProvider, signOut, signInWithPopup } from 'firebase/auth';
import { SignOut, SignIn } from 'phosphor-react';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../lib/firebase';

const AUTH_ERR_TOAST = 'auth-err-toast';

export const handleLogin = async () => {
  const provider = new GoogleAuthProvider().setCustomParameters({
    prompt: 'select_account',
  });

  await signInWithPopup(auth, provider);
};

export const handleLogout = () => {
  signOut(auth);
};

const AuthNav: React.FC = () => {
  const toast = useToast();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (error && !toast.isActive(AUTH_ERR_TOAST)) {
      toast({
        id: AUTH_ERR_TOAST,
        title: 'Authentication Error',
        description: error.message,
      });
    }
  }, [error, toast]);

  if (loading) {
    return <Spinner color="teal" boxSize="40px" />;
  }

  if (user) {
    return (
      <HStack>
        <Avatar
          name={user.displayName || ''}
          src={user.photoURL || ''}
          boxSize="40px"
        />
        <IconButton
          aria-label="Logout"
          title="Logout"
          colorScheme="teal"
          borderRadius="full"
          onClick={handleLogout}
        >
          <SignOut />
        </IconButton>
      </HStack>
    );
  }

  return (
    <IconButton
      aria-label="Login"
      title="Login"
      colorScheme="teal"
      borderRadius="full"
      onClick={handleLogin}
    >
      <SignIn />
    </IconButton>
  );
};

const Navbar: React.FC = () => {
  return (
    <Box as="nav" pos="sticky" top={0} bg="teal.700" py={4}>
      <DarkMode>
        <Container
          maxW="container.xl"
          as={Flex}
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading fontSize="xl" letterSpacing="tight" color="teal.400">
            Contract Manager
          </Heading>
          <AuthNav />
        </Container>
      </DarkMode>
    </Box>
  );
};

export default Navbar;
