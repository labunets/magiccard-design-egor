import { Box, Container, Typography, Button, TextField } from '@mui/material';
import { useState } from 'react';
import certificateImage from '../assets/certificate.png';

const denominations = [100, 200, 500, 1000, 2000, 5000, 10000];

function Certificate() {
  const [selectedDenomination, setSelectedDenomination] = useState(100);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  return (
    <Box sx={{ pt: '80px', pb: '80px', backgroundColor: '#543BAD' }}>
      <Container maxWidth="lg" sx={{ px: { xs: '16px', md: 3 } }}>
        {/* Заголовок */}
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

        {/* Параграф */}
        <Typography
          sx={{
            mb: '45px',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '21px',
            color: 'white',
          }}
        >
          Оплачує покупку сертифікатом на касі магазину чи під час оформлення замовлення в інтернет-магазині без додаткових дій.
        </Typography>

        {/* Кнопка Активувати */}
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

        {/* Зображення сертифіката */}
        <Box
          sx={{
            mb: '58px',
            width: '100%',
            overflow: 'hidden',
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

        {/* Форма купівлі сертифіката */}
        <Box
          sx={{
            backgroundColor: 'white',
            borderRadius: '10px',
            p: '24px',
            maxWidth: '328px',
            mx: 'auto',
          }}
        >
          {/* Заголовок форми */}
          <Typography
            variant="h3"
            sx={{
              mb: '16px',
              fontSize: '28px',
              fontWeight: 700,
              lineHeight: '34px',
              color: '#212121',
              textAlign: 'center',
            }}
          >
            Купити сертифікат
          </Typography>

          {/* Вибір номіналу */}
          <Box sx={{ mb: '12px' }}>
            <Typography
              sx={{
                mb: '8px',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '18px',
                letterSpacing: '0.28px',
                color: '#212121',
              }}
            >
              Оберіть номінал сертифіката (грн)*:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {denominations.map((value) => (
                <Box
                  key={value}
                  onClick={() => setSelectedDenomination(value)}
                  sx={{
                    width: 'calc((100% - 24px) / 4)',
                    height: '44px',
                    backgroundColor:
                      selectedDenomination === value ? '#212121' : '#F2F2F2',
                    color: selectedDenomination === value ? 'white' : '#212121',
                    borderRadius: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: value >= 10000 ? '14px' : '13px',
                    fontWeight: 400,
                    lineHeight: '19px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    '&:hover': {
                      backgroundColor:
                        selectedDenomination === value ? '#212121' : '#E9E9E9',
                    },
                  }}
                >
                  {value}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Поле телефону */}
          <Box sx={{ mb: '12px' }}>
            <Typography
              sx={{
                mb: '4px',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '18px',
                letterSpacing: '0.28px',
                color: '#212121',
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
                  height: '44px',
                  borderRadius: '100px',
                  backgroundColor: 'white',
                  fontSize: '13px',
                  '& fieldset': {
                    borderColor: '#E9E9E9',
                  },
                  '&:hover fieldset': {
                    borderColor: '#E9E9E9',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#E56515',
                  },
                },
                '& .MuiOutlinedInput-input': {
                  padding: '15px',
                  '&::placeholder': {
                    color: '#B2B2B2',
                    opacity: 1,
                  },
                },
              }}
            />
          </Box>

          {/* Поле email */}
          <Box sx={{ mb: '16px' }}>
            <Typography
              sx={{
                mb: '4px',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '18px',
                letterSpacing: '0.28px',
                color: '#212121',
              }}
            >
              Email:
            </Typography>
            <TextField
              fullWidth
              placeholder="Ваш email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              sx={{
                '& .MuiOutlinedInput-root': {
                  height: '44px',
                  borderRadius: '100px',
                  backgroundColor: 'white',
                  fontSize: '13px',
                  '& fieldset': {
                    borderColor: '#E9E9E9',
                  },
                  '&:hover fieldset': {
                    borderColor: '#E9E9E9',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#E56515',
                  },
                },
                '& .MuiOutlinedInput-input': {
                  padding: '15px',
                  '&::placeholder': {
                    color: '#B2B2B2',
                    opacity: 1,
                  },
                },
              }}
            />
          </Box>

          {/* Всього до сплати */}
          <Typography
            sx={{
              mb: '8px',
              fontSize: '13px',
              fontWeight: 400,
              lineHeight: '19px',
              letterSpacing: '0.26px',
              color: '#212121',
              textAlign: 'left',
            }}
          >
            Всього до сплати:{' '}
            <Box
              component="span"
              sx={{
                fontSize: '16px',
                fontWeight: 700,
                letterSpacing: '0.32px',
              }}
            >
              {selectedDenomination}₴
            </Box>
          </Typography>

          {/* Кнопка Оплатити */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              height: '44px',
              backgroundColor: '#E56515',
              color: 'white',
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.24px',
              borderRadius: '100px',
              '&:hover': {
                backgroundColor: '#D45510',
              },
            }}
          >
            Оплатити
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Certificate;
