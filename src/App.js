 import React from 'react';
import { Switch} from 'react-router';

import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import SignIn from './pages/SignIn';
import PrivateRoute from './components/PrivateRoute';
import { Home } from './pages/Home';
import PublicRoute from './components/PublicRoute';
// import { ProfileProvider } from './context/profile.context';
// import { ErrorBoundary } from './components/ErrorBoundary';

// const SignIn = lazy(() => import('./pages/SignIn'));

function App() {
  return (
    <Switch>
      <PublicRoute path = "/signin">
        <SignIn />
      </PublicRoute>
      <PrivateRoute path="/">
        <Home/>
      </PrivateRoute>
    </Switch>
    
  );
}

export default App;
