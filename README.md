This Challenge we were given HTML and CSS pre written code with some javascript code already written. 
I was able to deduce that with the .jss we were missing the main funtion that actually generates the password for the random password generator. 

I began by setting a funtion for "generatePassword"

First thing i did within this funtion was include a window prompt that exaplains the beginning length criteria of the password. 

I then set up variables for window prompts with strings asking which criteria they would like to include in the password, with an if statement that shows they need to pick at least one if nothing was selected.

I then set up variables for the character sets of upper/lowercase letters, numbers and special characters.

Then a var was set to include which character sets were selected for the password.

To finish this funtion i set up a loop statment letting Math.floor and Math.random choose which characters from criteria to then return an answer 