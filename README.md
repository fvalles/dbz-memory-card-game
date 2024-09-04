# DBZ Memory Card Game

## General information

This repository holds a **Dragon Ball Z memory card game**. 🐉

It was developed with **React JS**, **Typescript**, **Emotion styled Components**! 🚀

The app can be executed writing `npm run start` from the root directory

**[👉🏼 Go to DBZ Memory Card Game on Netlify 👈🏼] (https://main--dbz-memory-card-game.netlify.app/)**

## Coding details

- **Reusable components** were created. They are located in `src/components`.
- **Typographic reusable components** are located in `src/components/typography`.
- **A color palette** was created inside of `src/theme` and shared through a `<ThemeProvider />` to all Styled Components.
- `Local Storage` was used to persist the user best score.
- **Custom DBZ favicon** was used.
- **Helpers** were created inside of `src/helpers`.
- **Media queries** were implemented based on different breakpoints to support responsive web design.
- A **Custom Modal** was implemented to inform the user that they completed the game.
- Main Components
  - **Header**: A component that displays the title of the game and a reset button.
  - **CardGrid**: A component that displays the grid of cards.
  - **Card**: A component that represents a single card.
- Personalization
  - Both the styled components theme and the modal component were created
