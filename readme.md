# COKE 💸

_A New Coin on the streets._

##### Cokecoin is a minimal Blockchain and Blockchain Server implemented in Node.

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

### Getting Started

- `yarn` to install dependencies.
- `yarn start` to start development build with nodemon.
- `yarn build` to make production build for older node versions.
- `yarn start:prod` to start server on older node versions.
- `yarn deploy` to deploy to heroku.

### License

[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
