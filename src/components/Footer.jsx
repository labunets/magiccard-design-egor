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
        {/* Копірайт */}
        <Typography
          sx={{
            textAlign: 'center',
            color: '#B2B2B2',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '20px',
            mb: '16px',
          }}
        >
          © 2025 Magic Card. Усі права захищені
        </Typography>

        {/* Посилання */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              color: '#533BAD',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '20px',
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
            }}
          >
            Політика конфіденційності
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
