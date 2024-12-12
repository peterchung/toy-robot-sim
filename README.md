# Toy Robot Simulator

This is a frontend toy robot simulator application. In this application, users can move the robot within the grid and track the total number of times the robot has moved.

Click this [link](placeholder) to view the deployed application. This application was deployed using Vercel.

## Running in Development Mode

- Fork and clone repo
- npm install
- npm run dev
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Running Tests

NOTE: Running npm test results in an error due to issues with Jest (via Babel) being unable to process the JSX syntax. Next.js recently upgraded to version 15.1.0, which is still in RC. Users have documented issues with using Jest in the latest version.

- npm test

## About the Project

[![Typescript][TS.js]][TS-url][![Next.js][Next.js]][Next-url][![React][React.js]][React-url][![Tailwind CSS][Tailwind CSS]][Tailwind-url]

### Features:

- Users change the direction of the robot by clicking the 'Left' (90 degrees counter-clockwise) / 'Right' (90 degrees clockwise) buttons or using the 'left'/'right' arrow keys
- User can move the robot in the direction it is facing by clicking 'Move' or pressing the 'enter' key
- The application will track the total number of moves the robot has made (note: clicking on an empty cell will place the robot in that cell and reset the total number of moves)

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Tailwind CSS]: https://img.shields.io/badge/tailwindcss-0F172A?&logo=tailwindcss
[Tailwind-url]: https://tailwindcss.com/
[TS.js]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[TS-url]: https://www.typescriptlang.org/
[React.js]: https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[React-url]: https://reactjs.org/

