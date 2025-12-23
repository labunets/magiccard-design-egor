import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';

const steps = [
  {
    step: 'Крок 1',
    description: 'Одержувач обирає партнера з переліку та визначається з товаром або послугою, які планує придбати.',
  },
  {
    step: 'Крок 2',
    description: 'Активує сертифікат зручним способом — через сайт або звернувшись за телефоном.',
  },
  {
    step: 'Крок 3',
    description: 'Отримує код активації та інструкції для використання сертифіката.',
  },
  {
    step: 'Крок 4',
    description: 'Оплачує покупку сертифікатом на касі магазину чи під час оформлення замовлення в інтернет-магазині без додаткових дій.',
  },
];

function HowToUse() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        {/* Заголовок */}
        <Typography
          variant="h3"
          textAlign="center"
          sx={{
            mb: 6,
            fontSize: { xs: '24px', md: '32px' },
          }}
        >
          Як скористатися <Box component="span" sx={{ fontWeight: 400 }}>сертифікатом?</Box>
        </Typography>

        {/* Сітка кроків */}
        <Grid container spacing={3}>
          {steps.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: 'background.grey',
                  borderRadius: '4.67px',
                  boxShadow: 'none',
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: '18px',
                      fontWeight: 700,
                      mb: 1.5,
                      color: 'text.primary',
                    }}
                  >
                    {item.step}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '13px',
                      lineHeight: 1.5,
                      color: 'text.secondary',
                    }}
                  >
                    {item.description}
                  </Typography>
                  {/* Placeholder для зображення */}
                  <Box
                    sx={{
                      mt: 2,
                      height: '160px',
                      backgroundColor: 'rgba(84, 59, 173, 0.05)',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography sx={{ color: 'grey.400', fontSize: '12px' }}>
                      Крок {index + 1}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Індикатор слайдів */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 0.5,
            mt: 4,
          }}
        >
          <Box
            sx={{
              width: '18px',
              height: '6px',
              backgroundColor: 'primary.main',
              borderRadius: '100px',
            }}
          />
          <Box
            sx={{
              width: '6px',
              height: '6px',
              backgroundColor: '#D9D9D9',
              borderRadius: '100px',
            }}
          />
          <Box
            sx={{
              width: '6px',
              height: '6px',
              backgroundColor: '#D9D9D9',
              borderRadius: '100px',
            }}
          />
          <Box
            sx={{
              width: '6px',
              height: '6px',
              backgroundColor: '#D9D9D9',
              borderRadius: '100px',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default HowToUse;
