
let ExecTrustedEval=false;
let simpleEval=true; 
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
} catch (error) {

	simpleEval=false;
  try {// trying trustedtypes Eval 
		// Dynamic code string
		
	//this will make us find out whether TS: TrustedScript can be enabled or is supported
	window.supportsTS = Boolean(trustedTypes) ;//forces exiting ? 1:0 
	if(!supportsTS)
	throw new TypeError("This browser or webpage doesn't support TrustedScripts ");
			//tested the try catch; if !supportsTS => catches error Trustedtype Failed

	// below we try to make a TrustedScript
	//else //else isn't even required
	//window.code="1";
  //const codeString = `1`;
  window.myPolicy=trustedTypes.createPolicy('myPolicy', {
	  createScript: (scriptContent) => scriptContent, // Allow creation of scripts
  });;
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
	console.log(supportsTS,"trustedtype failed", error , "trusted eval == ", ExecTrustedEval);
	  
}//end of trustedEval try  
  
  } // end of simpleEval try
// in the end we will have either eval else ExecTrustedEval else all false 
// This test is crucial to determine the possible ways of evaluations 
// if all false Strive to Create a Solution like custom Eval from 0, eval automata 
// in worst cases we'll have to build an engine-like sink 
