import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Алексей Смирнов",
    role: "Генеральный директор, ООО «Промтехснаб»",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Открыли счёт за один день без визита в банк. Эквайринг подключили на следующее утро. Наконец-то банк, который работает для бизнеса, а не наоборот.",
  },
  {
    name: "Марина Козлова",
    role: "Финансовый директор, ГК «АльфаТрейд»",
    avatar: "/professional-woman-scientist.png",
    content:
      "Кредит на пополнение оборотки одобрили за 18 часов. Ставка оказалась ниже, чем в трёх других банках. Работаем уже 2 года — ни разу не подвели.",
  },
  {
    name: "Денис Ли",
    role: "Основатель, e-commerce платформа «МегаМарт»",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Интернет-эквайринг с комиссией 1,5% и выплаты на следующий день — это именно то, что нужно онлайн-торговле. Конверсия на оплату выросла на 12%.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Нам доверяют предприниматели</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Реальные отзывы владельцев бизнеса, которые уже работают с КорпоБанком
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}