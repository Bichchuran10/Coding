
//Input:
// let arr1 = [ 1, 5, 10, 20, 40, 80 ];
// let arr2 = [ 6, 7, 20, 80, 100 ];
// let arr3 = [ 3, 4, 15, 20, 30, 70, 80, 120 ];
//OP-> 20,80

//Approach-> Use two sets and a result arr to store the final values
//TC-> O(n1+n2+n3)
//SC-> O(n1+n2+n3)

function findCommonElement(arr1,arr2,arr3)
{
    let set=new Set()
    let set2=new Set()
    let res=[]

    for(let i=0;i<arr1.length;i++)
    {
    if(!set.has(arr1[i]))
    {
        set.add(arr1[i])
    }
    }

    console.log(set)

    for(let j=0;j<arr2.length;j++)
    {
    if(set.has(arr2[j]))
    {
        set2.add(arr2[j])
        
    }
    }

    console.log(set2)


    for(let k=0;k<arr3.length;k++)
    {
    if(set2.has(arr3[k]))
    {
        res.push(arr3[k])
    }
    }

    return res;
}


console.log(findCommonElement([ 1, 1,5, 10, 20, 40, 80 ,990],[1, 6, 7, 20, 80, 100,990 ],[1, 3, 4, 15, 20, 30, 70, 80, 120,990 ]))

