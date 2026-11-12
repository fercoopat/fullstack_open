# Part 2: Communicating with server

React + Vite application for part 2 of [Full Stack Open](../README.md).

## Run

```bash
pnpm install
pnpm dev
```

The phonebook exercises (2.6–2.17) also need the JSON server:

```bash
pnpm server   # json-server on http://localhost:3001, data in db.json
```

## Environment variables

Exercise 2.20 fetches weather data from OpenWeatherMap and needs an API key.
Copy `.env.example` to `.env` and set the key:

```bash
cp .env.example .env
# edit .env: VITE_SOME_KEY=your-openweathermap-api-key
```

`.env` is ignored by git; never commit the key.

## Exercises

Progress per exercise is tracked in [EXERCISES.md](../EXERCISES.md).
