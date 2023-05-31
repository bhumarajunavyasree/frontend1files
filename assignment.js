function add(){
    let x=document.getElementById("inp").value
    let y=document.getElementById("inp1").value
    if(x=="" && y=="")
    document.write("enter ur name and mail")
    else if(x=="")
    document.write("enter name")
    else if(y=="")
    document.write("enter ur mail")
    else
    document.write("success")
}
