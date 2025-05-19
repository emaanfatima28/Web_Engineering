import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { SaasProvider } from '@saas-ui/react';
import LoginForm from './LoginForm';
import LoginFormStyledComponents from './LoginFormStyledComponents';
function App() {
  return (
    <ChakraProvider>
      <SaasProvider>
        <LoginFormStyledComponents />
      </SaasProvider>
    </ChakraProvider>
  );
}

export default App;
