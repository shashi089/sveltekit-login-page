# SvelteKit Auth Example

[![Svelte](https://img.shields.io/badge/Svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)](https://svelte.dev/)
[![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)](https://kit.svelte.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern, fully-featured authentication system built with SvelteKit and Tailwind CSS. This project provides a complete login, registration, and password recovery solution with a beautiful, responsive UI and dark mode support.

**Keywords:** svelte auth, sveltekit authentication, login system, user authentication, sveltekit starter, authentication template, typescript auth, tailwind css login

## Quick Start

```bash
# Clone the repository
git clone https://github.com/your-username/sveltekit-auth-example.git

# Navigate to project directory
cd sveltekit-auth-example

# Install dependencies
npm install

# Start development server
npm run dev
```

## Demo

Here are screenshots of the authentication pages:

*Demo screenshots coming soon*

You can see the beautiful UI with dark mode support and responsive design on all pages.

## Features

- **Authentication Flow**: Complete login, registration, and password recovery functionality
- **Responsive Design**: Works beautifully on all device sizes
- **Dark Mode**: Automatic dark/light mode with system preference detection
- **Form Validation**: Client and server-side validation with Zod
- **Beautiful UI**: Modern design with smooth animations and transitions
- **SvelteKit v5**: Built with the latest SvelteKit features and best practices
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first styling with custom configuration
- **JSON Database**: Simple database implementation for demonstration
- **Server Actions**: Modern SvelteKit server-side form handling
- **Session Management**: Cookie-based session handling

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

## Contributing

Feel free to open issues and submit pull requests. All contributions are welcome!

## Resources

- [SvelteKit Documentation](https://kit.svelte.dev/docs)
- [Svelte Documentation](https://svelte.dev/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Zod Documentation](https://zod.dev/)
- [SvelteKit Authentication Guide](https://kit.svelte.dev/docs#using-actions)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run check` - Type check and validate components
- `npm run format` - Format code with Prettier
- `npm run lint` - Check code formatting and linting