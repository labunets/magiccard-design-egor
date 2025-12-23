import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import GiftIcon from '@mui/icons-material/CardGiftcard';

const features = [
  {
    icon: <StorefrontIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
    title: '400+ магазинів',
    description: 'Широкий вибір магазинів та сервісів по всій Україні',
  },
  {
    icon: <CreditCardIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
    title: 'Легка активація',
    description: 'Активуйте сертифікат за лічені хвилини онлайн або по телефону',
  },
  {
    icon: <CheckCircleIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
    title: 'Зручна оплата',
    description: 'Підтримка всіх популярних платіжних систем',
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
    title: 'Безпека',
    description: 'Захист ваших даних та транзакцій на найвищому рівні',
  },
  {
    icon: <GiftIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
    title: 'Ідеальний подарунок',
    description: 'Універсальний вибір для будь-якої події та людини',
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
    title: 'Підтримка 24/7',
    description: 'Завжди готові допомогти вам у будь-який час',
  },
];

function Features() {
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
          Чому обирають <Box component="span" sx={{ fontWeight: 400 }}>MagicCard?</Box>
        </Typography>

        {/* Сітка переваг */}
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: '10px',
                  boxShadow: 'none',
                  border: '1px solid',
                  borderColor: 'grey.200',
                  transition: 'all 0.3s',
                  '&:hover': {
                    boxShadow: '0px 4px 20px rgba(84, 59, 173, 0.15)',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 1.5,
                      fontWeight: 700,
                      fontSize: '18px',
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.5,
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Features;
