//biz

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


//user

$(document).ready(function() {
  $("#formOne").submit(function(event) {

  });
});