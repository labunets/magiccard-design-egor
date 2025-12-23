import { Box, Container, Typography } from '@mui/material';
import trophyIcon from '../assets/trophy.svg';
import encryptedIcon from '../assets/encrypted.svg';
import savingsIcon from '../assets/savings.svg';
import colorsIcon from '../assets/colors.svg';
import hourglassIcon from '../assets/hourglass.svg';
import holidayVillageIcon from '../assets/holiday_village.svg';
import automationIcon from '../assets/automation.svg';
import celebrationIcon from '../assets/celebration.svg';
import accountBalanceWalletIcon from '../assets/account_balance_wallet.svg';
import headphonesIcon from '../assets/headphones.svg';

const reasons = [
  {
    icon: trophyIcon,
    title: 'Універсальність',
    description: 'Сертифікат діє у всіх магазинах партнерської мережі. Вам не потрібно вгадувати смаки співробітників чи підбирати подарунок індивідуально. Одержувач сам вирішує, де і на що використати сертифікат.',
  },
  {
    icon: encryptedIcon,
    title: 'Контроль та безпека',
    description: 'Ми відстежуємо використання сертифікатів, що унеможливлює зловживання, зокрема масові активації однією особою. Електронний формат захищає від втрати, крадіжки чи пошкодження під час доставки.',
  },
  {
    icon: savingsIcon,
    title: 'Економія ресурсів',
    description: 'Усі подарункові сертифікати оформлюються через одного постачальника. Це зменшує витрати часу, спрощує процес закупівлі та дозволяє оптимізувати бюджет без втрати якості подарунків.',
  },
  {
    icon: colorsIcon,
    title: 'Брендоване оформлення',
    description: 'Ви можете обрати дизайн електронного сертифіката або картонного холдера розміром 15х15 см. Оформлення легко адаптувати під стиль вашої компанії або конкретну подію.',
  },
  {
    icon: hourglassIcon,
    title: 'Тривалий термін дії',
    description: 'Сертифікати мають термін дії до 60 місяців. Одержувач не обмежений жорсткими дедлайнами і може скористатися подарунком у зручний для себе момент.',
  },
  {
    icon: holidayVillageIcon,
    title: 'Широка географія використання',
    description: 'Сертифікат можна використати як у великих містах, так і в невеликих населених пунктах. Партнерська мережа налічує понад 6000 точок, а активація доступна онлайн або через контакт-центр.',
  },
  {
    icon: automationIcon,
    title: 'Зручність для бізнесу та користувачів',
    description: 'Єдиний сертифікат спрощує роботу бухгалтерії, логістики та операційних команд. Кінцеві користувачі не прив\'язані до однієї мережі й можуть розраховуватися в різних категоріях торгових точок.',
  },
  {
    icon: celebrationIcon,
    title: 'Рішення для будь-якої події',
    description: 'Сертифікати підходять для мотивації персоналу, програм лояльності та привітань зі святами. Їх дарують на дні народження, корпоративні події та як знак подяки чи заохочення.',
  },
  {
    icon: accountBalanceWalletIcon,
    title: 'Гнучкий номінал',
    description: 'Ви самостійно обираєте суму сертифіката залежно від завдання та бюджету. Доступні номінали починаються від 50 грн і легко масштабуються під різні формати подарунків.',
  },
  {
    icon: headphonesIcon,
    title: 'Професійна щоденна підтримка',
    description: 'Наша команда консультує клієнтів щодня з 9:00 до 20:00. MagicCard — єдина B2B-платформа на ринку, що забезпечує регулярну та оперативну підтримку без вихідних.',
  },
];

function WhyChoose() {
  return (
    <Box sx={{ pt: '60px', pb: { xs: 6, md: 10 }, backgroundColor: '#F2F2F2' }}>
      <Container maxWidth="lg" sx={{ px: { xs: '16px', md: 3 } }}>
        {/* Заголовок */}
        <Typography
          variant="h2"
          textAlign="center"
          sx={{
            mb: 4,
            fontSize: { xs: '24px', md: '32px' },
            fontWeight: 700,
            lineHeight: '24px',
          }}
        >
          Чому варто вибрати{' '}
          <Box component="span" sx={{ fontWeight: 400 }}>
            сертифікати?
          </Box>
        </Typography>

        {/* Блоки переваг */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {reasons.map((reason, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              {/* Іконка */}
              <Box sx={{ mb: 2 }}>
                <img
                  src={reason.icon}
                  alt=""
                  style={{ width: '24px', height: '24px' }}
                />
              </Box>

              {/* Заголовок */}
              <Typography
                variant="h3"
                sx={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#212121',
                  lineHeight: '18px',
                  mb: 1,
                }}
              >
                {reason.title}
              </Typography>

              {/* Опис */}
              <Typography
                sx={{
                  fontSize: '13px',
                  color: '#595959',
                  lineHeight: '19px',
                }}
              >
                {reason.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default WhyChoose;
