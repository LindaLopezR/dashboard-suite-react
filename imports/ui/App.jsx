import React from 'react';
import MainLayout from './layouts/MainLayout.jsx';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library, config, dom } from '@fortawesome/fontawesome-svg-core';

library.add(fab, fas);

config.autoAddCss = false;


export const App = () => {
  return (
    <div>
      <MainLayout />
    </div>
  );
};
