import { Box, Container, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#F2F2F2',
        py: '24px',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: '16px', md: 3 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: { xs: 'center', md: 'space-between' },
            alignItems: 'center',
            gap: { xs: '16px', md: 0 },
          }}
        >
          {/* Копірайт */}
          <Typography
            sx={{
              textAlign: { xs: 'center', md: 'left' },
              color: '#B2B2B2',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '20px',
            }}
          >
            © 2025 Magic Card. Усі права захищені
          </Typography>

          {/* Посилання */}
          <Box
            sx={{
              display: 'flex',
              gap: { xs: '40px', md: '40px' },
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                color: '#533BAD',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '20px',
                cursor: 'pointer',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Договір оферти
            </Typography>
            <Typography
              sx={{
                color: '#533BAD',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '20px',
                cursor: 'pointer',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Політика конфіденційності
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
