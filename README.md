# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

![Main page](https://i.imgur.com/xpHJ8Bh.png)
![component page](https://i.imgur.com/BL0e3lP.png)

## Used stack


- [Next.js](https://nextjs.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)
- [Planetscale](https://planetscale.com/)

## Instructions
Crate .env file with planetscale connection url
```
DATABASE_URL=''
```
Start with:
```
npm install
```
To push schemas:
```
npx prisma db push
```
Live preview of database:
```
npx prisma studio
```


You can run src/server/mock/prismaData.js for database mock data