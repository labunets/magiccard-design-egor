import { Box } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import CompanyStats from './components/CompanyStats';
import Partners from './components/Partners';
import WhyChoose from './components/WhyChoose';
import OurClients from './components/OurClients';
import HowToUse from './components/HowToUse';
import FloatingButton from './components/FloatingButton';

function App() {
  return (
    <Box sx={{ pb: { xs: '80px', md: 0 } }}>
      <Header />
      <Hero />
      <CompanyStats />
      <Partners />
      <WhyChoose />
      <OurClients />
      <HowToUse />
      <FloatingButton />
    </Box>
  );
}

export default App;
