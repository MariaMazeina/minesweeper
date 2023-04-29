function fieldGenerarion(n){
    let mas=[];
    for(let i=0;i<n;i++){
        mas.push([]);
        for(let g=0;g<n;g++){
            a=i.toString()+"-"+g.toString();
            mas[i].push(0);
        }
    }
    let count=0;
    while(count<10){
        i=Math.floor(Math.random()*10);
        g=Math.floor(Math.random()*10);
        if(mas[i][g]!="*"){
            mas[i][g]="*";
            count+=1;
        }
    }
    for(let i=0;i<n;i++){
        for(let g=0;g<n;g++){
            if(mas[i][g]!="*"){
                let count=0
                if (i-1>=0 && g-1>=0){
                    if (mas[i-1][g-1]==="*"){count+=1}
                }
                if (i-1>=0){
                    if (mas[i-1][g]==="*"){count+=1}
                }
                if (i-1>=0 && g+1<n){
                    if (mas[i-1][g+1]==="*"){count+=1}
                }
                if (g-1>=0){
                    if (mas[i][g-1]==="*"){count+=1}
                }
                if (g+1<n){
                    if (mas[i][g+1]==="*"){count+=1}
                }
                if (i+1<n && g-1>=0){
                    if (mas[i+1][g-1]==="*"){count+=1}
                }
                if (i+1<n){
                    if (mas[i+1][g]==="*"){count+=1}
                }
                if (i+1<n && g+1<n){
                    if (mas[i+1][g+1]==="*"){count+=1}
                }
                mas[i][g]=count;
            }
        }
    }
    return mas;
}

function generateHtml(mas,n){
    let result='<table class="table1" onclick="javascript: Click()" onselectstart="return false" onmousedown="return false">';
    for(let i=0;i<n;i++){
        result+="<tr>";
        for(let g=0;g<n;g++){
            result+='<td class="td" id="';
            let a=i.toString()+"-"+g.toString();
            result+=a;
            result+='">';
            /*result+=mas[i][g].toString();*/
            result+='<//td>';

        }
        result+='<//tr>';
    }
    result+='<//table>';
    return result;
}

function generateTd(mas,n,l,m){
    let result='<table class="table1" onclick="javascript: Click()" onselectstart="return false" onmousedown="return false">';
    for(let i=0;i<n;i++){
        result+="<tr>";
        for(let g=0;g<n;g++){
            result+='<td class="td';
            if(i===l && g===m){
                result+='_break'
            }
            result+='" id="';
            let a=i.toString()+"-"+g.toString();
            result+=a;
            result+='">';
            result+=mas[i][g].toString();
            result+='<//td>';

        }
        result+='<//tr>';
    }
    result+='<//table>';
    return result;
}

field=fieldGenerarion(10);
window.onload=function(){
    let s="";
    s=generateHtml(field,10);
    document.getElementById("table").innerHTML=s;
    /*document.getElementById("field").innerHTML=field;*/
}

document.onclick=Click;

function Click(event){
    let tt=event.target;
    let itt=tt.id;
    itt=itt.toString();
    c=itt.indexOf("-");
    a=Number(itt.slice(0,c));
    b=Number(itt.slice(c+1));
    if(field[a][b]==="*"){
        s=generateTd(field,10,a,b);
        document.getElementById("table").innerHTML=s;
        /*alert("Game Over");*/
    }
    else{
        tt.innerHTML=field[a][b].toString();
    }
}



