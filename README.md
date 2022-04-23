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

Test 3: Printer should only return a beep if it's on a digit that has a 1

Code:

input = 12;
beeping = ("");
beeping = printer(input, beeping);
console.log(beeping)

function printer (x, y)
{
    for (i = 0; i < x; i++)
    {
        let z = i.toString();
        for (h = 0; h < z.length; h++)
        {
        d = z.charAt(h);
            if (d === ("1") && d!==(0))
            {
                y += ("beep")
                break;
            }
            else
            {

            }
        }
    }
  return y;
}


Expected Result BeepBeepBeep
Test Failed
Reason: 11 has two ones, so it logs two beeps
Solution: Add a break to the loop so that it only logs 1

Test 4: If the number isn't a 1, printer should print it out.

Code:

input = 12;
beeping = ("");
beeping = printer(input, beeping);
console.log(beeping)

function printer (x, y)
{
    for (i = 0; i < (x + 1); i++)
    {
        let z = i.toString();
        for (h = 0; h < z.length; h++)
        {
        d = z.charAt(h);
        nope = 0;
            if (d === ("1") && d!==(0))
            {
                y += ("beep")
                break;
            }
            else
            {
                nope += 1;
            }
        y += (z)
        }
    }
  return y;
}

Expected Result: beep23456789beepbeepbeep
Test Failed
Reason: Stops running 1 time early
Solution: Have i run an extra time

Test 5: if the number has a two, print out a boop

Code:

input = 15;
beeping = ("");
beeping = printer(input, beeping);
console.log(beeping)

function printer (x, y)
{
    for (i = 0; i < (x + 1); i++)
    {
        let z = i.toString();
        for (h = 0; h < z.length; h++)
        {
        d = z.charAt(h);
        nope = 0;
            if (d === ("2"))
            {
                y += ("boop")
                break;
            }
            else if (d === ("1"))
            {
                y += ("beep")
                break;
            }
            else
            {
                nope += 1;
            }
        y += (z)
        }
    }
  return y;
}

Expected Result: 0beepboop3456789beepbeepboopbeepbeepbeep
Test Failed
Reason: Since 12 has a 1 before the two, it breaks out of the loop before it reaches the two
Solution: 

