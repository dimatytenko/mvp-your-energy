<a id="top"></a>
# [:blue_heart::yellow_heart:Your Energy](https://github.com/dimatytenko/mvp-your-energy)

<a href="#1"><img src="https://img.shields.io/badge/Опис Проeкту-512BD4?style=for-the-badge"/></a> <a href="#2"><img src="https://img.shields.io/badge/Функції-ECD53F?style=for-the-badge"/></a> <a href="#3"><img src="https://img.shields.io/badge/Особливості-007054?style=for-the-badge"/></a> <a href="#4"><img src="https://img.shields.io/badge/Підготовка до роботи-FF4500?style=for-the-badge"/></a> <a href="#5"><img src="https://img.shields.io/badge/Застосовані технології-A9225C?style=for-the-badge"/></a>

## Contributors
<a href="https://github.com/dimatytenko"><img src="https://img.shields.io/badge/dimatytenko-40AEF0?style=for-the-badge&logo=github&logoColor=212121"/></a> <a href="https://github.com/vitalii-kyiv"><img src="https://img.shields.io/badge/vitalii-kyiv-0099E5?style=for-the-badge&logo=github&logoColor=212121"/></a> <a href="https://github.com/TkachenkoKaterina"><img src="https://img.shields.io/badge/TkachenkoKaterina-40AEF0?style=for-the-badge&logo=github&logoColor=212121"/></a> <a href="https://github.com/Aleksey-Dr"><img src="https://img.shields.io/badge/Aleksey-Dr-0099E5?style=for-the-badge&logo=github&logoColor=212121"/></a> <a href="https://github.com/IYuliia"><img src="https://img.shields.io/badge/IYuliia-40AEF0?style=for-the-badge&logo=github&logoColor=212121"/></a> <a href="https://github.com/MarynaKindras"><img src="https://img.shields.io/badge/MarynaKindras-0099E5?style=for-the-badge&logo=github&logoColor=212121"/></a> <a href="https://github.com/k1nderko"><img src="https://img.shields.io/badge/k1nderko-40AEF0?style=for-the-badge&logo=github&logoColor=212121"/></a> <a href="https://github.com/Nanovik"><img src="https://img.shields.io/badge/Nanovik-0099E5?style=for-the-badge&logo=github&logoColor=212121"/></a> <a href="https://github.com/DianaHanbarova"><img src="https://img.shields.io/badge/DianaHanbarova-40AEF0?style=for-the-badge&logo=github&logoColor=212121"/></a>
___
<a id="1"></a>

## <img src="https://img.shields.io/badge/Опис Проeкту-512BD4?style=for-the-badge"/>

[__Your Energy__](https://dimatytenko.github.io/mvp-your-energy/) - це web-застосунок, що надає користувачу зручний і швидкий інструмент для пошуку, вивчення та збереження обраних фізичних вправ для заняття спортом.

Завдання [_Your Energy_](https://dimatytenko.github.io/mvp-your-energy/) - мотивувати користувача щодня займатися спортом. Це завдання реалізується завдяки зручності та інформативності інтерфейсу web-застосунку і корисного функціоналу!

Застосунок складається з двох сторінок [__Home__](https://dimatytenko.github.io/mvp-your-energy/index.html) і [__Favorites__](https://dimatytenko.github.io/mvp-your-energy/favorites.html).

[__Home__](https://dimatytenko.github.io/mvp-your-energy/index.html) включає:
* герой з заголовком сайту та переліком популярних тегів;
* блок з панеллю фільтрів, за допомогою яких користувач може вишукати необхідні йому вправи;
* блок з переліком категорій/вправ, в залежності від обраного фільтру (за частиною тіла, мʼязами чи обладнанням);
* блок з цитатою дня та інформуванні, чому важливо приділяти спорту 110 хвилин щоденно.

[__Favorites__](https://dimatytenko.github.io/mvp-your-energy/favorites.html)  включає:
* блок з цитатою дня та інформуванні, чому важливо приділяти спорту 110 хвилин щоденно;
* блок з переліком вправ, що були додані користувачем до Favorites.

_Header_ і _Footer_ для сторінок єдині.

_Header_ включає:
* mobile: логотип та бургер-меню &#8801; з навігацією та переліком посилань на соц. мережі;
* tablet&desktop: логотип, навігацію та перелік соц. мереж.

_Footer_ включає:
* логотип;
* перелік посилань на соц. мереж;
* слоган компанії;
* форму для підписки на розсилку нових вправ.

_Modal window_ з детальною інформацією про вправу включає:
* відео з прикладом виконання вправи (у разі наявності);
* назву вправи, її рейтинг;
* мету, на яку. спрямовано результат виконання вправи;
* частину тілу, яка задіяна під час виконання вправи;
* популярність вправи серед користувачів компанії;
* кількість калорій, що можуть бути спалені за 3 хвилини виконання вправи;
* короткий опис;
* кнопку додавання вправи до Favorites (або видалення з них);
* кнопку для проставлення оцінки вправи користувачем з привʼязкою до email.
___
<a id="2"></a>

## <img src="https://img.shields.io/badge/Функції-ECD53F?style=for-the-badge"/>
Click по логотипу (у Header і Footer) або Home переадресовує користувача на головну сторінку.
Click по Favorites відкриває сторінку з переліком вправ,  доданих користувачем в улюблені.
Click по бургер-меню розгортає його на всю висоту viewport.
Click по кнопці додавання вправи до Favorites (або видалення з них) оновлює інформацію про favorites, яка зберігається в localStorage.
Click по backdrop модального вікна, click по кнопці з іконкою хрестика або натискання на клавішу ESC закриває модальне вікно.

Пошук вправ відбувається з урахуванням:
* фільтру;
* категорії;
* ключового слова (за наявності по події submit);
* кількості вправ на сторінці;
* порядкового номеру сторінки.

[__API__](https://your-energy.b.goit.study/api-docs) з вправами (`https://your-energy.b.goit.study/api-docs`):
* [Перелік фільтрів](https://your-energy.b.goit.study/api/filters?filter=Muscles&page=1&limit=12) (вправ) з урахування назви фільтру, кількості категорій у відповіді на запит та порядкового номеру сторінки - GET;
* [Перелік вправ](https://your-energy.b.goit.study/api/exercises?bodypart=back&muscles=lats&equipment=barbell&keyword=pull&page=1&limit=10) з фільтрацією по категорії та ключовому слову з урахування кількості вправ у запиті та порядкового номеру сторінки - GET;
* [Детальна інформація](https://your-energy.b.goit.study/api/exercises/) про вправу (exerciseID) - GET;
* [Додавання рейтингу](https://your-energy.b.goit.study/api/exercises/) окремій вправі (exerciseID /rating) - PATCH;
* [Цитата дня](https://your-energy.b.goit.study/api/quote) - GET;
* [Оформлення підписки](https://your-energy.b.goit.study/api/subscription) на розсилку нових вправ - POST.
___
<a id="3"></a>

## <img src="https://img.shields.io/badge/Особливості-007054?style=for-the-badge"/>
Верстка адаптивна, окрім мобільних пристроїв. Точки перелому:
   - mobile: верстка адаптивна з 375px;
   - tablet: з 768px;
   - desktop: з 1440px

[__Проєкт__](https://github.com/tatidan/ms-htmlcss-teamproject-2023) створено з урахуванням наступних вимог:
1. Верстка валідна та перевірена за допомогою сервісів (https://validator.w3.org/ , https://jigsaw.w3.org/css-validator/).
2. Забезпечено дотримання семантики відповідно до стандартів HTML5.
3. Здійснено підключення шрифтів.
4. Забезпечено оптимізацію розмірів векторної та растрової графіки.
5. Забезпечено підтримку відображення картинок для retina-екранів.
6. Оптимізовано завантаження зображень.
7. Всі svg-іконки підключено через [_sprite_](https://github.com/tatidan/ms-htmlcss-teamproject-2023/blob/main/src/img/sprite.svg?short_path=664ce67).
8. Додано відображення [_фавікон_](https://github.com/tatidan/ms-htmlcss-teamproject-2023/blob/main/src/img/icon-favicon.svg) сторінки.
___
<a id="4"></a>

## <img src="https://img.shields.io/badge/Підготовка до роботи-FF4500?style=for-the-badge"/>

Переконайся, що на комп'ютері встановлено LTS-версію Node.js.
[Скачай та встанови](https://nodejs.org/en/) її якщо необхідно.

### Iніціювати проект
Встанови базові залежності проекту в терміналі командою `npm install`. :white_check_mark:
### Запустити проект
1. Запусти режим розробки, виконавши в терміналі команду `npm run dev`. :white_check_mark:
2. Перейди у браузері за адресою [http://localhost:5173](http://localhost:5173). Ця сторінка буде автоматично
   перезавантажуватись після збереження змін у файли проекту. :white_check_mark:
___
<a id="5"></a>

## <img src="https://img.shields.io/badge/Застосовані технології-A9225C?style=for-the-badge"/>

[![Technologies](https://skillicons.dev/icons?i=html,css,js,vite,nodejs)](https://skillicons.dev)
[![Tools](https://skillicons.dev/icons?i=github,git,vscode,figma,ai)](https://skillicons.dev)

## Vanilla App Template

Цей проект було створено за допомогою Vite. Для знайомства та налаштування
додаткових можливостей [звернись до документації](https://vitejs.dev/).

## Файли і папки

- Файли розмітки компонентів сторінки в папці `src/partials` та
  імпортуються до файлів `index.html` і `favorites.html`.
- Файли стилів в папці `src/css`.
- Зображення в `src/img`.

[Вгору :arrow_double_up:](#top)
