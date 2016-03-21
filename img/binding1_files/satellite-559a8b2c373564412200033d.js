_satellite.pushAsyncScript(function(event, target, $variables){
  (function() {
  var _fbq = window._fbq || (window._fbq = []);
  if (!_fbq.loaded) {
    var fbds = document.createElement('script');
    fbds.async = true;
    fbds.src = '//connect.facebook.net/en_US/fbds.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(fbds, s);
    _fbq.loaded = true;
  }
  _fbq.push(['addPixelId', '1572570712973439']);
})();
window._fbq = window._fbq || [];

try{

newProd = _satellite.getVar('prodIDNew')

if (newProd != "0"){
  
window._fbq.push(['track', 'ViewContent', {
          content_ids: [newProd],
          content_type: 'product'
        }]);
	}
}
catch(err){
  console.log(err)
}
  
  

});
