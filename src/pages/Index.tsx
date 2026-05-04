import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const CATEGORIES = ["Все", "Электроника", "Бытовая техника", "Смартфоны", "Ноутбуки", "Аксессуары", "Авто", "Инструменты"];

const DEALS = [

  {
    id: 3,
    category: "Бытовая техника",
    brand: "Midea",
    name: "Моющий вертикальный беспроводной пылесос Midea VSS GX5, 3 режима, самоочистка, зарядная станция, серый",
    image: "https://cdn.poehali.dev/projects/3cc554dd-dac0-40af-b0e6-a124251b0aa4/bucket/b6a23548-3400-4d25-9ffa-16eb967382bd.png",
    originalPrice: 22990,
    salePrice: 12981,
    discount: 44,
    rating: 4.7,
    reviewCount: 983,
    badge: "Скидка дня",
    badgeColor: "bg-[hsl(var(--deal-red))] text-white",
    validUntil: "5 мая",
    yandexReview: "Мощный и удобный. Легко справляется с любым покрытием. Семья довольна.",
    reviewAuthor: "Сергей В.",
    reviewStars: 4,
    link: "https://market.yandex.ru/cc/9N6RDf",
  },
  {
    id: 4,
    category: "Электроника",
    brand: "Marshall",
    name: "Наушники Marshall Major V, беспроводные, Bluetooth 5.3, Cream (бежевые)",
    image: "https://cdn.poehali.dev/projects/3cc554dd-dac0-40af-b0e6-a124251b0aa4/bucket/f83c4b69-efc7-4322-a1b2-4bc402647a74.png",
    originalPrice: 15700,
    salePrice: 7319,
    discount: 53,
    rating: 4.8,
    reviewCount: 3124,
    badge: "Популярное",
    badgeColor: "bg-black text-white",
    validUntil: "12 мая",
    yandexReview: "Лучшее шумоподавление на рынке. Звук чистый, накладки мягкие. Использую каждый день в офисе.",
    reviewAuthor: "Дмитрий Н.",
    reviewStars: 5,
    link: "https://market.yandex.ru/cc/9N6d8z",
  },
  {
    id: 5,
    category: "Аксессуары",
    brand: "COMMO",
    name: "Портативный внешний аккумулятор COMMO AEON 30000 мАч, PD 45 Вт, серо-зелёный",
    image: "https://cdn.poehali.dev/projects/3cc554dd-dac0-40af-b0e6-a124251b0aa4/bucket/8a1a998a-7424-494f-96b8-001f03ba4807.png",
    originalPrice: 3148,
    salePrice: 2237,
    discount: 29,
    rating: 4.6,
    reviewCount: 541,
    badge: "−29%",
    badgeColor: "bg-[hsl(var(--deal-red))] text-white",
    validUntil: "6 мая",
    yandexReview: "Заряжает ноутбук и два телефона одновременно. Берём в командировки — очень выручает.",
    reviewAuthor: "Ольга М.",
    reviewStars: 4,
    link: "https://market.yandex.ru/cc/9N6b8Z",
  },
  {
    id: 6,
    category: "Электроника",
    brand: "Marshall",
    name: "Наушники беспроводные Marshall Major IV, чёрный, Bluetooth 5.0",
    image: "https://cdn.poehali.dev/projects/3cc554dd-dac0-40af-b0e6-a124251b0aa4/bucket/20e740f5-228d-4cac-9c71-bd8840daa1fe.png",
    originalPrice: 16000,
    salePrice: 5882,
    discount: 63,
    rating: 4.9,
    reviewCount: 712,
    badge: "Выбор редакции",
    badgeColor: "bg-[hsl(var(--deal-orange))] text-white",
    validUntil: "15 мая",
    yandexReview: "Классический звук Marshall, удобная посадка. Батарея держит очень долго. Отличный выбор за эти деньги.",
    reviewAuthor: "Алексей Р.",
    reviewStars: 5,
    link: "https://market.yandex.ru/cc/9N6hAo",
  },
  {
    id: 7,
    category: "Бытовая техника",
    brand: "Polaris",
    name: "Чайник электрический стеклянный PWK 1725 CGLD WI-FI IQ Home, серебристый",
    image: "https://cdn.poehali.dev/projects/3cc554dd-dac0-40af-b0e6-a124251b0aa4/bucket/003b7db6-754c-4b9c-8cce-c835d9b5d163.png",
    originalPrice: 12999,
    salePrice: 4409,
    discount: 66,
    rating: 4.7,
    reviewCount: 438,
    badge: "−66%",
    badgeColor: "bg-[hsl(var(--deal-red))] text-white",
    validUntil: "12 мая",
    yandexReview: "Управляется с телефона, подсветка меняет цвет. Выглядит дорого, кипятит быстро. Очень доволен покупкой.",
    reviewAuthor: "Игорь С.",
    reviewStars: 5,
    link: "https://market.yandex.ru/cc/9N6p5v",
  },
  {
    id: 8,
    category: "Электроника",
    brand: "Haier",
    name: "Телевизор Haier 55 Smart TV S2 Pro, 55\", 4K UHD, Android TV EVO TV Dolby Digital Wi-Fi 5ГГц HDR 10 Upscaling 4K, 60 Гц",
    image: "https://cdn.poehali.dev/projects/3cc554dd-dac0-40af-b0e6-a124251b0aa4/bucket/f8dea52b-6da6-4cf3-a977-257e15b1f680.png",
    originalPrice: 84999,
    salePrice: 43559,
    discount: 49,
    rating: 4.8,
    reviewCount: 621,
    badge: "−49%",
    badgeColor: "bg-[hsl(var(--deal-red))] text-white",
    validUntil: "15 мая",
    yandexReview: "Отличная картинка 4K, Android работает шустро. Dolby Digital — звук хороший для встроенных динамиков. Доволен покупкой.",
    reviewAuthor: "Василий К.",
    reviewStars: 5,
    link: "https://market.yandex.ru/cc/9N6xg8",
  },
  {
    id: 9,
    category: "Авто",
    brand: "БелАК",
    name: "Домкрат подкатной автомобильный гидравлический 2 т БелАК БАК.80021",
    image: "https://cdn.poehali.dev/projects/3cc554dd-dac0-40af-b0e6-a124251b0aa4/bucket/c38e2bf2-f5d5-4b34-a7a7-fb4b7e2cf5c0.png",
    originalPrice: 3810,
    salePrice: 2348,
    discount: 38,
    rating: 4.7,
    reviewCount: 312,
    badge: "−38%",
    badgeColor: "bg-[hsl(var(--deal-red))] text-white",
    validUntil: "18 мая",
    yandexReview: "Крепкий и надёжный. Поднял машину без проблем. Всесезонное масло — работает даже в мороз. Рекомендую.",
    reviewAuthor: "Андрей П.",
    reviewStars: 5,
    link: "https://market.yandex.ru/cc/9N7Fqc",
  },
  {
    id: 10,
    category: "Инструменты",
    brand: "Edon",
    name: "Сварочный полуавтомат Edon Smart MIG-175S",
    image: "https://cdn.poehali.dev/projects/3cc554dd-dac0-40af-b0e6-a124251b0aa4/bucket/6939a22c-3815-4ce3-8af0-0ee014bad4fe.png",
    originalPrice: 11490,
    salePrice: 4981,
    discount: 57,
    rating: 4.9,
    reviewCount: 487,
    badge: "−57%",
    badgeColor: "bg-[hsl(var(--deal-red))] text-white",
    validUntil: "18 мая",
    yandexReview: "5 в 1, варит без газа! В комплекте катушка проволоки в подарок. 220А — справляется с любым металлом. Отличная машина за эти деньги.",
    reviewAuthor: "Михаил Т.",
    reviewStars: 5,
    link: "https://market.yandex.ru/cc/9N7haf",
  },
  {
    id: 12,
    category: "Электроника",
    brand: "COMMO",
    name: "Беспроводные наушники COMMO One, лавандовый",
    image: "https://cdn.poehali.dev/projects/3cc554dd-dac0-40af-b0e6-a124251b0aa4/bucket/4611a304-a8c1-45af-a72c-b374f479f966.png",
    originalPrice: 3184,
    salePrice: 2261,
    discount: 29,
    rating: 4.7,
    reviewCount: 12800,
    badge: "−29%",
    badgeColor: "bg-[hsl(var(--deal-red))] text-white",
    validUntil: "18 мая",
    yandexReview: "До 95 часов автономной работы — заряжаю раз в неделю. Накладные, сидят удобно. Лавандовый цвет просто космос, смотрятся стильно.",
    reviewAuthor: "Екатерина М.",
    reviewStars: 5,
    link: "https://market.yandex.ru/cc/9N7rLh",
  },
  {
    id: 13,
    category: "Электроника",
    brand: "Marshall",
    name: "Наушники беспроводные Marshall Major IV, черный, Bluetooth 5.0",
    image: "https://cdn.poehali.dev/projects/3cc554dd-dac0-40af-b0e6-a124251b0aa4/bucket/7c787c26-7335-464c-a659-f182e9186ddc.png",
    originalPrice: 16000,
    salePrice: 5882,
    discount: 63,
    rating: 4.9,
    reviewCount: 95,
    badge: "−63%",
    badgeColor: "bg-[hsl(var(--deal-red))] text-white",
    validUntil: "18 мая",
    yandexReview: "Классика Marshall — кожаные накладки, золотистые детали. Bluetooth 5.0, звук мощный и насыщенный. За такую цену — просто подарок.",
    reviewAuthor: "Дмитрий В.",
    reviewStars: 5,
    link: "https://market.yandex.ru/cc/9N7tbL",
  },
  {
    id: 14,
    category: "Электроника",
    brand: "Xiaomi",
    name: "Телевизор Xiaomi TV A 43 2026, диагональ 43\", 4K UHD, Wi-Fi, Bluetooth, Black",
    image: "https://cdn.poehali.dev/projects/3cc554dd-dac0-40af-b0e6-a124251b0aa4/bucket/0069ce05-8ee3-4afd-8e7f-aa72671b9e20.png",
    originalPrice: 35990,
    salePrice: 25965,
    discount: 28,
    rating: 4.8,
    reviewCount: 208,
    badge: "−28%",
    badgeColor: "bg-[hsl(var(--deal-red))] text-white",
    validUntil: "18 мая",
    yandexReview: "Взял для зала — 43 дюйма, 4K картинка отличная. HDR10, Dolby Audio, всё работает из коробки. Смарт-ТВ шустрый, никаких тормозов.",
    reviewAuthor: "Андрей К.",
    reviewStars: 5,
    link: "https://market.yandex.ru/cc/9N8JVw",
  },
  {
    id: 15,
    category: "Электроника",
    brand: "HUAWEI",
    name: "Планшет HUAWEI MatePad SE11 (2025), 8/128 ГБ, Wi-Fi, со стилусом, голубой (53014GXX)",
    image: "https://cdn.poehali.dev/projects/3cc554dd-dac0-40af-b0e6-a124251b0aa4/bucket/cf5f4704-8bad-40a4-8bab-9b9a8f54628d.png",
    originalPrice: 20690,
    salePrice: 15810,
    discount: 24,
    rating: 4.9,
    reviewCount: 451,
    badge: "−24%",
    badgeColor: "bg-[hsl(var(--deal-red))] text-white",
    validUntil: "18 мая",
    yandexReview: "Брал для ребёнка учиться и рисовать. Стилус в комплекте — бонус. Экран 11 дюймов, HarmonyOS шустрая, всё приложения работают отлично.",
    reviewAuthor: "Сергей Л.",
    reviewStars: 5,
    link: "https://market.yandex.ru/cc/9N8Kqf",
  },
  {
    id: 16,
    category: "Электроника",
    brand: "iQOO",
    name: "Смартфон iQOO Z10R 8+256 ГБ, AMOLED 6.77\", 120 Гц, 6500 мАч, стереодинамики, черный",
    image: "https://cdn.poehali.dev/projects/3cc554dd-dac0-40af-b0e6-a124251b0aa4/bucket/a3f50896-d4d5-40b2-bfcf-c3fee46625a1.png",
    originalPrice: 26999,
    salePrice: 19782,
    discount: 27,
    rating: 4.9,
    reviewCount: 183,
    badge: "−27%",
    badgeColor: "bg-[hsl(var(--deal-red))] text-white",
    validUntil: "18 мая",
    yandexReview: "Аккумулятор 6500 мАч — заряжаю раз в два дня. AMOLED дисплей яркий, 120 Гц плавные. 5G работает отлично, зарядка 90 Вт — от 0 до 100 за 40 минут.",
    reviewAuthor: "Максим Р.",
    reviewStars: 5,
    link: "https://market.yandex.ru/cc/9N8Ncs",
  },
  {
    id: 17,
    category: "Электроника",
    brand: "AJAZZ",
    name: "Механическая игровая клавиатура AJAZZ AK820 с подсветкой RGB, фиолетовый, Sea Salt switch",
    image: "https://cdn.poehali.dev/projects/3cc554dd-dac0-40af-b0e6-a124251b0aa4/bucket/3fe479fa-165f-43f1-97af-5d16348933f8.png",
    originalPrice: 13900,
    salePrice: 3798,
    discount: 73,
    rating: 4.8,
    reviewCount: 1900,
    badge: "−73%",
    badgeColor: "bg-[hsl(var(--deal-red))] text-white",
    validUntil: "18 мая",
    yandexReview: "Взял фиолетовую — выглядит просто огонь. RGB подсветка красивая, энкодер удобный для громкости. Sea Salt свичи мягкие, печатать одно удовольствие.",
    reviewAuthor: "Игорь Т.",
    reviewStars: 5,
    link: "https://market.yandex.ru/cc/9N8Pwx",
  },
  {
    id: 18,
    category: "Электроника",
    brand: "Logitech G",
    name: "Беспроводная игровая мышь Logitech G G305/G304 Lightspeed, черный",
    image: "https://cdn.poehali.dev/projects/3cc554dd-dac0-40af-b0e6-a124251b0aa4/bucket/c7e94bb6-70fe-4602-8df0-ebdabb4de2dc.png",
    originalPrice: 17524,
    salePrice: 2604,
    discount: 85,
    rating: 4.7,
    reviewCount: 129,
    badge: "−85%",
    badgeColor: "bg-[hsl(var(--deal-red))] text-white",
    validUntil: "18 мая",
    yandexReview: "Датчик HERO 25K — точность невероятная. 250 часов от одной батарейки, Lightspeed без задержек. Брал для шутеров — доволен на 100%.",
    reviewAuthor: "Артём В.",
    reviewStars: 5,
    link: "https://market.yandex.ru/cc/9N8Tnn",
  },
  {
    id: 11,
    category: "Бытовая техника",
    brand: "Tuvio",
    name: "Овощерезка с насадкой для кубиков, соломки, тёркой, шинковкой Tuvio TFP01, белая",
    image: "https://cdn.poehali.dev/projects/3cc554dd-dac0-40af-b0e6-a124251b0aa4/bucket/f70cba68-3606-429e-a118-133cf2a79f28.png",
    originalPrice: 7028,
    salePrice: 4993,
    discount: 29,
    rating: 4.8,
    reviewCount: 5600,
    badge: "−29%",
    badgeColor: "bg-[hsl(var(--deal-red))] text-white",
    validUntil: "18 мая",
    yandexReview: "7 насадок в комплекте — режет кубиками, соломкой, ломтиками, шинкует. Очень удобно для готовки. Качество отличное, покупаю второй раз.",
    reviewAuthor: "Ольга С.",
    reviewStars: 5,
    link: "https://market.yandex.ru/cc/9N7nua",
  },
];

function StarRating({ rating, count, size = "sm" }: { rating: number; count?: number; size?: "sm" | "md" }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const starSize = size === "sm" ? 12 : 14;

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            style={{ fontSize: starSize }}
            className={i <= full ? "text-[hsl(var(--deal-orange))]" : i === full + 1 && half ? "text-[hsl(var(--deal-orange))] opacity-60" : "text-gray-300"}
          >
            ★
          </span>
        ))}
      </div>
      <span className={`font-mono font-medium ${size === "sm" ? "text-xs" : "text-sm"} text-foreground`}>{rating}</span>
      {count && (
        <span className={`${size === "sm" ? "text-xs" : "text-sm"} text-muted-foreground`}>
          ({count.toLocaleString("ru-RU")})
        </span>
      )}
    </div>
  );
}

function formatPrice(price: number) {
  return price.toLocaleString("ru-RU") + " ₽";
}

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [sortBy, setSortBy] = useState<"discount" | "rating" | "price">("discount");
  const [expandedReview, setExpandedReview] = useState<number | null>(null);

  const filtered = DEALS.filter(
    (d) => activeCategory === "Все" || d.category === activeCategory
  ).sort((a, b) => {
    if (sortBy === "discount") return b.discount - a.discount;
    if (sortBy === "rating") return b.rating - a.rating;
    return a.salePrice - b.salePrice;
  });

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
              <span className="text-white text-xs font-bold font-mono">%</span>
            </div>
            <span className="font-bold text-lg tracking-tight">Акции</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary px-3 py-1.5 rounded-full">
            <Icon name="Star" size={12} className="text-[hsl(var(--deal-orange))]" />
            <span>Рейтинги и отзывы с Яндекс Маркета</span>
          </div>
          <button className="flex items-center gap-2 bg-black text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-neutral-800 transition-colors">
            <Icon name="Bell" size={14} />
            Уведомления
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-black text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="font-mono text-[hsl(var(--deal-orange))] text-sm font-medium uppercase tracking-widest mb-3">
                Горячие предложения · Май 2026
              </p>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-none mb-4">
                Скидки до 40%<br />на топовые товары
              </h1>
              <p className="text-white/60 max-w-md text-sm leading-relaxed">
                Подборка лучших акций с независимыми рейтингами и живыми отзывами покупателей Яндекс Маркета.
              </p>
            </div>
            <div className="flex gap-6">
              <div className="text-center">
                <div className="font-mono font-black text-3xl text-[hsl(var(--deal-orange))]">{DEALS.length}</div>
                <div className="text-white/50 text-xs mt-1">акций</div>
              </div>
              <div className="text-center">
                <div className="font-mono font-black text-3xl text-[hsl(var(--deal-orange))]">4.8</div>
                <div className="text-white/50 text-xs mt-1">ср. рейтинг</div>
              </div>
              <div className="text-center">
                <div className="font-mono font-black text-3xl text-[hsl(var(--deal-orange))]">9K+</div>
                <div className="text-white/50 text-xs mt-1">отзывов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="bg-white border-b border-border sticky top-16 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-0.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-black text-white"
                    : "bg-secondary text-foreground hover:bg-neutral-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground shrink-0">
            <Icon name="ArrowUpDown" size={14} />
            <span className="hidden sm:inline">Сортировка:</span>
            {[
              { key: "discount", label: "Скидка" },
              { key: "rating", label: "Рейтинг" },
              { key: "price", label: "Цена" },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setSortBy(key as typeof sortBy)}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                  sortBy === key ? "bg-black text-white" : "hover:bg-secondary"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Deals grid */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <Icon name="PackageSearch" size={40} className="mx-auto mb-4 opacity-30" />
            <p>Акций в этой категории пока нет</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((deal, idx) => (
              <article
                key={deal.id}
                className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex flex-col"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                {/* Image + badge */}
                <div className="relative bg-secondary aspect-[4/3] flex items-center justify-center overflow-hidden">
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="w-40 h-40 object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/placeholder.svg";
                    }}
                  />

                  <span className="absolute top-3 right-3 bg-[hsl(var(--deal-red))] text-white text-sm font-black px-2.5 py-1 rounded-full font-mono">
                    −{deal.discount}%
                  </span>
                  <span className="absolute bottom-3 right-3 text-xs text-muted-foreground bg-white/90 px-2 py-0.5 rounded-full border border-border">
                    до {deal.validUntil}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col gap-3 flex-1">
                  {/* Brand + name */}
                  <div>
                    <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-0.5">{deal.brand}</p>
                    <h2 className="font-semibold text-sm leading-snug text-foreground">{deal.name}</h2>
                  </div>

                  {/* Rating from Yandex */}
                  <div className="flex items-center gap-2">
                    <StarRating rating={deal.rating} count={deal.reviewCount} />
                    <span className="ml-auto text-[10px] text-muted-foreground font-mono bg-[#ffdb00]/10 text-[#b5920a] px-1.5 py-0.5 rounded border border-[#ffdb00]/30">
                      Я.Маркет
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-end gap-2">
                    <span className="text-2xl font-black text-foreground font-mono">{formatPrice(deal.salePrice)}</span>
                    <span className="text-sm text-muted-foreground line-through mb-0.5">{formatPrice(deal.originalPrice)}</span>
                  </div>

                  {/* Yandex review */}
                  <div className="border-t border-border pt-3">
                    <button
                      className="w-full text-left"
                      onClick={() => setExpandedReview(expandedReview === deal.id ? null : deal.id)}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-1.5">
                          <Icon name="MessageSquare" size={12} className="text-muted-foreground" />
                          <span className="text-xs font-medium text-muted-foreground">Отзыв с Я.Маркета</span>
                        </div>
                        <div className="flex gap-0.5">
                          {Array.from({ length: deal.reviewStars }).map((_, i) => (
                            <span key={i} className="text-[hsl(var(--deal-orange))] text-[10px]">★</span>
                          ))}
                        </div>
                      </div>
                      <p className={`text-xs text-foreground/70 leading-relaxed ${expandedReview === deal.id ? "" : "line-clamp-2"}`}>
                        «{deal.yandexReview}»
                      </p>
                      <p className="text-[10px] text-muted-foreground mt-1">— {deal.reviewAuthor}</p>
                    </button>
                  </div>

                  {/* CTA */}
                  {deal.link ? (
                    <a
                      href={deal.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto w-full bg-black text-white font-semibold text-sm py-2.5 rounded-xl hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
                    >
                      Перейти к товару
                      <Icon name="ArrowRight" size={14} />
                    </a>
                  ) : (
                    <button className="mt-auto w-full bg-black text-white font-semibold text-sm py-2.5 rounded-xl hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2">
                      Перейти к товару
                      <Icon name="ArrowRight" size={14} />
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-12 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>Рейтинги и отзывы предоставлены Яндекс Маркетом</p>
          <p className="font-mono text-xs">Обновлено: 4 мая 2026</p>
        </div>
      </footer>
    </div>
  );
}