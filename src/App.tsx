import React from 'react';
import Routes from 'routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import { GlobalLayout } from 'components/templates';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalLayout>
        <Routes />
      </GlobalLayout>
    </BrowserRouter>
  );
}
