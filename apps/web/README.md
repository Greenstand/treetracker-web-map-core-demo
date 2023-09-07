# Web Map Demo


## Rules of this project

- The files in the `models` folder can import any other files in the `models` folder.

- The files in the `models` folder can not import files outside it under current project, for example: `states` folder, and `components` folder.

- The files in the `models` folder can not import lib that is platform-specific to web or native, for example: `next`, `react-native`.

- Other folders can import anything in the `models` folder.

- Don't recommend to import recoil state directly in the `models` folder, if we need state managed by recoil but don't want to put it into the `model`, we can put it in the `states` folder.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
