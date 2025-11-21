# Changelog

All notable changes to this project will be documented in this file.

---

## [0.1.0] – First-Level Bot Implementation

### 🚀 Database Layer
- Added PostgreSQL as the main database engine.
- Integrated Prisma ORM and generated initial client.
- Implemented core database models:
  - `Ticket`
  - `TicketPanel`
- Added database service for create/find/update/delete operations.

---

### 🪵 Logger System
- Added `@robo/logger` package for unified logging.
- Introduced log levels:
  - info, debug, warn, error, success, database, perf, health
- Added daily log rotation.
- Added optional JSONL structured logs.
- Added safe file-append with auto directory recovery.
- Added console override mode for global logging.

---

### 🎫 Ticket System (Level 1)
- Implemented ticket creation (form + no-form).
- Added ticket closing logic with permission validation.
- Added database checks to ensure one open ticket per user per panel.
- Introduced safe reply/defer wrappers to avoid Discord interaction errors.
- Added automatic data cleanup when ticket channels are deleted.

---

### ⚙️ Configuration
- Added `tsconfig.base.json` for monorepo-wide TypeScript settings.
- Updated package-level tsconfigs to extend the base config.
- Cleaned build outputs to use `dist/` across all packages.

---

### 🔧 CI Pipeline (Partial)
- Added initial GitHub Actions workflow:
  - Install dependencies
  - Lint
  - Build
- CI structure prepared for test & deploy steps.

---

## Notes
This release represents the full completion of the first development level for the bot in `@develop/bot`.  
Further levels will build on this foundation by adding commands, features, monitoring, and dashboard integration.

