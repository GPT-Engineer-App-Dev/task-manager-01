import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import { Box, Flex } from '@chakra-ui/react';

function App() {
  return (
    <Router>
      <Box as="header" bg="blue.500" p={4}>
        <Flex justifyContent="space-between" color="white" maxW="960px" mx="auto">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </Flex>
      </Box>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;