## Getting Started

First, first you need to setup the proper .env file:

```
# local supabase
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=<ANON_KEY>
NEXT_PUBLIC_GRAPHQL_API_URL=http://localhost:54321/graphql/v1
## Google auth
SUPABASE_AUTH_GOOGLE_CLIENT_ID=<GOOGLE_CLIENT_ID>
SUPABASE_AUTH_GOOGLE_SECRET=<GOOGLE_SECRET>
SUPABASE_AUTH_GOOGLE_CALLBACK=http://localhost:54321/auth/v1/callback
```

Then, run supabase:

```bash
npx supabase start
```

Now you can run the project locally:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Local supabase

Make sure to create a .env.local with the supabase details:

NEXT_PUBLIC_SUPABASE_URL=<SUPABASE_URL>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<SUPABASE_ANON_KEY>
NEXT_PUBLIC_GRAPHQL_API_URL=<SUPABASE_GRAPHQL_API>

```bash
# link the supabase project
npx supabase link --project-ref <PROJECT_ID>
# pull latest prod changes
npx supabase db pull
# sync local db with prod
npx supabase db reset
# start local instance
npx supabase start

# Undo changes
npx supabase stop --no-backup
npx supabase unlink
```

## Push local supabase changes

```bash
npx supabase db diff -f 'changes_filename'
npx supabase db push
```

## GraphQL Codegen

Project needs to run codegen when there are changes in schemas, the only way I
manage to make it work was with:

1. Setup local instance of supabase, needs to be up to date to pull the schemas
2. Write the graphql queries and mutations (use getSSRClient for SSR)
3. Run graphql codegen

```bash
npm run codegen
# or watch with
npm run codegen-watch
```

## Dedup graphql references

When there's a reference to multiple foreign keys from the same schema, the
graphql api overrides the references into a single one, you need to dedup the
reference by doing:

```
comment on constraint chat_user1_id_fkey
  on public.chat
  is E'@graphql({"foreign_name": "user1", "local_name": "chat_user1"})';

comment on constraint chat_user2_id_fkey
  on public.chat
  is E'@graphql({"foreign_name": "user2", "local_name": "chat_user2"})';
```
