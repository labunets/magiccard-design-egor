import { Box, Container, Typography } from '@mui/material';
import pepsiLogo from '../assets/pepsi.svg';
import nestleLogo from '../assets/nestle.svg';
import henkelLogo from '../assets/henkel.svg';
import maryKayLogo from '../assets/mary_kay.svg';
import avonLogo from '../assets/avon.svg';
import kyivstarLogo from '../assets/kyivstar.svg';

const clients = [
  pepsiLogo,
  nestleLogo,
  henkelLogo,
  maryKayLogo,
  avonLogo,
  kyivstarLogo,
];

function OurClients() {
  return (
    <Box sx={{ pt: { xs: '40px', md: '80px' }, pb: { xs: '40px', md: '80px' }, backgroundColor: 'white' }}>
      <Container maxWidth="lg" sx={{ px: { xs: '16px', md: 3 } }}>
        {/* Заголовок */}
        <Typography
          variant="h2"
          textAlign="center"
          sx={{
            mb: 4,
            fontWeight: 400,
          }}
        >
          Наші{' '}
          <Box component="span" sx={{ fontWeight: 700 }}>
            клієнти
          </Box>
        </Typography>

        {/* Сітка логотипів клієнтів */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
          }}
        >
          {clients.map((client, index) => (
            <Box
              key={index}
              sx={{
                width: 'calc(50% - 4px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '70px',
              }}
            >
              <img
                src={client}
                alt=""
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                }}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default OurClients;
