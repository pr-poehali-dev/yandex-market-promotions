import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const CATEGORIES = ["Все", "Электроника", "Бытовая техника", "Смартфоны", "Ноутбуки", "Аксессуары"];

const DEALS = [
  {
    id: 1,
    category: "Смартфоны",
    brand: "Samsung",
    name: "Galaxy S24 Ultra 256GB",
    image: "https://via.placeholder.com/280x280/f5f5f5/333?text=Samsung+S24",
    originalPrice: 129990,
    salePrice: 94990,
    discount: 27,
    rating: 4.8,
    reviewCount: 2341,
    badge: "Хит продаж",
    badgeColor: "bg-black text-white",
    validUntil: "7 мая",
    yandexReview: "Флагманский смартфон с отличной камерой и производительностью. Покупатели отмечают долгое время работы батареи.",
    reviewAuthor: "Михаил К.",
    reviewStars: 5,
  },
  {
    id: 2,
    category: "Ноутбуки",
    brand: "Apple",
    name: "MacBook Air M3 13\" 8GB/256GB",
    image: "https://via.placeholder.com/280x280/f5f5f5/333?text=MacBook+Air",
    originalPrice: 149990,
    salePrice: 119990,
    discount: 20,
    rating: 4.9,
    reviewCount: 1876,
    badge: "Топ рейтинг",
    badgeColor: "bg-[hsl(var(--deal-orange))] text-white",
    validUntil: "10 мая",
    yandexReview: "Лучший ноутбук для работы. Тихий, лёгкий, невероятно быстрый. Заряда хватает на весь рабочий день.",
    reviewAuthor: "Анна Л.",
    reviewStars: 5,
  },
  {
    id: 3,
    category: "Бытовая техника",
    brand: "Dyson",
    name: "Пылесос V15 Detect Absolute",
    image: "https://via.placeholder.com/280x280/f5f5f5/333?text=Dyson+V15",
    originalPrice: 79990,
    salePrice: 54990,
    discount: 31,
    rating: 4.7,
    reviewCount: 983,
    badge: "Скидка дня",
    badgeColor: "bg-[hsl(var(--deal-red))] text-white",
    validUntil: "5 мая",
    yandexReview: "Мощный и удобный. Лазерный детектор пыли — реально полезная фишка. Семья довольна.",
    reviewAuthor: "Сергей В.",
    reviewStars: 4,
  },
  {
    id: 4,
    category: "Электроника",
    brand: "Sony",
    name: "Наушники WH-1000XM5",
    image: "https://via.placeholder.com/280x280/f5f5f5/333?text=Sony+XM5",
    originalPrice: 39990,
    salePrice: 27990,
    discount: 30,
    rating: 4.8,
    reviewCount: 3124,
    badge: "Популярное",
    badgeColor: "bg-black text-white",
    validUntil: "12 мая",
    yandexReview: "Лучшее шумоподавление на рынке. Звук чистый, накладки мягкие. Использую каждый день в офисе.",
    reviewAuthor: "Дмитрий Н.",
    reviewStars: 5,
  },
  {
    id: 5,
    category: "Аксессуары",
    brand: "Anker",
    name: "Powerbank 24000mAh 140W PD",
    image: "https://via.placeholder.com/280x280/f5f5f5/333?text=Anker+PB",
    originalPrice: 9990,
    salePrice: 5990,
    discount: 40,
    rating: 4.6,
    reviewCount: 541,
    badge: "−40%",
    badgeColor: "bg-[hsl(var(--deal-red))] text-white",
    validUntil: "6 мая",
    yandexReview: "Заряжает ноутбук и два телефона одновременно. Берём в командировки — очень выручает.",
    reviewAuthor: "Ольга М.",
    reviewStars: 4,
  },
  {
    id: 6,
    category: "Электроника",
    brand: "LG",
    name: "OLED-телевизор 55\" C4 2024",
    image: "https://via.placeholder.com/280x280/f5f5f5/333?text=LG+OLED+55",
    originalPrice: 189990,
    salePrice: 139990,
    discount: 26,
    rating: 4.9,
    reviewCount: 712,
    badge: "Выбор редакции",
    badgeColor: "bg-[hsl(var(--deal-orange))] text-white",
    validUntil: "15 мая",
    yandexReview: "Картинка просто великолепная. Чёрный цвет настоящий. Для кино и игр — лучший выбор в своём классе.",
    reviewAuthor: "Алексей Р.",
    reviewStars: 5,
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
                  <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${deal.badgeColor}`}>
                    {deal.badge}
                  </span>
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
                  <button className="mt-auto w-full bg-black text-white font-semibold text-sm py-2.5 rounded-xl hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2">
                    Перейти к товару
                    <Icon name="ArrowRight" size={14} />
                  </button>
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
