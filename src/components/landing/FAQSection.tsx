import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Подходит ли платформа для СНТ, ТСН и коттеджных посёлков?",
    answer:
      "Да, платформа разработана специально для управления загородной недвижимостью — ИЖС, СНТ, ТСН, коттеджные посёлки и управляющие компании. Вы можете настроить любую структуру начислений: целевые взносы, членские взносы, ЖКХ, охрана и благоустройство.",
  },
  {
    question: "Как работают автоматические начисления?",
    answer:
      "Вы один раз настраиваете тарифы и расписание — дальше система всё делает сама. В заданный день формируются квитанции для каждого собственника, отправляются уведомления и фиксируются в базе. Ручной труд исключён полностью.",
  },
  {
    question: "Могут ли жители платить онлайн?",
    answer:
      "Да. Каждый житель получает личный кабинет, где видит свои начисления, историю платежей и может оплатить картой или через СБП. Все оплаты автоматически зачисляются и отражаются в вашем дашборде.",
  },
  {
    question: "Что происходит с должниками?",
    answer:
      "Система автоматически отправляет напоминания о задолженности — по email и SMS. Вы видите список должников в реальном времени и можете экспортировать его для претензионной работы. По опыту клиентов, собираемость растёт на 20–30% в первые три месяца.",
  },
  {
    question: "Нужны ли технические знания для настройки?",
    answer:
      "Нет. Платформа настраивается через простой интерфейс без программирования. Наша команда помогает с первоначальной настройкой — обычно это занимает один рабочий день. Техническая поддержка включена во все тарифы.",
  },
  {
    question: "Как быстро можно начать работу?",
    answer:
      "Зарегистрируйтесь, заполните данные о вашем посёлке, добавьте собственников и настройте тарифы. Первые квитанции можно отправить уже в день подключения. Мы сопровождаем вас на каждом шаге онбординга.",
  },
];

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  return (
    <div className="w-full flex justify-center items-start">
      <div className="flex-1 px-4 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12">
        {/* Левая колонка - заголовок */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5">
          <div className="w-full flex flex-col justify-center text-[#49423D] font-semibold leading-tight md:leading-[44px] font-sans text-4xl tracking-tight">
            Часто задаваемые вопросы
          </div>
          <div className="w-full text-[#605A57] text-base font-normal leading-7 font-sans">
            Ответы на главные вопросы об автоматизации
            <br className="hidden md:block" />
            биллинга для вашего посёлка.
          </div>
        </div>

        {/* Правая колонка - FAQ */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index);

              return (
                <div key={index} className="w-full border-b border-[rgba(73,66,61,0.16)] overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-[18px] flex justify-between items-center gap-5 text-left hover:bg-[rgba(73,66,61,0.02)] transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 text-[#49423D] text-base font-medium leading-6 font-sans">
                      {item.question}
                    </div>
                    <div className="flex justify-center items-center">
                      <ChevronDownIcon
                        className={`w-6 h-6 text-[rgba(73,66,61,0.60)] transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-[18px] text-[#605A57] text-sm font-normal leading-6 font-sans">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}