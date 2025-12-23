import { Box, Container, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: 'background.grey',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        {/* Копірайт */}
        <Typography
          variant="body2"
          textAlign="center"
          sx={{
            mb: 2,
            color: '#B2B2B2',
            fontSize: '14px',
          }}
        >
          © 2025 Magic Card. Усі права захищені
        </Typography>

        {/* Посилання */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 3,
            flexWrap: 'wrap',
          }}
        >
          <Link
            href="#"
            underline="hover"
            sx={{
              color: 'primary.main',
              fontSize: '14px',
            }}
          >
            Договір оферти
          </Link>
          <Link
            href="#"
            underline="hover"
            sx={{
              color: 'primary.main',
              fontSize: '14px',
            }}
          >
            Політика конфіденційності
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
