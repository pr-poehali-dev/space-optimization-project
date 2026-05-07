import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Как быстро открывается расчётный счёт?",
      answer:
        "Счёт открывается в течение 1 рабочего дня полностью онлайн. Загружаете документы через личный кабинет, проходите видеоидентификацию — и счёт готов к работе. Визит в офис не требуется.",
    },
    {
      question: "Какие документы нужны для открытия счёта?",
      answer:
        "Для ООО: устав, решение о создании, паспорта руководителей и бенефициаров. Для ИП: паспорт и ИНН. Все документы загружаются онлайн в виде фото или сканов.",
    },
    {
      question: "Какова стоимость обслуживания?",
      answer:
        "Первые 3 месяца — бесплатно. Далее от 990 руб./месяц в зависимости от тарифа. Входящие платежи бесплатны, исходящие — от 19 руб. Подробные тарифы доступны на странице продуктов.",
    },
    {
      question: "Как получить кредит для бизнеса?",
      answer:
        "Оставьте заявку в интернет-банке или по телефону. Решение принимается за 24 часа. Для действующих клиентов с оборотом по счёту — ещё быстрее. Залог требуется не всегда.",
    },
    {
      question: "Работаете ли вы с ВЭД и валютными операциями?",
      answer:
        "Да, мы обслуживаем экспортёров и импортёров. Валютный контроль, паспорта сделок, SWIFT-переводы в 80+ стран. Персональный менеджер по ВЭД на время сделки.",
    },
    {
      question: "Есть ли поддержка 24/7?",
      answer:
        "Чат-поддержка работает круглосуточно. По срочным вопросам — выделенная линия для бизнес-клиентов. Персональный менеджер закрепляется за каждым корпоративным клиентом.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о счетах, кредитовании и работе с КорпоБанком.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}