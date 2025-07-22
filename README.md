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

## Getting Started

### Prerequisites

- Node.js (v20 or later recommended)
- An API key for Google AI.

### Installation & Running Locally

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
    Create a `.env` file in the root of the project and add your Google AI API key:
    ```
    GEMINI_API_KEY=your_api_key_here
    ```

4.  **Run the development server:**
    The application consists of the Next.js frontend and the Genkit AI flows. Run both concurrently in separate terminals.

    *   **Terminal 1 (Next.js App):**
        ```bash
        npm run dev
        ```
        The app will be available at [http://localhost:9002](http://localhost:9002).

    *   **Terminal 2 (Genkit Flows):**
        ```bash
        npm run genkit:dev
        ```
        This will start the Genkit development server, allowing the Next.js app to communicate with your AI flows.

5.  **Build for production:**
    ```bash
    npm run build
    ```
