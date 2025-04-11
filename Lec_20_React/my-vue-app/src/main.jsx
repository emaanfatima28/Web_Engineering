import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import FriendList from './FriendList.jsx';  


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendList />
  </StrictMode>
);
