import Registration from './components/pages/Registration'
import Login from './components/pages/Login'
import { BrowserRouter, Route ,Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
