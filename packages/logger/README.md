# @robo/logger

A monorepo-ready logger for Robotic projects.

Features:
- colored console output (chalk)
- daily rotated logs
- JSONL structured logs for machines
- safe async writes
- health & perf helpers
- optional console override

## Quick start

```bash
cd packages/logger
npm i
npm run build
```

## Example usage (from any package in monorepo):
```typescript
import { initLogger, Logger } from "@robo/logger";

initLogger({ json: true, rotateDaily: true, overrideConsole: true, level: "debug" }); // optional
Logger.info("started");
```