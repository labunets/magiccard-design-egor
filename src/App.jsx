import { Box } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import CompanyStats from './components/CompanyStats';
import Partners from './components/Partners';
import FloatingButton from './components/FloatingButton';

function App() {
  return (
    <Box sx={{ pb: { xs: '80px', md: 0 } }}>
      <Header />
      <Hero />
      <CompanyStats />
      <Partners />
      <FloatingButton />
    </Box>
  );
}

export default App;
