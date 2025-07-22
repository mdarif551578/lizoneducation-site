# Lizon IELTS Hub

This is a comprehensive website for Lizon Education, an IELTS coaching center. It's built with Next.js and features an AI-powered study assistant to provide personalized tips to students.

## Key Features

- **Static Pages**: Home, About Us, Courses, and Contact pages built with Next.js App Router.
- **AI Chat Interface**: An interactive chat bot powered by Google's Gemini model via Genkit that provides personalized IELTS study tips for different sections (Reading, Writing, Speaking, Listening).
- **Responsive Design**: Fully responsive layout using Tailwind CSS and shadcn/ui components.
- **Modern UI**: Clean and modern user interface with light and dark modes.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **AI**: [Genkit](https://firebase.google.com/docs/genkit)
- **UI**: [React](https://react.dev/), [shadcn/ui](https://ui.shadcn.com/), [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Installation and Local Development

Follow these steps to run the project on your local machine.

### Prerequisites

- Node.js (v20 or later recommended)
- An API key for Google AI.

### Steps

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd <repository_name>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of your project by copying the example. Then, add your Google AI API key.
    ```bash
    cp .env.example .env
    ```
    Now, open the `.env` file and add your key:
    ```
    GEMINI_API_KEY=your_google_ai_api_key_here
    ```

4.  **Run the development server:**
    The application consists of the Next.js frontend and the Genkit AI flows. You need to run both concurrently in separate terminals for the AI features to work locally.

    *   **Terminal 1 (Next.js App):**
        ```bash
        npm run dev
        ```
        The app will be available at [http://localhost:9002](http://localhost:9002).

    *   **Terminal 2 (Genkit Flows):**
        ```bash
        npm run genkit:dev
        ```
        This starts the Genkit development server, allowing the Next.js app to communicate with your AI flows.

## Static Site Deployment (e.g., on Cloudflare Pages)

This project is configured for static site generation, which means you can deploy it to any static hosting provider like Cloudflare Pages, Vercel, or Netlify.

1.  **Build the static site:**
    Run the build command. This will generate a static version of your site in the `out` directory.
    ```bash
    npm run build
    ```

2.  **Deploy to Cloudflare Pages:**
    - Log in to your Cloudflare dashboard.
    - Go to **Workers & Pages** > **Create application** > **Pages** > **Upload assets**.
    - Drag and drop the `out` folder generated in the previous step into the upload area.
    - Click **Deploy site**. Cloudflare will handle the rest!

    Alternatively, you can connect your Git repository (e.g., on GitHub) to Cloudflare Pages for automatic deployments.
    - **Build command:** `npm run build`
    - **Build output directory:** `out`
