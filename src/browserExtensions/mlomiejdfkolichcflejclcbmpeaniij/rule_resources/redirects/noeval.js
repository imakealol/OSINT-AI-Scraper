(function(){"use strict";const n=console.log.bind(console);window.eval=new Proxy(window.eval,{apply:function(o,e,t){n(`Document tried to eval... ${t[0]}\n`)}})})();