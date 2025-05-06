// import * as React from 'react';
// import Router from './src/navigation/Router';

// export default function App() {
//   return <Router />;
// }


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/navigation/Router';
export default function App() {
  return (
    <NavigationContainer>
     <Router/>
    </NavigationContainer>
  );
}
