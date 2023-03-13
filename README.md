
## LCR Game
Dice game Left, Center, Right


## Authors

- [@Jormar](https://www.github.com/Jormar01)


## Installation

Download project

verify node version >= 12.0

```bash
 node --version
```

Install dependence:
```bash
  npm install --global yarn
  cd my-project
  yarn install

```
    
1. Add the .env with the variables environment that the example has.
2. Install docker.

Try Docker-compose:

```bash
sudo docker compose up

```
## Example Json


path:

localhost:3000/lcr

Request:

{
	"numPlayers": 3 ,
	"rolls": "L..LRC..RC.L"
	
}


Response:

{
	"Player 1": "1",
	"Player 2": "3 (*)",
	"Player 3": "3",
	"Center": 2
}