# Project Context for Agents

This project is a Next.js blog starter built with Prismic (headless CMS) and Tailwind CSS.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **CMS**: Prismic
- **Package Manager**: npm

## Project Structure
- `src/app/`: Contains the Next.js App Router routing structure (`layout.js`, `page.js`, dynamic routes like `[uid]`, `articles`, API routes, etc.).
- `src/components/`: Reusable React components (e.g., `Header.js`, `Footer.js`, `Layout.js`, `Article.js`, `PrismicRichText.js`).
- `src/slices/`: Prismic Slices, which are modular components used to build pages (e.g., `Hero`, `CallToAction`, `Image`, `Quote`, `Text`).
- `customtypes/`: JSON definitions for Prismic custom types.
- `tailwind.config.js`: Tailwind CSS configuration.

## Key Development Commands
- `npm run dev`: Starts the Next.js development server concurrently with the Prismic Slice Machine.
- `npm run build`: Builds the application for production.
- `npm run lint`: Runs ESLint check.
- `npm run format`: Runs Prettier to format code.

## Guidelines for Agents
1. **Routing and Layout**: The app uses Next.js App Router. Global layout is defined in `src/app/layout.js`.
2. **Styling**: All styling should be implemented using Tailwind CSS utility classes. When modifying stylistic aspects of components, look in `src/components/` and `src/slices/`.
3. **Prismic Slices**: Pages are often constructed using combinations of slices. If modifying how page content blocks are rendered, investigate `src/slices/`.
4. **Rich Text**: Prismic rich text is rendered using `@prismicio/react` and custom components in `src/components/PrismicRichText.js`.
5. **Node Version**: Ensure compatibility with Node v24.8.x (as per `.nvmrc`).
