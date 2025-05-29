# Portfolio
This project serves as a showcase of my skills, projects, and a way to get in touch with me. Built with modern web technologies, it aims to provide a clean, responsive, and engaging user experience.

## 🚀 Tech Stack used:
This project is built using a modern React stack:

* **[React.js](https://react.dev/)** - A JavaScript library for building user interfaces.
* **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework for rapidly styling.
* **[Material-UI (MUI)](https://mui.com/)** - React components for faster and easier web development, including icons.
* **[React Router DOM](https://reactrouter.com/en/main)** - For declarative routing within the application.
* **[Vercel](https://vercel.com/)** - For seamless deployment and hosting.

## ✨ Features

* **Responsive Design:** Optimized for seamless viewing across various devices (desktops, tablets, mobile phones).
* **Dynamic Typewriter Effect:** Engaging animation for skill highlights on the hero section.
* **Projects Showcase:** Dedicated section to display my key projects with descriptions and links to live demos and GitHub repositories.
* **Skills Section:** Highlights my technical proficiencies.
* **Integrated Resume Viewer:** A dedicated page to view and download my resume (PDF).
* **Smooth Navigation:** Utilizes React Router DOM for a single-page application experience.

## 📦 Installation & Setup

To get a local copy of this project up and running, follow these simple steps.

### Prerequisites

* Node.js (LTS version recommended)
* npm (comes with Node.js) or Yarn

### Steps

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/](https://github.com/)[YourGitHubUsername]/Portfolio.git
    cd Portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env` file in the root directory of the project. Add the following variables, replacing the placeholder values with your actual links and email:

    ```dotenv
    REACT_APP_LINKEDIN_LINK=[Your LinkedIn Profile URL]
    REACT_APP_GITHUB_LINK=[Your GitHub Profile URL]
    REACT_APP_MAIL=mailto:[your.email@example.com]
    ```

4.  **Place your Resume (PDF):**
    Ensure your resume PDF file is placed inside the `public/` folder and is named as `Resume.pdf`. The application references it directly from this location.

5.  **Start the development server:**
    ```bash
    npm start
    ```
    The application will open in your browser at `http://localhost:3000`.

## 🤝 Contributing

While this is a personal portfolio, I'm always open to feedback and suggestions! If you have any ideas for improvements or find a bug, feel free to:

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.
