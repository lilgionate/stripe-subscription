<h1 align="center">Stripe Subscriptions System</h1>

![Demo App](/public/demo-for-readme.png)

[Video Tutorial on Loom](https://www.loom.com/share/f0ae978fbbf543049b1b40516a3da299?sid=fef7e39a-720c-4e86-9cc0-133003107b2b)

Some Features:

-   ⚛️ Tech Stack: Next.js 14, TypeScript, Prisma, MongoDB, Stripe
-   🔐 Authentication with Kinde Auth
-   💸 Monthly and Annually Subscriptions with Stripe
-   💵 Building a Stripe Billing Portal
-   🛠️ What are Webhooks
-   🔄 Stripe Event Types
-   🌗 Light/Dark Mode
-   🌐 Deployment

### Setup .env file

```js
DATABASE_URL=<get_your_mongo_db_url>

KINDE_CLIENT_ID=
KINDE_CLIENT_SECRET=
KINDE_ISSUER_URL=
KINDE_SITE_URL=
KINDE_POST_LOGOUT_REDIRECT_URL=
KINDE_POST_LOGIN_REDIRECT_URL=

STRIPE_MONTHLY_PLAN_LINK=<get_from_stripe>
STRIPE_YEARLY_PLAN_LINK=<get_from_stripe>

STRIPE_MONTHLY_PRICE_ID=<get_from_stripe>
STRIPE_YEARLY_PRICE_ID=<get_from_stripe>

STRIPE_SECRET_KEY=<get_from_stripe>
STRIPE_WEBHOOK_SECRET=<get_from_stripe>
NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL=<get_from_stripe>
```

### Install dependencies

```shell
npm install
```

### Start the app

```shell
npm run dev
```

## `Timestamps` for your convenience 👇

-   00:00 Introduction to Subscription System
-   01:39 Overview of the Solution
-   06:39 Behind the Scenes Overview
-   08:15 Business Benefits of Integration

### I'll see you in the next one! 🚀
