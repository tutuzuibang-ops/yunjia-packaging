# 深圳市韵嘉包装制品有限公司官网

Next.js + Tailwind CSS bilingual responsive website for Shenzhen Yunjia Packaging Products Co., Ltd.

## Features

- Chinese and English routes: `/zh`, `/en`
- Pages: home, about, products, product details, factory, news, news details, contact
- SEO metadata, canonical links, language alternates, `sitemap.xml`, `robots.txt`
- Responsive navigation, dark mode, online inquiry form
- Reserved API routes for backend integration:
  - `GET /api/products`
  - `GET /api/news`
  - `POST /api/inquiry`

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000/zh` or `http://localhost:3000/en`.

## Backend Integration

Set these variables in `.env.local` when connecting a real admin backend:

```bash
NEXT_PUBLIC_SITE_URL=https://www.yunjiapackaging.com
ADMIN_API_BASE_URL=https://admin.example.com/api
INQUIRY_TO_EMAIL=sales@yunjiapackaging.com
```

The integration point is reserved in `app/api/inquiry/route.ts`.
