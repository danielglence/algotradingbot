# MarketLens India

A premium, demo-first Indian market intelligence and manual portfolio tracking dashboard. Demo values are visibly labelled and are not presented as live data.

## Run locally

```bash
pnpm install
pnpm dev
```

Copy `.env.example` to `.env.local` when connecting Supabase or an authorised market-data provider. Apply `supabase/migrations/001_initial.sql` to your Supabase project.

The app does not execute trades, connect to a broker, or hold funds.
