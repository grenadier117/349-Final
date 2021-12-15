import * as React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Calculator } from './pages/calculator';
import { Layout } from './pages/layout/layout';

export const Routes: React.FC = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Layout exact path="/" Component={Calculator} />
      </Switch>
    </BrowserRouter>
  </div>
);
