// Каталог. ДЕМО-наполнение: названия и характеристики — примеры.
// Фото: положить файлы в public/products/ и указать пути в images.

export type CategoryKind = "furniture" | "moulding" | "lumber" | "panel" | "stairs";

export type Category = {
  slug: string;
  name: string;
  description: string;
  kind: CategoryKind;
};

export type Product = {
  slug: string;
  category: string;
  name: string;
  summary: string;
  description: string;
  specs?: [string, string][];
  images?: string[];
};

export const categories: Category[] = [
  {
    slug: "mebel",
    name: "Мебель",
    description: "Столы, стулья, скамьи и полки из массива.",
    kind: "furniture",
  },
  {
    slug: "pogonazh",
    name: "Погонаж",
    description: "Плинтус, наличник, раскладка, уголки.",
    kind: "moulding",
  },
  {
    slug: "obreznoy-material",
    name: "Обрезной материал",
    description: "Доска, брус и рейка камерной сушки.",
    kind: "lumber",
  },
  {
    slug: "panno",
    name: "Панно",
    description: "Декоративные панно и стеновые панели.",
    kind: "panel",
  },
  {
    slug: "lestnichnye-elementy",
    name: "Лестничные элементы",
    description: "Ступени, балясины, поручни, столбы.",
    kind: "stairs",
  },
];

export const products: Product[] = [
  {
    slug: "stol-obedennyj-dub",
    category: "mebel",
    name: "Стол обеденный из дуба",
    summary: "Массив дуба, покрытие маслом.",
    description:
      "Обеденный стол из массива дуба для дома и кафе. Столешница покрыта натуральным маслом с воском, хорошо переносит ежедневное использование. Возможен выбор размера и тона.",
    specs: [
      ["Материал", "Массив дуба"],
      ["Размер", "1600 × 900 × 750 мм"],
      ["Покрытие", "Масло с твёрдым воском"],
      ["Изготовление", "Под заказ, 2–3 недели"],
    ],
  },
  {
    slug: "stul-sosna",
    category: "mebel",
    name: "Стул из сосны",
    summary: "Классическая форма, сиденье из массива.",
    description:
      "Прочный стул из сосны с анатомическим сиденьем. Подходит для дома, дачи и общественных пространств.",
    specs: [
      ["Материал", "Сосна"],
      ["Высота сиденья", "450 мм"],
      ["Покрытие", "Лак или без покрытия"],
    ],
  },
  {
    slug: "skamya-sadovaya",
    category: "mebel",
    name: "Скамья садовая",
    summary: "Лиственница, для улицы.",
    description:
      "Скамья из лиственницы со скруглёнными кромками. Пропитка защищает древесину от влаги и солнца.",
    specs: [
      ["Материал", "Лиственница"],
      ["Длина", "1500 мм"],
      ["Пропитка", "Атмосферостойкое масло"],
    ],
  },
  {
    slug: "polka-nastennaya",
    category: "mebel",
    name: "Полка настенная",
    summary: "Ясень, скрытый крепёж.",
    description: "Лаконичная настенная полка из ясеня со скрытым креплением.",
    specs: [
      ["Материал", "Ясень"],
      ["Размер", "800 × 200 × 30 мм"],
    ],
  },
  {
    slug: "plintus-napolnyj",
    category: "pogonazh",
    name: "Плинтус напольный",
    summary: "Сосна, сорт «Экстра».",
    description:
      "Напольный плинтус из сосны без сучков. Подходит под покраску и тонировку.",
    specs: [
      ["Материал", "Сосна, сорт «Экстра»"],
      ["Сечение", "15 × 45 мм"],
      ["Длина", "2,0–3,0 м"],
    ],
  },
  {
    slug: "nalichnik-dvernoj",
    category: "pogonazh",
    name: "Наличник дверной",
    summary: "Липа, классический профиль.",
    description: "Наличник из липы с классическим профилем для межкомнатных дверей.",
    specs: [
      ["Материал", "Липа"],
      ["Сечение", "15 × 70 мм"],
      ["Длина", "2,2 м"],
    ],
  },
  {
    slug: "ugolok-naruzhnyj",
    category: "pogonazh",
    name: "Уголок наружный",
    summary: "Для отделки углов вагонки.",
    description: "Наружный уголок для аккуратной отделки углов стен и откосов.",
    specs: [
      ["Материал", "Сосна / липа"],
      ["Размер", "30 × 30 мм"],
    ],
  },
  {
    slug: "doska-obreznaya",
    category: "obreznoy-material",
    name: "Доска обрезная",
    summary: "Хвойные породы, камерная сушка.",
    description:
      "Обрезная доска камерной сушки для строительства и столярных работ. Отгрузка от одного куба.",
    specs: [
      ["Порода", "Сосна, ель"],
      ["Сечение", "25–50 × 100–200 мм"],
      ["Длина", "3,0 / 6,0 м"],
      ["Влажность", "10–12%"],
    ],
  },
  {
    slug: "brus-strogannyj",
    category: "obreznoy-material",
    name: "Брус строганный",
    summary: "Ровная геометрия, четыре стороны.",
    description: "Строганный брус для каркасов, перекрытий и мебельного производства.",
    specs: [
      ["Порода", "Сосна"],
      ["Сечение", "50 × 50 – 150 × 150 мм"],
      ["Длина", "3,0 / 6,0 м"],
    ],
  },
  {
    slug: "rejka",
    category: "obreznoy-material",
    name: "Рейка",
    summary: "Для обрешётки и декора.",
    description: "Строганная рейка для реечных потолков, перегородок и обрешётки.",
    specs: [
      ["Порода", "Сосна, дуб"],
      ["Сечение", "20 × 40 мм"],
    ],
  },
  {
    slug: "panno-derevo-zhizni",
    category: "panno",
    name: "Панно «Древо жизни»",
    summary: "Ручная резьба, массив.",
    description:
      "Декоративное резное панно из массива. Изготавливается вручную, возможны индивидуальные размеры.",
    specs: [
      ["Материал", "Липа"],
      ["Размер", "600 × 900 мм"],
      ["Покрытие", "Масло, патина"],
    ],
  },
  {
    slug: "panel-stenovaya-reechnaya",
    category: "panno",
    name: "Стеновая реечная панель",
    summary: "Акустическая основа, дуб.",
    description: "Реечная стеновая панель для офисов и жилых интерьеров.",
    specs: [
      ["Материал", "Шпон дуба / массив"],
      ["Размер", "2700 × 600 мм"],
    ],
  },
  {
    slug: "stupen-dub",
    category: "lestnichnye-elementy",
    name: "Ступень из дуба",
    summary: "Цельноламельная, сращённая.",
    description:
      "Ступень из дуба для межэтажных лестниц. Изготовление по размерам заказчика.",
    specs: [
      ["Материал", "Дуб, цельноламельный"],
      ["Толщина", "40 мм"],
      ["Длина", "до 1500 мм"],
    ],
  },
  {
    slug: "balyasina-tochenaya",
    category: "lestnichnye-elementy",
    name: "Балясина точёная",
    summary: "Классический профиль.",
    description: "Точёная балясина для лестничных ограждений.",
    specs: [
      ["Материал", "Сосна, бук, дуб"],
      ["Сечение", "50 × 50 мм"],
      ["Высота", "900 мм"],
    ],
  },
  {
    slug: "poruchen",
    category: "lestnichnye-elementy",
    name: "Поручень",
    summary: "Удобный профиль под руку.",
    description: "Поручень для лестниц, длина до трёх метров.",
    specs: [
      ["Материал", "Сосна, бук, дуб"],
      ["Сечение", "60 × 40 мм"],
      ["Длина", "до 3,0 м"],
    ],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

export const getProducts = (category: string) =>
  products.filter((p) => p.category === category);

export const getProduct = (category: string, slug: string) =>
  products.find((p) => p.category === category && p.slug === slug);
