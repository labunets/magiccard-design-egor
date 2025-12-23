import { Box } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import CompanyStats from './components/CompanyStats';
import Partners from './components/Partners';
import WhyChoose from './components/WhyChoose';
import OurClients from './components/OurClients';
import HowToUse from './components/HowToUse';
import Certificate from './components/Certificate';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <CompanyStats />
      <Partners />
      <WhyChoose />
      <OurClients />
      <HowToUse />
      <Certificate />
      <Box sx={{ backgroundColor: '#F2F2F2', pb: { xs: '80px', md: 0 } }}>
        <Footer />
      </Box>
      <FloatingButton />
    </>
  );
}

export default App;
