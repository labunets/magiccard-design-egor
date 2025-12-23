import { Box, Container, Typography, Grid, Button } from '@mui/material';

// Список партнерів (назви магазинів)
const partners = [
  { name: 'Rozetka', bgColor: '#05BC52' },
  { name: 'Silpo', bgColor: '#FF8522' },
  { name: 'ATB', bgColor: '#E52027' },
  { name: 'Auchan', bgColor: '#FDEDEF' },
  { name: 'JYSK', bgColor: '#034694' },
  { name: 'Foxtrot', bgColor: '#E95D2A' },
  { name: 'Comfy', bgColor: '#43B02A' },
  { name: 'Епіцентр', bgColor: '#F7931E' },
  { name: 'WOG', bgColor: '#ED1C24' },
  { name: 'ОККО', bgColor: '#0066B3' },
  { name: 'Avon', bgColor: '#FFFFFF' },
  { name: 'Mary Kay', bgColor: '#EE5BA1' },
];

function Partners() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        {/* Заголовок */}
        <Typography
          variant="h3"
          textAlign="center"
          sx={{
            mb: 2,
            fontSize: { xs: '24px', md: '32px' },
          }}
        >
          Наші <Box component="span" sx={{ fontWeight: 400 }}>партнери</Box>
        </Typography>

        <Typography
          variant="body1"
          textAlign="center"
          sx={{
            mb: 5,
            color: 'text.secondary',
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          Понад 400 магазинів та сервісів по всій Україні приймають MagicCard
        </Typography>

        {/* Категорії */}
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            mb: 4,
            overflowX: 'auto',
            pb: 2,
            '&::-webkit-scrollbar': {
              height: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'grey.300',
              borderRadius: '3px',
            },
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'secondary.main',
              color: 'white',
              borderRadius: '100px',
              px: 2,
              py: 0.5,
              fontSize: '12px',
              minWidth: 'auto',
              whiteSpace: 'nowrap',
            }}
          >
            Всі
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: 'grey.300',
              color: 'text.primary',
              borderRadius: '100px',
              px: 2,
              py: 0.5,
              fontSize: '12px',
              minWidth: 'auto',
              whiteSpace: 'nowrap',
            }}
          >
            Продукти
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: 'grey.300',
              color: 'text.primary',
              borderRadius: '100px',
              px: 2,
              py: 0.5,
              fontSize: '12px',
              minWidth: 'auto',
              whiteSpace: 'nowrap',
            }}
          >
            Все для дому
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: 'grey.300',
              color: 'text.primary',
              borderRadius: '100px',
              px: 2,
              py: 0.5,
              fontSize: '12px',
              minWidth: 'auto',
              whiteSpace: 'nowrap',
            }}
          >
            Електроніка
          </Button>
        </Box>

        {/* Сітка партнерів */}
        <Grid container spacing={2}>
          {partners.map((partner, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Box
                sx={{
                  height: '95px',
                  backgroundColor: partner.bgColor,
                  border: partner.bgColor === '#FFFFFF' ? '1px solid #E9E9E9' : 'none',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.2s',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: partner.bgColor === '#FFFFFF' || partner.bgColor === '#FDEDEF' ? '#212121' : 'white',
                  }}
                >
                  {partner.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Кнопка показати більше */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            variant="outlined"
            sx={{
              borderColor: 'secondary.main',
              color: 'secondary.main',
              borderRadius: '100px',
              px: 4,
              py: 1.5,
              '&:hover': {
                borderColor: 'secondary.dark',
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
