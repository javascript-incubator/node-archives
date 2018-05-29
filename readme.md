# COKE 💰

_A New Coin on the streets._

**Cokecoin is a minimal Blockchain and Blockchain Server implemented in Node.**

**Works with Node 9 and above.**

### Getting Started

- `yarn` to install dependencies.
- `yarn start` to start development build with nodemon.
- `yarn build` to make production build for older node versions.
- `yarn start:prod` to start server on older node versions.
- `yarn deploy` to deploy to heroku.

### Usage

- *GET* `/chain` to get chain.
- *POST* `/transactions` to create transactions.

```json
{
	"sender": "Naruto",
	"recipient": "Sasuke",
	"amount": 90
}
```

- *GET* `/mine` to mine new block.

### Internals

#### Proof of Work

- Currently using Simple Cycle until the solution is found. i.e.

<img src="pow.png">

#### Hasing Algo

- SHA256
- Hash-based message authentication code(HMAC) to generate hash of last block.

All the functions used are from [cypto](https://nodejs.org/api/crypto.html) included in node.

**No external dependency is used to achieve blockchain creation in node** _Only Express for HTTP server_ 

### License

[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
