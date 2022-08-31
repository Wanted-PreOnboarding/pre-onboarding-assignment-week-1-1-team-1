import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Auth from 'router/Auth';
import Todo from 'router/Todo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
