let count = 3;

function generate()
{
    
    let one =0;
    let two = 0;
    let three = 0;
    let four = 0;
    for(let i=1;i<=16;i++)
    {
        document.getElementById("bt"+i).innerHTML = Math.floor(Math.random() * 10);
        if(i%4==1) one+=parseInt(document.getElementById("bt"+i).innerHTML);
        if(i%4==2) two+=parseInt(document.getElementById("bt"+i).innerHTML);
        if(i%4==3) three+=parseInt(document.getElementById("bt"+i).innerHTML);
        if(i%4==0) four+=parseInt(document.getElementById("bt"+i).innerHTML);

        document.getElementById("ans-one").innerHTML = one;
        document.getElementById("ans-two").innerHTML = two;
        document.getElementById("ans-three").innerHTML = three;
        document.getElementById("ans-four").innerHTML = four;



    }
    let even_count =0;
    let odd_count = 0;
    if(one%2==1)
    {
        odd_count++;
    }
    if(two%2==1)
    {
        odd_count++;
    }
    if(three%2==1)
    {
        odd_count++;
    }
    if(four%2==1)
    {
        odd_count++;
    }

    if(one%2==0)
    {
        even_count++;
    }
    if(two%2==0)
    {
        even_count++;
    }
    if(three%2==0)
    {
        even_count++;
    }
    if(four%2==0)
    {
        even_count++;
    }

    if(even_count==2 && odd_count==2) 
    {
        document.getElementById("main-heading").innerHTML= "chekas you win the game dude";
        count = 3;
    }
    else if(count==0)
    {
        document.getElementById("main-heading").innerHTML= "you lost this game please reload to try again";
        count = 3;
        
    }
    else
    {
        document.getElementById("main-heading").innerHTML= "you have "+count+" more choices to win the game";
    }
    count--;
   
    

    

}