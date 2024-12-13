# Toy Robot Simulator

This is a frontend toy robot simulator application. In this application, users can move the robot within the grid and track the total number of times the robot has moved.

Click this [link](https://toy-robot-sim-aa7p.vercel.app/) to view the deployed application. This application was deployed using Vercel.

## Running in Development Mode

- Fork and clone repo
- npm install
- npm run dev
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Running Tests

- npm run test

### Design Assumptions:

- The purpose of the simulator is to have a single robot that is able to:
  - Move north/east/south/west
  - Change its direction by rotating left/right 90 degrees
  - Be repositioned on any cell in the 5x5 board by the user
  - Confined to the dimensions of the 5x5 board
- Robot's initial origin is always the south west corner of the table
- Robot's initial direction is always north
- Robot's move count always starts at 0
- Each move command moves the robot exactly one cell in its current direction
- Total move count resets to 0 when the robot is placed in a new position by a user selecting an empty cell

- Based on the aforementioned assumptions:
  - Did not have an option to place the robot outside of the 5x5 board
  - Chose not to use the robot and direction image from the Figma preview and instead used Lucide icons because:
    - Ensure consistenly styling themes and background colors
    - Maintain robot/arrow clarity and sharpness with any screen resolution using SVGs
    - Allow for smooth rotation animations
  - Implemented a rotation animation for both the robot and arrow to:
    - Provide clear visual feedback about the robot's current "facing" direction
    - Make the robot's movement direction immediately obvious
    - Create cleaner animation when direction changes
  - Did not add functionality to place a second robot because:
    - Requirements specificied "toy robot" (singular)
    - Enables clear tracking of robot state (direction, position, and move count)

### Features:

- Users change the direction of the robot by clicking the 'Left' (90 degrees counter-clockwise) / 'Right' (90 degrees clockwise) buttons or using the 'left'/'right' arrow keys
- Users can freely move the robot a single space in the direction it is facing by clicking 'Move' button or pressing the 'enter' key
- The robot cannot move or be placed outside the bounaries of the 5x5 board


### Extra Features:

- The application will track the total move count of the robot in the report (note: clicking on an empty cell will place the robot in that cell and reset the total moves count)
- Only valid moves will count towards total move count
- Invalid moves (moves that would cause the robot to "fall off" the board) are:
  - Ignored without increment total move count
  - Example: Robot is at top edge (y = 0) facing north, attempting to move will not change the robot position or increment total move count


## About the Project

[![Typescript][TS.js]][TS-url][![Next.js][Next.js]][Next-url][![React][React.js]][React-url][![Tailwind CSS][Tailwind CSS]][Tailwind-url]

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Tailwind CSS]: https://img.shields.io/badge/tailwindcss-0F172A?&logo=tailwindcss
[Tailwind-url]: https://tailwindcss.com/
[TS.js]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[TS-url]: https://www.typescriptlang.org/
[React.js]: https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[React-url]: https://reactjs.org/

