Failed Master Eval falling iffy debug.js
((s,policy=Policy)=>{     var w=l =r= "";
			if (typeof window[policy] == "undefined")
				window[policy] = trustedTypes.createPolicy(policy, {
				createScript: (scriptContent) => scriptContent, // Allow creation of scripts
				});
			try {
				//trying fn trusted evaluation
				let trusted_s_code = window[policy].createScript(s);

				var result = eval(trusted_s_code);
				l+=("using: " + policy);
				l+=("Successful eval");
				w+=result;
			} catch (e) {
				//TrustedEvalfn has failed route below:
				w+=("policy context log; used policy is  `" + policy + "`"); //policy context log;
				r+=(new Error("TrustedEval function failed; " + e));
			}
			log(l),warn(w),error(r); 
	}; //end of trustedEvalFn;
)()