import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Открытие счёта",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Открываем расчётный счёт для ООО и ИП полностью онлайн. Никакой бюрократии — только загрузите
            документы, и счёт будет готов в течение одного рабочего дня.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Открытие за 1 рабочий день без визита в банк
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Бесплатное обслуживание первые 3 месяца
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Мультивалютный счёт: рубли, доллары, евро
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Кредитование и финансирование",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Кредиты для бизнеса на пополнение оборотных средств, закупку оборудования и расширение. Решение
            по заявке принимается за 24 часа — без лишних бумаг.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Кредиты от 1 до 500 млн руб. по ставке от 12%
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Овердрафт и возобновляемая кредитная линия
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Факторинг и лизинг для роста без залога
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Масштабирование бизнеса",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Когда ваш бизнес растёт, растём вместе с вами. Выход на новые рынки, управление несколькими
            юридическими лицами и корпоративные карты для команды.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Корпоративные карты для сотрудников с лимитами
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Управление группой компаний в одном кабинете
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Зарплатный проект для вашей команды
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Как мы работаем с вами</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            От открытия первого счёта до масштабирования бизнеса — КорпоБанк сопровождает вас на каждом этапе роста.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}