import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import AddFeedback from './pages/AddFeedback';
import EditFeedback from './pages/EditFeedback';

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="page-wrapper">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-feedback" element={<AddFeedback />} />
          <Route path="/edit/:id" element={<EditFeedback />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
