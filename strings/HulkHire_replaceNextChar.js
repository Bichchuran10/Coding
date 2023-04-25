//Given a string,your task is to replace each of its characters by the next one in the English alphabet i.e replace a with b,
//replace b with,replace z with a

//input str="ascz",output="btda"



function replaceNextChar(str)
{
    let res=""
    for(let i=0;i<str.length;i++)
    {
        if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90)
        {
            if(str.charCodeAt(i)==90)
            {
                res+='A'
            }
            else
            {
            res+=String.fromCharCode(str.charCodeAt(i)+1)
            }
        }
        else if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122)
        {
            if(str.charCodeAt(i)==122)
            {
                res+='a'
            }
            else
            {
            res+=String.fromCharCode(str.charCodeAt(i)+1)
            console.log(res)
            }
        }
    }
    return res
}

//console.log(replaceNextChar("ascz"))
console.log(replaceNextChar("ascZXa"))

