//biz

function printer (x, y)
{
for (i = 0; i < ((x + 1) / 10); i++)
    //I have no idea why I have to divide by 10 here. Even if I just replace this comment with console.log(x) it just returns X as whatever the user inputted, but otherwise its gonna run for 10 times what the user inputted. I am beyond confused. 
    {
    let z = i.toString();
    let a = 0;
    for (h = 0; h < z.length; h++)
        {
        
        d = z.charAt(h);
        if (d === ("3"))
            {
            a = 3;
			break;		 
            }
        else if (d === ("2") && a!== (3))
            {
            a = 2;
            }
        else if (d === ("1") && a!== (2))
            {
            a = 1;

            }
            
        }
    if (a === 3)
    {
        y+= (" Won't you be my neighbor?")
    }      
    else if (a === 2)
    {
        y+= (" boop")
    }
    else if (a === 1)
    {
        y+= (" beep")
    }
    else
    {
        y+= (" " + z);
    }
    }
return y;
}


//user

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let beeping = ("");
    let input = $("input#number").val();
    beeping = printer(input, beeping);

    $("#total").text(beeping);
    $("#output").show();
  });
});