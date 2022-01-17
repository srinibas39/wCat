const fs=require("fs");
let input=process.argv.slice(2);
// console.log(input);

//divide the options and files;
let optionsArr=[];
let filesArr=[];

for(let i=0;i<input.length;i++){
    let firstChar=input[i].charAt(0);
    if(firstChar=="-"){
        optionsArr.push(input[i]);
    }
    else{
        filesArr.push(input[i]);
    }
}
// console.log(optionsArr);
// console.log(filesArr);

//content display
let content=""
for(let i=0;i<filesArr.length;i++){
    let file=filesArr[i];
    let buffer=fs.readFileSync(file);
    content+=buffer+"\r\n";
}

// console.log(content);
let contentArr=content.split("\r\n");
// console.log(contentArr);

//implement -s
let isSpresent=optionsArr.includes("-s");
if(isSpresent){
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i]==""&& contentArr[i-1]==""){
            contentArr[i]=null;
        }
        else if(contentArr[i]=="" && contentArr[i-1]==null){
            contentArr[i]=null;
        }
    }
}
 console.log(contentArr);

contentArr=contentArr.filter((ele)=>{
    return ele!=null
})
console.log("------------------");
console.log(contentArr.join("\r\n"));

//implement -n

let nExist=optionsArr.includes("-n");
if(nExist){
    for(let i=0;i<contentArr.length;i++){
        contentArr[i]=`${i+1} ${contentArr[i]}`;
        
    }
}
console.log(contentArr.join("\r\n"));

//implement -b;

let bExist=optionsArr.includes("-b");
if(bExist){
    let counter=1;
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i]!=""){
            contentArr[i]=`${counter} ${contentArr[i]}`;
            counter++;
        }
        
    }
}

console.log(contentArr.join("\r\n"));