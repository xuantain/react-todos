# Todo App Front End

## Installation

Before using this project, make sure you have `Docker CLI` version `1.27.0` or
higher, with built-in `compose` support.

```
git clone https://github.com/xuantain/react-todos.git
```

The command above clones the project into the `docker-vscode-frontend` folder.
You can navigate to it and check out the scenarios below.

## Production

Build the production image and run it.

```
docker compose -f docker/production.yml up --build
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Development

Build the development image and run it with the host's `UID` and `GID`.

```
UID=$(id -u) GID=$(id -g) docker compose -f docker/development.yml up --build
```

Open [http://localhost:53000](http://localhost:53000) to develop inside the
container with Visual Studio Code directly in your browser.

Install project dependencies.

```
npm install
```

Run the app in the development mode.

```
npm run dev
```

Open [http://localhost:3000/](http://localhost:3000/) to view it in your
browser.

## Related Projects

- [Docker VSCode for Back End Development](https://github.com/VienDinhCom/docker-vscode-backend)
- [Docker VSCode for Front End Development](https://github.com/VienDinhCom/docker-vscode-frontend)
- [Docker VSCode for Full Stack Development](https://github.com/VienDinhCom/docker-vscode-fullstack)
