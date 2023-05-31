# JS-MAIL-DADI
## By Carlo Eusebi
## Goals:
- **MAIL**
    - ask user for email;
    - check if email is in allowed list;
    - if it is we let him play dice;
    - otherwise we tell him he can't play;
- **DICE**
    - generate two random numbers, one for player and one for cpu;
    - higher score wins

## My Steps:

<hr>

- **MAIL**
    1. grab input and button from the DOM;
    1. initialize an array with all valid (allowed) emails;
    1. **ON BUTTON PRESS**;
        1. read user input;
        1. validate input;
        1. initialize a flag (isAllowed)
        1. **UNTIL** a match is found (flag === true) **OR** we checked every email in the list:
            -   compare user email with an email from the allowed list;
            - **IF** a match is found:
                - turn the flag to true;
        1. **IF** flag is true:
            - display a success message and allow user to play;
        - **ELSE**
            - display an error message

<hr>

- **DICE**
    1. grab all elements from the DOM
    1. write a function to generate rundom rumbers form 1 to 6;
    1. **ON _PLAY_ BUTTON PRESS**;
        1. generate an rnd number for the user;
        1. generate an rnd number for the cpu;
        1. display user and cpu rolls on screen;
        1. **IF** user score is higher:
            - display 'player wins' message;
        **ELSE IF** cpu score is higher:
            - display 'cpu wins' message;
        **ELSE** => it is a draw;
            - display 'draw' message;

        