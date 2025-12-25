// Динамічний імпорт всіх логотипів партнерів з папки assets/partners
// Використовує Vite's import.meta.glob для автоматичного завантаження всіх файлів

const logoModules = import.meta.glob('../assets/partners/*.{jpg,png}', { eager: true });

// Перетворюємо об'єкт у відсортований масив логотипів
const partners = Object.keys(logoModules)
  .sort((a, b) => {
    // Витягуємо номер з назви файлу (imgi_5_thumb_... -> 5)
    const numA = parseInt(a.match(/imgi_(\d+)_/)?.[1] || '0');
    const numB = parseInt(b.match(/imgi_(\d+)_/)?.[1] || '0');
    return numA - numB;
  })
  .map(path => logoModules[path].default);

export default partners;
