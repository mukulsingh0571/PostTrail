This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

PostTrail is a full-stack blog website, with features like user authentication, rich text editing, category-based posts and image uploads with real-time storage updates.

## Getting Started

1. Install all the dependencies

```bash
npm install
```

2. Set-up .env file (.env.example mentioned below)

3. Now, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Tech-Stack Used

- Next.js
- CSS
- MongoDB
- Prisma
- FireBase

## .env.example

**GOOGLE_ID**=*your_google_id*

**GOOGLE_SECRET**=*your_google_secret_code*

**NEXTAUTH_URL**=*http://localhost:3000* or *your_vercel_deployment_url**(for vercel deployment)*

**NEXTAUTH_SECRET**=*your_secret_id*

**DATABASE_URL**=*mongidb_connection_string*

**FIREBASE**=*firebase_code*

**NEXT_PUBLIC_BASE_URL**=*http://localhost:3000* or *your_vercel_deployment_url**(for_vercel_deployment)*

## Live website deployed on Vercel

[PostTrail](https://post-trail-j7xa.vercel.app/)
