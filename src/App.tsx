/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contacts from './pages/Contacts';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="bg" element={<Home />} />
          <Route path="bg/uslugi" element={<Services />} />
          <Route path="bg/za-nas" element={<About />} />
          <Route path="bg/kontakti" element={<Contacts />} />
          <Route path="bg/poveritelnost" element={<div className="p-20 text-center">Поверителност</div>} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}
