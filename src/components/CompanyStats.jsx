import { Box, Container, Typography } from '@mui/material';
import workspacePremiumIcon from '../assets/workspace_premium.svg';
import casesIcon from '../assets/cases.svg';
import thumbUpIcon from '../assets/thumb_up.svg';
import swapDrivingAppsWheelIcon from '../assets/swap_driving_apps_wheel.svg';

const stats = [
  {
    icon: workspacePremiumIcon,
    number: '10+',
    description: 'років в галузі',
  },
  {
    icon: casesIcon,
    number: '250+',
    description: 'задоволених клієнтів',
  },
  {
    icon: thumbUpIcon,
    number: '250+',
    description: 'задоволених клієнтів',
  },
  {
    icon: swapDrivingAppsWheelIcon,
    number: '100%',
    description: 'відгуки покупців',
  },
];

function CompanyStats() {
  return (
    <Box sx={{ pt: { xs: '40px', md: '80px' }, pb: { xs: '40px', md: '80px' }, backgroundColor: 'white' }}>
      <Container maxWidth="lg" sx={{ px: { xs: '16px', md: 3 } }}>
        {/* Заголовок */}
        <Typography
          variant="h2"
          textAlign="left"
          sx={{
            mb: '12px',
            fontWeight: 700,
          }}
        >
          Про компанію{' '}
          <Box component="span" sx={{ fontWeight: 400 }}>
            в цифрах
          </Box>
        </Typography>

        {/* Статистика */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 0,
            rowGap: '33px',
          }}
        >
          {stats.map((stat, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: '50%', sm: '25%' },
                textAlign: 'left',
                minHeight: '102px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                pr: 2,
              }}
            >
              {/* Іконка */}
              <Box sx={{  }}>
                <img
                  src={stat.icon}
                  alt=""
                  style={{ width: '24px', height: '24px' }}
                />
              </Box>

              {/* Число */}
              <Typography
                sx={{
                  fontSize: { xs: '48px', md: '80px' },
                  fontWeight: 700,
                  color: '#212121',
                  lineHeight: { xs: '48px', md: '80px' },
                  whiteSpace: 'nowrap',
                }}
              >
                {stat.number}
              </Typography>

              {/* Опис */}
              <Typography
                sx={{
                  fontSize: { xs: '14px', md: '16px' },
                  color: 'text.secondary',
                  minHeight: '20px',
                  lineHeight: { xs: '20px', md: '24px' },
                  wordBreak: 'break-word',
                }}
              >
                {stat.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default CompanyStats;
