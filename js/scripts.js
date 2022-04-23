//biz

input = 15;
beeping = ("");
beeping = printer(input, beeping);
console.log(beeping)

function printer (input, output)
{
    for (i = 0; i < (input + 1); i++)
    {
        let number = i.toString();
        currentNumber = [];
        currentNumber = sorter(currentNumber, number);

        for (h = 0; h < currentNumber.length; h++)
        {
        currentDigit = currentNumber.charAt(h);
						
            if (currentDigit === ("2"))
            {
                output += ("boop")
                break;
            }
            else if (currentDigit === ("1"))
            {
                output += ("beep")
                break;
            }
            else
            {

            }
        output += (currentNumber)
        }
    }
  return output;
}

function sorter (array, string)
{
	for (i = 0; i < string.length; i++)
  {
  	array.push(string.charAt(i))
    parseInt(array(i));
  }
}

//user

$(document).ready(function() {
  $("#formOne").submit(function(event) {

  });
});