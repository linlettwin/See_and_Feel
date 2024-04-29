
function noNum(input)
{   
    var allow=/[^a-z]/gi;
    input.value=input.value.replace(allow,"");
}

function noLetter(input)
{
    var accept=/[^0-9]/gi;
    input.value=input.value.replace(accept, "");
}