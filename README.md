![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=white)

# SvelteKit Authentication UI

Modern, responsive login and registration page built with SvelteKit and Tailwind CSS. Provides a clean, accessible authentication interface with both login and registration functionality. Perfect for developers looking for a ready-to-use authentication UI that can be easily integrated into any SvelteKit project.

**Keywords**: sveltekit, login page, authentication, registration, tailwind css, responsive design, dark mode, typescript, svelte 5, authentication ui, user registration, sveltekit-auth, auth-ui, login-template

## Overview

This project provides a complete authentication UI solution built with modern web technologies. The login and registration forms feature:

- Responsive layout that works on all device sizes
- Dark mode support with smooth transitions
- Form validation and user feedback
- Accessible design following WCAG guidelines
- Clean, modern UI with attractive gradients
- Ready-to-use components that can be easily customized

## Screenshots

![Login Page Screenshot](src/lib/assets/ss.png)

*Note: Replace with actual screenshots of your login and registration pages*

## Features

- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Dark Mode Support**: Automatic dark mode with toggle capability
- **Form Validation**: Client-side validation for both login and registration forms
- **Modern UI**: Clean and attractive design with gradient accents
- **Accessibility**: Built with accessibility best practices in mind
- **Svelte 5**: Leverages the latest Svelte features
- **TypeScript Support**: Full type safety throughout the application

## Tech Stack

- [SvelteKit](https://kit.svelte.dev/) - Next generation framework for building web applications
- [Svelte 5](https://svelte.dev/) - The magical disappearing UI framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for rapid UI development
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [ESLint](https://eslint.org/) - Pluggable JavaScript linter
- [Prettier](https://prettier.io/) - Opinionated code formatter

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, pnpm, or yarn

### Quick Start

```bash
# Clone the repository
git clone <REPOSITORY_URL>

# Navigate to the project directory
cd sveltekit-login-page

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/sveltekit-login-page.git
   cd sveltekit-login-page
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Development

To start a development server:

```sh
npm run dev
```

To start the development server and open the app in a new browser tab:

```sh
npm run dev -- --open
```

### Building for Production

To create a production version of your app:

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
├── routes/                 # SvelteKit routes
│   ├── +page.svelte       # Homepage
│   ├── login/
│   │   └── +page.svelte   # Login page
│   ├── register/
│   │   └── +page.svelte   # Registration page
│   └── +layout.svelte     # Root layout
├── lib/                   # Shared components and utilities
│   └── assets/            # Static assets (images, icons)
├── app.html               # Main HTML template
└── app.d.ts               # TypeScript declarations
```

## Pages

### Home Page (`/`)
- Simple welcome page with a link to the login page
- Responsive design with a call-to-action button

### Login Page (`/login`)
- Username and password fields
- Form validation
- Forgot password link
- Link to registration page
- Success/error messaging

### Registration Page (`/register`)
- Full name, email, password, and confirm password fields
- Password confirmation validation
- Form validation
- Link to login page
- Success/error messaging

## Styling

The application uses Tailwind CSS for styling with:
- Responsive utility classes
- Dark mode support via `dark:` prefixes
- Custom gradient backgrounds
- Modern form elements with focus states
- Consistent spacing and typography

## Accessibility

- Semantic HTML elements
- Proper labeling of form inputs
- Sufficient color contrast
- Focus management for keyboard navigation
- Screen reader friendly content

## Customization

### Colors
To modify the color scheme, update the Tailwind CSS configuration in `tailwind.config.js`.

### Branding
- Update the logo in `src/lib/assets/logo.png`
- Modify the favicon in `src/lib/assets/favicon.svg`

### Validation Logic
- Update validation rules in the respective Svelte components
- Add server-side validation as needed

## Deployment

To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment (e.g., Vercel, Netlify, Node server, etc.).

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [SvelteKit](https://kit.svelte.dev/)
- Uses [Tailwind CSS](https://tailwindcss.com/) for styling
- Icons from [Svelte Iconify Components](https://github.com/svelteuidev/svelte-iconify-components)