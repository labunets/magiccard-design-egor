import { Box, Container, Typography, Button } from '@mui/material';
import certificateImage from '../assets/certificate.png';

function Certificate() {
  return (
    <Box sx={{ pt: '80px', pb: '80px', backgroundColor: '#543BAD' }}>
      <Container maxWidth="lg" sx={{ px: { xs: '16px', md: 3 } }}>
        {/* Верхній блок для мобільної версії */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <Typography
            variant="h2"
            sx={{
              mb: '45px',
              fontWeight: 700,
              color: 'white',
            }}
          >
            Як виглядає сертифікат?
          </Typography>

          <Typography
            sx={{
              mb: '45px',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '21px',
              color: 'white',
            }}
          >
            Після покупки сертифікат надходить на email у форматі PDF або SMS на телефон. Ви можете одразу активувати його або подарувати близькій людині.
          </Typography>

          <Box sx={{ mb: '44px', display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#E56515',
                color: 'white',
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.24px',
                borderRadius: '100px',
                height: '44px',
                px: '26px',
                '&:hover': {
                  backgroundColor: '#D45510',
                },
              }}
            >
              Активувати
            </Button>
          </Box>

          <Box
            sx={{
              mb: '58px',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img
              src={certificateImage}
              alt="Сертифікат"
              style={{
                width: '100%',
                maxWidth: '328px',
                height: 'auto',
                display: 'block',
              }}
            />
          </Box>
        </Box>

        {/* Двоколонковий layout для desktop */}
        <Box
          sx={{
            display: { xs: 'none', md: 'grid' },
            gridTemplateColumns: '1fr 1fr',
            gap: 4,
            mb: '60px',
            alignItems: 'center',
          }}
        >
          {/* Ліва колонка - Зображення сертифікатів */}
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
            }}
          >
            <img
              src={certificateImage}
              alt="Сертифікат"
              style={{
                width: '100%',
                maxWidth: '500px',
                height: 'auto',
                display: 'block',
              }}
            />
          </Box>

          {/* Права колонка - Текстовий блок */}
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                mb: '24px',
                fontWeight: 700,
                color: 'white',
              }}
            >
              Як виглядає сертифікат?
            </Typography>

            <Typography
              sx={{
                mb: '24px',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '21px',
                color: 'white',
              }}
            >
              Після покупки сертифікат надходить на email у форматі PDF або SMS на телефон. Ви можете одразу активувати його або подарувати близькій людині.
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: '#E56515',
                color: 'white',
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.24px',
                borderRadius: '100px',
                height: '44px',
                px: '26px',
                '&:hover': {
                  backgroundColor: '#D45510',
                },
              }}
            >
              Активувати
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Certificate;
