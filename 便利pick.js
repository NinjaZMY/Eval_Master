//便利pick.js
let log=console.log;
let warn=console.warn; 
// trying to convert js RegEx into Vscode Regex 
// or vice versa code into RegEx
var code="hey hey"
VS=(...i)=>{
  var l=code.length;
//   log("within fn, string length equals : "+l)
  var result="";
  for(f=0;f<i.length;f++) // loop problem that's why it was stuck, at one element x quit 
  {
    log("within for loop\n","f equals ",f, "& args["+f+"] equals : "+i[f])
    if(typeof code[i[f]]=="undefined") 
    {//broken if condition caused a sort of space time error
      console.error("code["+  (typeof i[f] == "string" ? "'"+i[f]+"'" : i[f])+"] : "+undefined)
      continue
    }
    else
    result+=code[i[f]]

    

    // warn("input error, skipped");
    log("code:",code,"; l:",l," ; f :",f," ; i[f] : ",i[f]," ; code[i[f]]:",code[i[f]], "; result:",result )
    //warn("log isn't working above")
  }//end of for 

  return result
          }//end of fn 

VS(0,1,2,3,7,"e",4,null,5,"adzfcsaaa",6,-1)


//*** code to be tested */
// trying to convert js RegEx into Vscode Regex 
code="\\a\\b";
log(code)
//below should become fn scope
var l =code.l;
var t="";
for(i=0;i<l-1;i++)
{  
  c=code[i];
  // d=vscode[i+1]
  if (c=="") t=c
  if(VS(i,i+1)=="\\\")
  {  t+="\\"
    continue
  }

  if(i+1==l)
    log(t);//return t in fn

}//end of for loop

