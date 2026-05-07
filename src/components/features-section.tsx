import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Расчётный счёт для бизнеса",
    description: "Мгновенное открытие счёта онлайн, выгодные тарифы на РКО и полное управление через интернет-банк.",
    icon: "brain",
    badge: "РКО",
  },
  {
    title: "Безопасность транзакций",
    description: "Многоуровневая защита платежей, антифрод-система 24/7 и страхование средств по нормам ЦБ РФ.",
    icon: "lock",
    badge: "Защита",
  },
  {
    title: "Международные платежи",
    description: "SWIFT/SEPA переводы в более чем 80 стран. Конвертация по лучшему курсу без скрытых комиссий.",
    icon: "globe",
    badge: "Валюта",
  },
  {
    title: "Кредитование бизнеса",
    description: "Кредиты от 1 млн руб., решение за 24 часа. Овердрафт, факторинг и лизинг под ваши задачи.",
    icon: "zap",
    badge: "Кредит",
  },
  {
    title: "Эквайринг и платежи",
    description: "Торговый и интернет-эквайринг с комиссией от 1,4%. Подключение терминалов за 1 рабочий день.",
    icon: "link",
    badge: "Эквайринг",
  },
  {
    title: "Аналитика и отчёты",
    description: "Умная аналитика расходов, автоматическая выгрузка в 1С и налоговые отчёты в один клик.",
    icon: "target",
    badge: "Аналитика",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Всё необходимое для бизнеса</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Полный набор банковских инструментов для роста вашей компании
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}