import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';

const denominations = [100, 200, 500, 1000, 2000, 5000, 10000];

function Certificate() {
  const [selectedDenomination, setSelectedDenomination] = useState(100);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleDenominationChange = (event, newValue) => {
    if (newValue !== null) {
      setSelectedDenomination(newValue);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        {/* Заголовок */}
        <Typography
          variant="h3"
          sx={{
            mb: 2,
            fontSize: { xs: '24px', md: '32px' },
          }}
        >
          Як виглядає <Box component="span" sx={{ fontWeight: 400 }}>сертифікат?</Box>
        </Typography>

        <Typography
          sx={{
            mb: 4,
            fontSize: '14px',
            lineHeight: 1.5,
            maxWidth: '600px',
          }}
        >
          Оплачує покупку сертифікатом на касі магазину чи під час оформлення замовлення в інтернет-магазині без додаткових дій.
        </Typography>

        {/* Зображення сертифіката */}
        <Box
          sx={{
            width: '100%',
            maxWidth: '500px',
            height: '300px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            mb: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography sx={{ color: 'white', opacity: 0.5 }}>
            Зображення сертифіката
          </Typography>
        </Box>

        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'secondary.main',
              color: 'white',
              px: 4,
              '&:hover': {
                backgroundColor: 'secondary.dark',
              },
            }}
          >
            CTA BUTTON
          </Button>
        </Box>

        {/* Форма */}
        <Box
          sx={{
            backgroundColor: 'white',
            borderRadius: '10px',
            p: 3,
            maxWidth: '500px',
            mx: { xs: 0, md: 'auto' },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              color: 'text.primary',
              textAlign: 'center',
              fontSize: '28px',
            }}
          >
            Купити сертифікат
          </Typography>

          {/* Номінал */}
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                mb: 1,
                color: 'text.primary',
                fontSize: '14px',
              }}
            >
              Оберіть номінал сертифіката (грн)*:
            </Typography>

            <Grid container spacing={1}>
              {denominations.map((value) => (
                <Grid item key={value}>
                  <Button
                    variant={selectedDenomination === value ? 'contained' : 'outlined'}
                    onClick={() => setSelectedDenomination(value)}
                    sx={{
                      borderRadius: '100px',
                      minWidth: '68px',
                      height: '44px',
                      fontSize: '13px',
                      backgroundColor: selectedDenomination === value ? '#212121' : '#F2F2F2',
                      color: selectedDenomination === value ? 'white' : '#212121',
                      border: 'none',
                      '&:hover': {
                        backgroundColor: selectedDenomination === value ? '#212121' : '#E5E5E5',
                        border: 'none',
                      },
                    }}
                  >
                    {value}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Телефон */}
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                mb: 0.5,
                color: 'text.primary',
                fontSize: '14px',
              }}
            >
              Телефон*:
            </Typography>
            <TextField
              fullWidth
              placeholder="+38 (___) ___-__-__"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '100px',
                  height: '44px',
                },
              }}
            />
          </Box>

          {/* Email */}
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                mb: 0.5,
                color: 'text.primary',
                fontSize: '14px',
              }}
            >
              Email:
            </Typography>
            <TextField
              fullWidth
              placeholder="Ваш email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '100px',
                  height: '44px',
                },
              }}
            />
          </Box>

          {/* Сума */}
          <Typography
            sx={{
              mb: 2,
              color: 'text.primary',
              fontSize: '13px',
            }}
          >
            Всього до сплати:{' '}
            <Box component="span" sx={{ fontSize: '16px', fontWeight: 700 }}>
              {selectedDenomination}₴
            </Box>
          </Typography>

          {/* Кнопка оплати */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: 'secondary.main',
              color: 'white',
              height: '44px',
              borderRadius: '100px',
              '&:hover': {
                backgroundColor: 'secondary.dark',
              },
            }}
          >
            ОПЛАТИТИ
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Certificate;
