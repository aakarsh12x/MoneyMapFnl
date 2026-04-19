MoneyMap — AI-Powered Expense And Investment Tracker

MoneyMap is a modern expense tracking web app built with **Next.js**, designed to simplify personal finance management with the help of **AI insights**, a **responsive UI**, and secure authentication.

## 🚀 Features

- 🎨 **Responsive UI** — Built using [shadcn/ui](https://ui.shadcn.com/) for a clean, fast, and mobile-friendly experience. Optimized for performance, reducing load time by 20%.
- 🤖 **AI Budgeting Insights** — Integrated AI-powered analysis to provide personalized saving and spending recommendations.
- 🔐 **Secure Auth System** — Handles 50+ logins per day with **zero breaches**, ensuring your financial data remains safe.
- 🧩 **Supabase Backend** — Used for managing real-time, scalable, and secure storage of user data and transactions.

## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [React](https://react.dev/)
- **UI Framework**: [shadcn/ui](https://ui.shadcn.com/), Tailwind CSS
- **Authentication**: Supabase Auth
- **Database**: Supabase PostgreSQL
- **AI Integration**: Gemeni API

## 📦 Getting Started

```bash
cd moneymap
npm install
npm run dev


---

##

---

## System Design

```mermaid
graph TB
    subgraph Client["Client Layer (Next.js + React)"]
        DASH[Expense Dashboard\nCharts & Trends]
        TXN[Transaction Manager\nAdd Income / Expenses]
        AI_UI[AI Advisor UI\nInsights & Recommendations]
    end

    subgraph Backend["Backend (Supabase + Drizzle ORM)"]
        SBAUTH[Supabase Auth\nUser Sessions]
        SBDB[(Supabase PostgreSQL\nTransactions & Budgets)]
        DRIZZLE[Drizzle ORM\nType-Safe Queries]
        BUDGET[Budgeting Engine\nLimit Tracking]
    end

    subgraph AI["AI Layer"]
        GEMINI[Gemini API\nSpending Analysis & Tips]
    end

    DASH -->|Fetch History| DRIZZLE
    TXN -->|Log Transaction| DRIZZLE
    AI_UI -->|Request Insights| GEMINI
    DRIZZLE -->|Read/Write| SBDB
    SBDB -->|Real-time Updates| DASH
    SBAUTH -->|Auth Token| DRIZZLE
    BUDGET -->|Check Limits| SBDB
    SBDB -->|Transaction History| GEMINI
    GEMINI -->|Personalized Tips| AI_UI
```
