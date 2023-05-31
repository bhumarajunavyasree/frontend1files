function mouse(){
    let x=document.getElementById("inp").value
    let y=document.getElementById("inp1").value
    a=parseInt(x)+parseInt(y)
    document.getElementById("inp2").value=a
    s=parseInt(x)-parseInt(y)
    document.getElementById("inp3").value=s
    m=parseInt(x)*parseInt(y)
    document.getElementById("inp4").value=m
    d=parseInt(x)/parseInt(y)
    document.getElementById("inp5").value=d
}