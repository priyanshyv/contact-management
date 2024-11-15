import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListPage from './components/ListPage';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
const App = () => {
  return (
    <Router>
      <div>
        <h1>Contact Management App</h1>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/edit/:id" element={<EditContact />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
