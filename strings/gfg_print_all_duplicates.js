function duplicateStrings(string)
{
  
  let map=new Map()
  let res=[]
  for(let i=0;i<string.length;i++)
  {
    if(!map.has(string[i]) && string[i]!=" ")
    {
      map.set(string[i],1)
    }
    else
    {
      if(string[i]!=" ")
      {
      map.set(string[i],map.get(string[i])+1)
      }
    }
  }
  
  console.log(map)
  
  map.forEach((value,key)=>
  {
    if(value>1)
    {
      console.log(`string is ${key} and its frequency is ${value}`)
      res.push(key)  
    }
  })
  return res
  
}


console.log(duplicateStrings("  test   string "))
//"geeksforgeeks"
console.log(duplicateStrings("geeksforgeeks"))