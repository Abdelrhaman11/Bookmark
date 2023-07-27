



var namee=document.getElementById('sitename');

var web =document.getElementById('siteurl');

// var list =[];


if(localStorage.getItem('productsdata') === null)
{
    var list=[];
}
else{
    var list=JSON.parse(localStorage.getItem('productsdata'))
    displaydata();

}





function submit(){

var product={
    pname: namee.value ,
    pweb: web.value , 
}
list.push(product);

localStorage.setItem('productsdata',JSON.stringify(list))


displaydata();


clear()

// console.log(pname);
// console.log(pweb);
}




function clear()
{


    namee.value=null;
    web.value=null;


}




function displaydata(){


    var show='';



    for(var i=0; i<list.length ; i++)
    {
        

    show += `
    <div class="web" id="display">
    <h2>${list[i].pname}</h2>
    <a class=" btn btn-primary link" href="${list[i].pweb}" target="_blank">Visit</a>
    <button onclick="deletedata(${i})"  class=" btn btn-danger btndelete">Delete</button>
    </div>

        `


    }

    document.getElementById('display').innerHTML=show;



}


function deletedata(inedx)
{

    list.splice(inedx,1);
    localStorage.setItem('productsdata',JSON.stringify(list));

    displaydata();

}





