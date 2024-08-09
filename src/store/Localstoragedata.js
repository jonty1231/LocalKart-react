



export const addcart=(data)=>{
    
   
    let prevedata= localStorage.getItem("items")
      prevedata=prevedata ?  JSON.parse(prevedata):[];

let isvalid =true
      prevedata.forEach(element => {
        if(element.data.id==data.id){
            element.count++
        isvalid=false
        
 } });

 if(isvalid){
    prevedata.push({data,count:1})
 }

 
    localStorage.setItem("items",JSON.stringify(prevedata))
}



export const getcart=()=>{
    let data= JSON.parse(localStorage.getItem("items"))
    return data;
}


export const Deletitem=(id)=>{
    let data=JSON.parse(localStorage.getItem("items"))
 let newdata=   data.filter((info)=>info.data.id !=id)

    localStorage.setItem("items",JSON.stringify(newdata))
}


export const itemscountad=(id)=>{
    let data=JSON.parse(localStorage.getItem("items"))
    
 let newdata=   data.map((info)=> {return info.data.id ==id?{...info,count:info.count+1}:info})

    localStorage.setItem("items",JSON.stringify(newdata))
}



export const itemscountsub=(id)=>{
    let data=JSON.parse(localStorage.getItem("items"))
    
 let newdata=   data.map((info)=> {return info.data.id ==id?{...info,count:info.count-1}:info})

    localStorage.setItem("items",JSON.stringify(newdata))
}

export const recentitems=(data)=>{
let prevedata=localStorage.getItem("prevData");
prevedata=prevedata?JSON.parse(prevedata):[ ];
 
let verifydata=true;
prevedata.forEach((items)=>{
    if(items.id==data.id){
        verifydata=false
       
    }
})
if(verifydata){
    prevedata.push(data)
}

localStorage.setItem("prevData",JSON.stringify(prevedata))
}



export const recentwatch=()=>{
    let data=JSON.parse(localStorage.getItem("prevData"))
    return data
}
export const deletwatch=( )=>{
   

 
    localStorage.setItem("prevData",JSON.stringify([]))

}