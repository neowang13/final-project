;(function (g) {
  var d = document, i, am = d.createElement('script'), h = d.head || d.getElementsByTagName("head")[0],
      aex = {
        "src": "//gateway.answerscloud.com/sportchek-ca/production/gateway.min.js",
        "type": "text/javascript",
        "async": "true",
        "data-vendor": "acs",
        "data-role": "gateway"
      };
  for (var attr in aex) { am.setAttribute(attr,aex[attr]); }
  h.appendChild(am);
  g['acsReady'] = function () {var aT = '__acsReady__', args = Array.prototype.slice.call(arguments, 0),k = setInterval(function () {if (typeof g[aT] === 'function') {clearInterval(k);for (i = 0; i < args.length; i++) {g[aT].call(g, function(fn) { return function() { setTimeout(fn, 1) };}(args[i]));}}}, 50);};
})(window);
