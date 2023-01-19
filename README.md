# Remote control with Node.js, ws, nutjs, Jimp

## Description

Remote control backend using nutjs.dev library and websocket. for [RSSchool Node.js course 4Q2022](https://rs.school/nodejs/) according to [the task assignment](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/remote-control/assignment.md).

## Getting started
- Install 18 LTS version of [Node.js](https://nodejs.org/en/)
- Clone the repository
```
    $ git clone https://github.com/vzakharenkova/remote-control.git
```
- Install dependencies
```
cd REMOTE-CONTROL
npm install
```
- Run the project in:
  - development mode
  ```
  npm run start:dev
  ```
    - production mode
  ```
  npm run start:prod
  ```
    - multi mode (horizontal scaling for application)
  ```

## Note
By default server and websocket are started on port `8080`. If you change the port, you should connect to websocket by hand using `WebSocket window` on UI.

