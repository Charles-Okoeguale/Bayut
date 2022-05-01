import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from '../pages/Home';
import NoPage from '../pages/notFound';
import Search from '../search';

const Navigations = () => {
    return (
        <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    )
}

export default Navigations