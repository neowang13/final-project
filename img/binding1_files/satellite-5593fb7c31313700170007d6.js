_satellite.pushAsyncScript(function(event, target, $variables){
  $(document).ready(function(){
    $('#anti-spam-legislation__form').submit(function(){
        var checkIfFired = document.getElementById('iframeEmailSignupContainer');
        if(!checkIfFired){
            var axel = Math.random() + "";
            var a = axel * 10000000000000;

            var iframeEmailSignup = document.createElement('iframe');
            var iframeEmailSignupContainer = document.createElement('div');

            iframeEmailSignupContainer.style.display = 'none';
            iframeEmailSignupContainer.id = 'iframeEmailSignupContainer';

            iframeEmailSignup.src = 'https://4967459.fls.doubleclick.net/activityi;src=4967459;type=spchek01;cat=emailsu;ord=' + a + '?';
            iframeEmailSignup.width = 1;
            iframeEmailSignup.height = 1;
            iframeEmailSignup.frameborder = 'no';
            iframeEmailSignup.border = 0;
            iframeEmailSignup.scrolling = 'no';

            document.body.appendChild(iframeEmailSignupContainer);
            document.getElementById('iframeEmailSignupContainer').appendChild(iframeEmailSignup);
        }
    });
});
});
