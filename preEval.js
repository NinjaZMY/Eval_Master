/*
preEval.js
>updates> window.supportsTS got its initilization updated into a valid value, supporting undefined value, which the variable didn't support in the past; 
requires diff with remote & then updated in remote; adding Evalfn on both routes simple eval x trustedEval ; adding Policy as global variable ; Adding more context to the Failed Trusted Type Evaluation catch error throw; Adding the TrustedEvalFn and adding more context to the TrustedEvalFn 
*/
let ExecTrustedEval=false;
let simpleEval=true; 
let Evalfn;
let Policy=undefined; 
// simpleEval's Existence is crucial because if ExecTrustedEval fails in the end
// then ExecTrusted on the other hand if eval is true => false 
// one variable here with 2 different outcomes which means 
//we require another Variable such as simpleEval
// a simple 1 var cannot abstract 
// if eval simpleEval : !simpleEval 
// !simpleEval => use of TrustedEval
// now to use TrustedEval, TrustedEval must work else false
// which means 
// ExecTrustedEval <= Working => true : False 
// in the end we will have either eval else ExecTrustedEval else all false 
try { // trying simple eval 
	eval("")
	console.log("Simple Eval works == ",!ExecTrustedEval)
	Evalfn=eval; 
} catch (error) {

	simpleEval=false;
  try {// trying trustedtypes Eval 
		// Dynamic code string
		
/* 	//this will make us find out whether TS: TrustedScript can be enabled or is supported
	window.supportsTS = Boolean(trustedTypes) ;//forces exiting ? 1:0
    //the problem with the syntax above is that it wouldn't work if trustedTypes is undefined throwing  */
    window.supportsTS=(typeof trustedTypes =="undefined" ? false : true)
    //here's an update fixing the undefined trustedTypes dilemna 
    

	if(!supportsTS)
	throw new TypeError("This browser or webpage doesn't support TrustedScripts ");
			//tested the try catch; if !supportsTS => catches error Trustedtype Failed

	// below we try to make a TrustedScript
	//else //else isn't even required
	//window.code="1";
  //const codeString = `1`;
/*   window.myPolicy=trustedTypes.createPolicy('myPolicy', {
	  createScript: (scriptContent) => scriptContent, // Allow creation of scripts
  });; */
  Policy="myPolicy"; 
  Evalfn=/* TrustedEvalfn */(s,policy=Policy)=>{
window[policy]=trustedTypes.createPolicy(policy, {
	createScript: (scriptContent) => scriptContent, // Allow creation of scripts
});
const trusted_s_code= window[policy].createScript(s); 
 try 
 	{
		let result= eval(trusted_s_code);
		console.log("using: "+ policy)
		console.log("Successful eval"); 
		return result ;

  	}
	catch (error)
	{//TrustedEvalfn has failed route below:
		console.warn("policy context log; used policy is  `"+policy+"`")//policy context log;
		throw new Error("TrustedEval function failed; "+error);
	}
  }
  Evalfn("");
  // Wrap the code string with the policy
  //const trustedCode = myPolicy.createScript(code);
  
	// Execute the dynamic code safely
//   window.result = eval(code);
  //window.result = eval(trustedCode);
// tested try catch, if eval fails => ExecTrusted is still false
  ExecTrustedEval=true;
  console.log( " simple eval = "+simpleEval+" ; failed due to:",error,"trusted eval == ", ExecTrustedEval);
  } 
	catch (error) {// trustedEval isn't working 
	console.log("This website supports TrustedTypes => ",supportsTS," => trustedtype Evaluation failed", error , "trusted eval == ", ExecTrustedEval);
	  
}//end of trustedEval try  
  
  } // end of simpleEval try
// in the end we will have either eval else ExecTrustedEval else all false 
// This test is crucial to determine the possible ways of evaluations 
// if all false Strive to Create a Solution like custom Eval from 0, eval automata 
// in worst cases we'll have to build an engine-like sink 
