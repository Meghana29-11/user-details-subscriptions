# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# 📦 Subscriptions UI
A simple React.js app that recreates a Figma design for displaying subscription data with status and sync icons. This project demonstrates clean component structure, conditional rendering, and basic unit testing.
---
## 🧰 Tech Stack
- **React.js** (via Create React App)
- **Vanilla CSS** (no frameworks like Tailwind)
- **Jest** & **React Testing Library** (for unit testing)
---
## 📁 Project Structure
subscriptions-ui/
├── public/
├── src/
│   ├── components/
│   │   └── SubscriptionCard.js
│   │   └── SubscriptionCard.test.js
│   │   └── SubscriptionList.js
│   │   └── SubscriptionList.test.js
│   ├── styles/
│   │   └── SubscriptionCard.css
│   │   └── SubscriptionList.css
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   ├── index.css
│   ├── jest.config
│   ├── reportWebVitals.js
├── README.md
├── package-lock.json
└── package.json
---
## 🚀 Getting Started
### Clone the repo
```bash
git clone https://github.com/Meghana29-11/user-details-subscriptions.git
cd user-details-subscriptions

Install dependencies

### `npm install`
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.
The app will open at http://localhost:3000
⸻

✅ Features
• Displays a list of subscriptions with status and sync indicators.
• Icons and color styles for:
• Status: Active, Suspended, Expired
• Sync: In sync, Out of sync, Not found
• Clean layout and accessible semantic HTML.
• Styled with plain CSS.
⸻

🧪 Unit Testing
Tests are written using Jest and React Testing Library.
To run tests:
### `npm test`

