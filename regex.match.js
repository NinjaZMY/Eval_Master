regex.match.js 

These are logs pretty flawed but pretty fly 
some code works but not all of it 
regex matching works just fire fine burning 10 outa 9 

temp = input = "- []" ;  // before loop 
$TAGS=["","a","b"] ;
// condition =  temp.match(/[0-9] ?\./ ) != null ; 
condition =  temp.match(/(\s*>(\s*>)*|>*|\/\/|#|<!--|;|\/\*|^|^\s*(-|\d+.))\s*(\s*\[*(\s*($TAGS)(\s*($TAGS))*\s*))*\]*/ ) != null ;

> returns true 

temp = input = ">>> a" ;  // before loop 
$TAGS=["","a","b"] ;
// condition =  temp.match(/[0-9] ?\./ ) != null ; 
condition =  temp.match(/(\s*>(\s*>)*|>*|\/\/|#|<!--|;|\/\*|^|^\s*(-|\d+.))\s*(\s*\[*(\s*($TAGS)(\s*($TAGS))*\s*))*\]*/ ) != null ;
> returns true 
----
temp = input = ">>> [[ ab ba ]" ;  // before loop 
$TAGS=["","a","b"] ;
// condition =  temp.match(/[0-9] ?\./ ) != null ; 
condition =  temp.match(/(\s*>(\s*>)*|>*|\/\/|#|<!--|;|\/\*|^|^\s*(-|\d+.))\s*(\s*(\[)*(\s*($TAGS)(\s*($TAGS))*\s*))*(\])*/ ) != null ;

05:16:52.755 true
// trying to convert js RegEx into Vscode Regex 

// or vice versa vscode into RegEx
var vscode="hey hey"
VS=(...i)=>{
  var l=vscode.length;
  var result="";
  for(f=0;f<i.length;i++) 
  {
    console.log("i[f] : ",i[f],",;  i[f]>=l", i[f]>=l)
    if(i[f]>=l) continue;
    else
    result+=vscode[i[f]]

    console.log("vscode:",vscode,"; l:",l," ; f :",f," ; i[f] : ",i[f]," ; vscode[i[f]]:",vscode[i[f]], "; result:",result )
  }//end of for 

  return result
          }//end of fn 


//*** */

l=vscode.l;
t="";
for(i=0;i<l-1;i++)
{  
  c=vscode[i];
  d=vscode[i+1]
  if (t=="") t=c
  if(str=="\\")
  {  result+="\"
    continue
  }

  if(i+1==l)
    break;

}//end of for loop

