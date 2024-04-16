# Isaac Helper API

## Description

I did this project [Isaac_helper](https://github.com/AlexandreTheDwarf/Isaac_Helper) and encoded a lot of data in json, thinking about creating an API to share with others and at the same time learn the basics of node.js and express.

Isaac Helper API is a simple Node.js application that provides data about various rooms, items, and pickups in the game Binding of Isaac the description of items is in french because i did isaac helper to help my wife with the game and she doesn't speak english and can't find for the Nintendo Switch of the game and other idea.

## Getting Started
To get started with Isaac Helper API, follow these steps:

1. Clone this repository to your local machine.
2. Install Node.js if you haven't already.
3. Install dependencies by running `npm install`.
4. Start the server by running `node index.js`.

## Usage
### Endpoints

- `/treasure`: Get data about treasure room items.
- `/curse`: Get data about curse room items.
- `/secret`: Get data about secret room items.
- `/shop`: Get data about shop items.
- `/boss`: Get data about boss room items.
- `/devil`: Get data about devil room items.
- `/angel`: Get data about angel room items.
- `/library`: Get data about library items.
- `/planetarium`: Get data about planetarium items.
- `/golden_chest`: Get data about golden chest items.
- `/red_chest`: Get data about red chest items.
- `/trinkets`: Get data about trinket items.
- `/pickups`: Get data about pickups items.

### Example
To get data about treasure room items, make a GET request to `/treasure`.

```bash
curl http://localhost:3000/treasure
```



