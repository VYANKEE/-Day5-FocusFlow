# FocusFlow - Pomodoro Productivity Application

Day 5: 45 Days of Code Challenge

FocusFlow is a professional productivity tool designed to help users manage their time effectively using the Pomodoro technique. The application features a distraction-free interface, precise timer logic, and persistent session tracking to support deep work and intentional breaks.

LIVE DEMO : https://day5-focus-flow.vercel.app/
---

## Project Overview

- Project Name: FocusFlow
- Repository Name: -Day5-FocusFlow
- Application Type: Single Page Application (SPA)
- Core Methodology: Pomodoro Technique (25 minutes focus, 5 minutes break)
- Goal: To develop a robust time-management tool with custom interval logic and state persistence.

## Key Features

- Custom Timer Engine: Implements accurate countdown logic using React hooks, ensuring precise time management without drift.
- Multi-Mode Functionality: Seamlessly switches between Focus Mode, Short Break, and Long Break durations.
- Session Persistence: Utilizes LocalStorage to maintain the count of completed sessions even after the browser is closed or refreshed.
- Distraction-Free UI: Features a minimal, dark-themed user interface designed to reduce eye strain and maintain user focus.
- Responsive Layout: Fully optimized for desktop, tablet, and mobile devices.

## Technical Stack

- Frontend Framework: React.js (Vite)
- Styling: Pure CSS (CSS Variables, Flexbox, Glassmorphism effects)
- State Management: React Hooks (useState, useEffect)
- Icons: Lucide React

## Project Structure

- src/components/Hero.jsx: The landing section that introduces the application value proposition.
- src/components/Info.jsx: An educational section explaining the Pomodoro productivity method.
- src/components/Timer.jsx: The core component handling the timer logic, state transitions, and user controls.
- src/App.jsx: The main layout component that orchestrates the application structure.

## Installation and Setup

To run this project locally, follow the steps below:

1. Clone the Repository
   git clone https://github.com/VYANKEE/-Day5-FocusFlow.git

2. Navigate to the Directory
   cd -Day5-FocusFlow

3. Install Dependencies
   npm install

4. Start the Development Server
   npm run dev

## Learning Outcomes

- Advanced usage of the useEffect hook for managing time-based side effects.
- Implementation of cleanup functions to prevent memory leaks in interval-based applications.
- Practical application of browser LocalStorage for data persistence.
- Structuring a React application for maintainability and scalability.

---

Developed by VYANKEE
