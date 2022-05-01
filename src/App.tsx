import {Flex} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Navigations from './navigations';


function App() {
  return (
   <Flex direction='column'>
        <Navbar/>
        <Navigations/>
        <Footer/>
   </Flex>
  );
}

export default App;
