Tests

Test 1: printer should return a beep

Code:

input = 1
printer()

function printer ()
{
    console.log("Beep")
}

Expected Result: Beep

Test 2: printer should return a beep for whatever the input is equal to.

Code:

input = 4;
beeping = ("");
beeping = printer(input, beeping);
console.log(beeping)

function printer (x, y)
{
    for (i = 0; i < x; i++)
    {
        y += ("beep")
    }
  return y;
}



Expected Result: Beep Beep Beep Beep
Test Failed
Reason: For loop isn't starting 
Solution: For loop was facing the wrong way