# SvelteKit Login Page

A modern, fully-featured authentication system built with SvelteKit and Tailwind CSS. This project provides a complete login, registration, and password recovery solution with a beautiful, responsive UI and dark mode support.

## Features

- **Authentication Flow**: Complete login, registration, and password recovery functionality
- **Responsive Design**: Works beautifully on all device sizes
- **Dark Mode**: Automatic dark/light mode with system preference detection
- **Form Validation**: Client and server-side validation with Zod
- **Beautiful UI**: Modern design with smooth animations and transitions
- **SvelteKit v5**: Built with the latest SvelteKit features and best practices
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first styling with custom configuration

## Pages & Routes

- **Home** (`/`): Landing page with call-to-action for registration
- **Login** (`/login`): Secure login form with username/email and password
- **Register** (`/register`): User registration form with full name, email, and password
- **Forgot Password** (`/forgot-password`): Password recovery functionality

## Technologies Used

- [SvelteKit](https://kit.svelte.dev/) - Framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [Zod](https://zod.dev/) - Schema validation
- [Svelte 5](https://svelte.dev/) - Component framework

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, pnpm, or yarn

### Installation

1. Clone or download this repository
2. Install dependencies:

```sh
npm install
```

### Development

To start the development server:

```sh
npm run dev
```

Or to open the app in a new browser tab:

```sh
npm run dev -- --open
```

### Building for Production

To create a production version of the app:

```sh
npm run build
```

You can preview the production build with:

```sh
npm run preview
```

## Project Structure

```
src/
├── app.html          # HTML template
├── app.d.ts          # TypeScript declarations
├── lib/              # Shared components, utilities, and server-side code
│   ├── assets/       # Static assets (images, icons)
│   └── server/       # Server-side utilities (database)
├── routes/           # Page routes and layouts
│   ├── +layout.svelte # Root layout
│   ├── +page.svelte  # Home page
│   ├── login/        # Login page
│   ├── register/     # Registration page
│   └── forgot-password/ # Password recovery
└── routes
```

## Database

This project uses a simple JSON-based database implementation in `src/lib/server/db.ts` for demonstration purposes. In a production environment, you would replace this with a proper database system (PostgreSQL, MySQL, MongoDB, etc.) and implement proper password hashing.



## Customization

- **Styling**: Modify `src/routes/layout.css` to adjust Tailwind configuration
- **Assets**: Add or modify images in `src/lib/assets/`
- **Forms**: Update validation schemas in `+page.server.ts` files
- **Layout**: Modify `+layout.svelte` for global layout changes

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run check` - Type check and validate components
- `npm run format` - Format code with Prettier
- `npm run lint` - Check code formatting and linting