import { Box, Container, Typography, Button, Grid } from '@mui/material';
import partner1 from '../assets/partner_1.jpg';
import partner2 from '../assets/partner_2.jpg';
import partner3 from '../assets/partner_3.jpg';
import partner4 from '../assets/partner_4.jpg';
import partner5 from '../assets/partner_5.jpg';
import partner6 from '../assets/partner_6.jpg';
import partner7 from '../assets/partner_7.jpg';
import partner8 from '../assets/partner_8.jpg';
import partner9 from '../assets/partner_9.jpg';
import partner10 from '../assets/partner_10.jpg';
import partner11 from '../assets/partner_11.png';
import partner12 from '../assets/partner_12.jpg';

const partners = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
  partner9,
  partner10,
  partner11,
  partner12,
];

function Partners() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'white' }}>
      <Container maxWidth="lg" sx={{ px: { xs: '16px', md: 3 } }}>
        {/* Заголовок */}
        <Typography
          variant="h2"
          textAlign="left"
          sx={{
            mb: 4,
            fontSize: { xs: '24px', md: '32px' },
            fontWeight: 700,
            lineHeight: '24px',
          }}
        >
          Торгівельні мережі{' '}
          <Box component="span" sx={{ fontWeight: 400 }}>
            для використання сертифіката
          </Box>
        </Typography>

        {/* Сітка партнерів */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
            mb: 4,
          }}
        >
          {partners.map((partner, index) => (
            <Box
              key={index}
              sx={{
                width: 'calc(50% - 4px)',
                '@media (min-width: 600px)': {
                  width: 'calc(25% - 6px)',
                },
                '@media (min-width: 900px)': {
                  width: 'calc(16.666% - 7px)',
                },
              }}
            >
              <img
                src={partner}
                alt=""
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '4px',
                }}
              />
            </Box>
          ))}
        </Box>

        {/* Кнопка "Показати ще" */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="outlined"
            sx={{
              borderColor: '#E56515',
              color: '#E56515',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              borderRadius: '22px',
              height: '44px',
              px: 4,
              '&:hover': {
                borderColor: '#E56515',
                backgroundColor: 'rgba(229, 101, 21, 0.04)',
              },
            }}
          >
            Показати ще
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Partners;
