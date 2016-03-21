_satellite.pushAsyncScript(function(event, target, $variables){
  $(document).ready(function(){
    var checkIfFired = document.getElementById('iframeProductDescriptionPageContainer');
    if(!checkIfFired){
        var axel = Math.random() + "";
        var a = axel * 10000000000000;
        var thisProductNumber = Number($('.product-detail__description-item-num').html().split('#:')[1]);
        var thisProductPrice = Number($('.product-detail__price-text').html().replace(/[^0-9\.]+/g,""));
        var thisProductCategory = $('.page-breadcrumb__link').last().html().trim().replace(/ /g,"%20");

        var iframeProductDescriptionPage = document.createElement('iframe');
        var iframeProductDescriptionPageContainer = document.createElement('div');

        iframeProductDescriptionPageContainer.style.display = 'none';
        iframeProductDescriptionPageContainer.id = 'iframeProductDescriptionPageContainer';

        iframeProductDescriptionPage.src = 'https://4967459.fls.doubleclick.net/activityi;src=4967459;type=spchek01;cat=prodpg;u1=' + thisProductNumber + ';u2=' + thisProductCategory + ';ord=' + a + '?';
        iframeProductDescriptionPage.width = 1;
        iframeProductDescriptionPage.height = 1;
        iframeProductDescriptionPage.frameborder = 'no';
        iframeProductDescriptionPage.border = 0;
        iframeProductDescriptionPage.scrolling = 'no';

        document.body.appendChild(iframeProductDescriptionPageContainer);
        document.getElementById('iframeProductDescriptionPageContainer').appendChild(iframeProductDescriptionPage);
    }
});

$(document).on('click', '[data-module-type="FindInStore"]', function(){
    var checkIfFired = document.getElementById('iframeFindInStoreClickContainer');
    if(!checkIfFired){
        var axel = Math.random() + "";
        var a = axel * 10000000000000;
        var thisProductNumber = Number($('.product-detail__description-item-num').html().split('#:')[1]);

        var iframeFindInStoreClick = document.createElement('iframe');
        var iframeFindInStoreClickContainer = document.createElement('div');

        iframeFindInStoreClickContainer.style.display = 'none';
        iframeFindInStoreClickContainer.id = 'iframeFindInStoreClickContainer';

        iframeFindInStoreClick.src = 'https://4967459.fls.doubleclick.net/activityi;src=4967459;type=spchek01;cat=prodpgfs;u1=' + thisProductNumber + ';ord=' + a + '?';
        iframeFindInStoreClick.width = 1;
        iframeFindInStoreClick.height = 1;
        iframeFindInStoreClick.frameborder = 'no';
        iframeFindInStoreClick.border = 0;
        iframeFindInStoreClick.scrolling = 'no';

        document.body.appendChild(iframeFindInStoreClickContainer);
        document.getElementById('iframeFindInStoreClickContainer').appendChild(iframeFindInStoreClick);
    }
});

$(document).on('click', '.add-cart', function(){
    var checkIfFired = document.getElementById('iframeAddToCartContainer');
    if(!checkIfFired){
        var axel = Math.random() + "";
        var a = axel * 10000000000000;
        var thisProductNumber = Number($('.product-detail__description-item-num').html().split('#:')[1]);

        var iframeAddToCart = document.createElement('iframe');
        var iframeAddToCartContainer = document.createElement('div');

        iframeAddToCartContainer.style.display = 'none';
        iframeAddToCartContainer.id = 'iframeAddToCartContainer';

        iframeAddToCart.src = 'https://4967459.fls.doubleclick.net/activityi;src=4967459;type=spchek01;cat=prodpgac;u1=' + thisProductNumber + ';ord=' + a + '?';
        iframeAddToCart.width = 1;
        iframeAddToCart.height = 1;
        iframeAddToCart.frameborder = 'no';
        iframeAddToCart.border = 0;
        iframeAddToCart.scrolling = 'no';

        document.body.appendChild(iframeAddToCartContainer);
        document.getElementById('iframeAddToCartContainer').appendChild(iframeAddToCart);
    }
});
});
