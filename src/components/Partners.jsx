import { Box, Container, Typography, Button } from '@mui/material';
import { useState } from 'react';
import partners from '../data/partnerLogos';

function Partners() {
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll(true);
  };

  return (
    <Box sx={{ pt: { xs: '40px', md: '80px' }, pb: { xs: '60px', md: '80px' }, backgroundColor: 'white' }}>
      <Container maxWidth="lg" sx={{ px: { xs: '16px', md: 3 } }}>
        {/* Заголовок */}
        <Typography
          variant="h2"
          textAlign="left"
          sx={{
            mb: 4,
            fontWeight: 700,
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
            gap: { xs: 1, md: '20px' },
          }}
        >
          {partners.map((partner, index) => (
            <Box
              key={index}
              sx={{
                width: {
                  xs: 'calc(50% - 4px)',
                  sm: 'calc(25% - 6px)',
                  md: 'calc(20% - 16px)',
                },
                // Якщо showAll - показуємо всі
                // Якщо ні - показуємо 20 на xs, 50 на md+
                display: showAll
                  ? 'block'
                  : index < 20
                  ? 'block'
                  : index < 50
                  ? { xs: 'none', md: 'block' }
                  : 'none',
              }}
            >
              <img
                src={partner}
                alt=""
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '6px',
                }}
              />
            </Box>
          ))}
        </Box>

        {/* Кнопка "Показати ще" - приховуємо, коли всі логотипи відображені */}
        {!showAll && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button
              variant="outlined"
              onClick={handleShowMore}
              sx={{
                backgroundColor: 'white',
                color: 'secondary.main',
                borderColor: 'secondary.main',
                height: '44px',
                borderRadius: '22px',
                px: 4,
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.24px',
                borderWidth: '2px',
                width: { xs: '100%', md: '315px' },
                '&:hover': {
                  backgroundColor: 'rgba(229, 101, 21, 0.04)',
                  borderColor: 'secondary.main',
                  borderWidth: '2px',
                },
              }}
            >
              Показати ще
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default Partners;
