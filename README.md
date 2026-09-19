# EventHub KZ

Платформа для организаторов и участников событий: бизнес-форумы, хакатоны, волонтёрские проекты, FLL/FTC и соревнования.

## Возможности

### Участникам
- каталог, поиск и фильтры;
- регистрация и избранное;
- QR-билеты и личный раздел;
- профили организаций и бесплатный доступ.

### Организаторам
- создание и публикация событий;
- управление вместимостью и участниками;
- QR check-in, статусы и экспорт;
- аналитика регистраций, заполнения и дохода;
- тарифы Start, Pro и Enterprise.

## Локальный запуск

1. Установите Node.js 20+.
2. Откройте папку в VS Code.
3. Скопируйте `.env.example` в `.env` и заполните Firebase-параметры.
4. Выполните:

```bash
npm start
```

5. Откройте `http://localhost:3000`.

## Firebase

1. В Firebase Authentication включите Google и Email/Password.
2. Создайте Cloud Firestore.
3. Опубликуйте правила из `firestore.rules`.
4. Добавьте `localhost` и домен Render в Authorized domains.

## GitHub

```bash
git init
git branch -M main
git add .
git commit -m "Build EventHub KZ platform"
git remote add origin https://github.com/YOUR_USERNAME/NIS-app.git
git push -u origin main
```

## Render

- Build command: оставить пустым
- Start command: `npm start`
- Health check: `/api/health`
- Добавьте все Firebase-переменные из `.env.example`

Можно использовать **New → Blueprint**, так как проект содержит `render.yaml`.

## Бизнес-модель

- участники: бесплатно;
- Start: бесплатно для небольших НКО и клубов;
- Pro: плановая цена 14 900 ₸/месяц;
- Enterprise: индивидуальная цена;
- дополнительные источники: 3% сервисный сбор с платных билетов, продвижение и спонсорские размещения.

Цены и показатели в прототипе являются проектными предположениями, а не действующими коммерческими условиями.
