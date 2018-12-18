# Pig Dice Game

#### This is a website that allows two players to play the pig dice game. , 17th November 2018.

#### By **Ivy Nzioka**

## Description

This is a simple, responsive website that contains a pig dice game.The game is played using a single die and one wins by being the first player to score 100 points.

## Working of the website.
The project runs on a browser.One can use a smartphone,desktop or tablet.

## Live Demo
Please find a link to a live demo here: [https://nziokaivy.github.io/pig-dice-game/]
## Specifications

Can count upto 100.

## Behaviour Driven Development

| Behaviour                                                                 | Input                    | Output                                                    |
| ------------------------------------------------------------------------- | ------------------------ | --------------------------------------------------------- |
| When player press roll                                                    | player hits roll         | generates random number between 1-6                       |
| Web app will add roll to current score                                    | player hits roll         | current score will be initial rolled number               |
| Web app will add second rolls to current score                            | player hits roll         | current score = initial rolled number + new rolled number |
| Web app allows player to roll and return total score                      | Player hits hold         | total score = current score                               |
| Web app will clear current score when player hits hold                    | player hits hold         | total score = 0                                           |
| Web app will clear current score if rolled random number = 1              | player rolled 1          | current score = 0 and the total score remains unchanged   |
| web app will initialize other player's turn when running total is cleared | other play now hits roll | a random number between 1 - 6 is generated                |
| Game ends when either of the players gets to a total score of 100         | total score equals 100   | Player 1 wins player!                                           |

## Setup/Installation Requirements

Install the pig dice game by cloning this repository:

## Known Bugs

Incase of any bugs:-

Fork the repository
Create a new branch using the command:(git checkout -b improve- feature)
Make appropriate changes in the files.
Commit your changes using the command:(git commit -m "improve- feature")
Push to the branch using the command:(git push origin improve-feature)
Create a pull request

## Technologies Used

-   HTML
-   CSS
-   Javascript
-   Jquery

## Support and contact details

If you have any issues feel free to contact me at nziokaivy@gmail.com

### License

MIT License. Copyright (c) 2018 **Ivy Nzioka**
