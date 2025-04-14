"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Мохамед Рихаан",
    review: "Foods are very tasty same like India.. Staffs are very polite.",
    image: "/collage/image1.webp",
  },
  {
    name: "Михаил",
    review:
      "Всегда очень вкусно, и большие порции. Ассортимент очень широкий, есть блюда которые можно есть в пост. Ингредиенты свежие, специи из Индии. Очень дружелюбная атмосфера, помогают с выбором блюд",
    image: "/collage/image2.webp",
  },
  {
    name: "Ева Т.",
    review:
      'Очень вкусно, учитывают остроту - "по-индийски" или "по-русски")) Брали чикен масала, ягненка и лепешки нан. Все просто восхитительное, пряности отлично раскрываются, лепешки огненные. Рекомендую 🫡',
    image: "/collage/img2.jpg",
  },
  {
    name: "Павел",
    review:
      "Самая вкусная индийская еда которую ел в Москве. Большие порции. Чикен бриани очень пряный, нравится. Креветки в соусе классные. Лепешки тоже хороши. В общем специально заезжаем в ТЦ чтобы тут поесть.",
    image: "/collage/img3.jpg",
  },
  {
    name: "Варвара",
    review:
      "Обожаю индийскую кухню, а здесь она просто волшебная. Очень вкусно. Карри чувствуется, соусы это просто песня, лепешки тоже безумно нравятся. В блюдах с морепродуктами не 1-2 креветки или чего-то ещё, а прям много всего.",
    image: "/collage/image5.webp",
  },
  {
    name: "Ольга Быстрова",
    review:
      "Очень вкусная, яркая еда, просто очень. Доброжелательный персонал. Теперь это моё любимое место. Пробовала разные блюда с цыпленком, лимонный рис, лепёшки - всё просто супер.",
    image: "/collage/img5.jpg",
  },
  {
    name: "Полина Мелиховская",
    review:
      'Ждала заказ 43 (!!!) минуты, подходила спрашивала, русская сотрудница, которая заказ собственно принимала, в мою сторону даже голову не поворачивала, извинялся и несколько раз говорил "сейчас, сейчас" не супер русскоговорящий сотрудник. Если вы когда-нибудь ели индийскую еду в индии или в хорошем индийском ресторане, ну или сами готовили по аутентичном рецепте, то в этой еде вы индийскую не узнаете, только названия. Прям вот вообще не похоже. Пришла по отзывам – разочарование',
    image: "/collage/image7.webp",
  },
  {
    name: "Алена Тарасова",
    review:
      "Очень вкусно! Я заказала butter chicken, лепешку, и рис дали в подарок по акции! Порция большая, вкусный мятный лимонад! Можно попросить сделать поострее или наоборот! Менеджер и повара очень добродушные и общительные! Атмосфера классная, приятная музыка! Рекомендую любителям индийской кухни!",
    image: "/collage/image8.webp",
  },
  {
    name: "Игорь Голубев",
    review:
      "Решили разнообразить привычный рацион и посетили это прекрасное место! Все повара ‐ индусы, блюда очень разные и нереально вкусные. Может я был слишком голодным, но съел всё за секунду, несмотря на пикантную остроту. Всем рекомендую!!",
    image: "/collage/image9.webp",
  },
  {
    name: "Ирина Зубанова",
    review:
      "Очень вкусно 🙏🥰🥰🥰🥰 Впервые попробовала индийскую кузню ❤🔥🔥🔥 Готовят индусы и все специи у них из Индии! Приходите и получите гастрономическое удовольствие 👍👍👍👍👍",
    image: "/collage/image10.webp",
  },
  {
    name: "Виктория Трямкина",
    review:
      "Очень классное место, всё быстро и нереально вкусно, приятная девушка администратор, которая поможет с выбором. Мы были просто в восторге",
    image: "/collage/img12.jpg",
  },
  {
    name: "Виктория",
    review:
      "Большие порции, наедаешься, очень вкусные креветки в соусе, лепешка с сыром и чесноком огонь! Персонал вежливый, подача блюд красивая, не успела сфоткать ту очень хотелось попробовать, уже как бы надоели тайские, вьетнамские, грузинские блюда и если вы хотите попробовать что та новенькое то вам сюда!",
    image: "/collage/image12.webp",
  },
  {
    name: "Николай Грецкий",
    review:
      "Очень вкусная еда, попробовал в первый раз и очень понравилось, персонал молодцы, это место стоит посетить, чтобы разнообразить рацион, советую точно 👍 🇮🇳",
    image: "/collage/image13.webp",
  },
  {
    name: " Бессонов Д.",
    review:
      "Очень вкусная и разнообразная еда. Взяли 4 блюда, все соусы разные, мяса кладут достаточно, порции большие и сытные. Еда свежая, теплая.",
    image: "/collage/image14.webp",
  },
  {
    name: " Алехина Дарья",
    review:
      "Отличное место! Очень приятный персонал. Мега вкусная еда, свежие продукты, все очень пряное и свежее. Восторг",
    image: "/collage/image19.webp",
  },
];

export default function ReviewsCarousel() {
  const { t } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-[#f8f5ed] to-[#f0e9d8] py-16 relative overflow-clip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#053420] tracking-tight"
          >
            {t("reviews.heading")}
          </motion.h2>
          <div className="flex justify-center mt-4">
            <div className="w-24 h-1 bg-[#CFA247] rounded-full"></div>
          </div>
        </div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ amount: 0.5 }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="relative"
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".review-next",
              prevEl: ".review-prev",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {reviews.map((item, index) => {
              const isExpanded = expandedIndex === index;
              const shouldTruncate = item.review.length > 120;
              const displayReview = isExpanded
                ? item.review
                : item.review.slice(0, 120) + (shouldTruncate ? "..." : "");

              return (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-[#fff01d] text-[#eee236]"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-[#053420] mb-2">
                        {item.name}
                      </h3>
                      <p
                        className={`text-gray-600 mb-4 ${
                          isExpanded ? "" : "line-clamp-3"
                        }`}
                      >
                        {item.review}
                      </p>

                      {shouldTruncate && (
                        <button
                          onClick={() => handleToggle(index)}
                          className="mt-auto text-[#CFA247] font-medium flex items-center hover:text-[#053420] transition-colors"
                        >
                          {isExpanded ? t("reviews.hide") : t("reviews.read")}
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Navigation Arrows */}
          <button className="review-prev absolute top-1/2 -left-4 sm:-left-6 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors">
            <ChevronLeft className="text-[#053420] w-6 h-6" />
          </button>
          <button className="review-next absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors">
            <ChevronRight className="text-[#053420] w-6 h-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
