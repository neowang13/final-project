_satellite.pushAsyncScript(function(event, target, $variables){
  (function(){
    var hasLoaded = false;
    var isConversionPage = false;
    var googleParams = {};
    var conversionGooglePrice;

    $.getScript('https://www.googleadservices.com/pagead/conversion_async.js')
            .done(function () {
                var listenForLoad = setInterval(function(){
                    if(hasLoaded) {
						var fireRemarketing = function(params) {
							window.google_trackConversion({
									google_conversion_id: 983861484,
									google_custom_params: params,
									google_remarketing_only: true
								}

							);
						};
						fireRemarketing(googleParams);
						
                        if(isConversionPage) {
                            window.google_trackConversion({
                                google_conversion_id: 975572676,
                                google_conversion_label: '7HEICPKV4F4QxJ2Y0QM',
                                google_conversion_language: 'en',
                                google_conversion_color: 'ffffff',
                                google_conversion_value: conversionGooglePrice,
                                google_conversion_currency: 'CAD',
                                google_remarketing_only: false
                            });

                            // New conversion pixel
                            window.google_trackConversion({
                                google_conversion_id: 1006535782,
                                google_conversion_label: 'A9W6CNbvp18Q5oj63wM',
                                google_conversion_language: 'en',
                                google_conversion_color: 'ffffff',
                                google_conversion_value: conversionGooglePrice,
                                google_conversion_currency: 'CAD',
                                google_remarketing_only: false
                            });
                        }
                        clearInterval(listenForLoad);
                    }
                }, 1000);
            })
            .fail(function () {
                console.log('AJAX error: Google Remarketing Tag');
            });
	try {
        if (window.location.pathname === '/') {
            googleParams = {
                ecomm_pagetype: 'home'
            }

            ;
            hasLoaded = true;
        } else if (window.location.pathname.indexOf('/product/') > -1) {
            $(document).ajaxSuccess(function(event, xhr, settings) {
                if (!hasLoaded && settings.url.indexOf('/services/sportchek/information/price') > -1 && settings.type === 'POST') {
                    var productID = $('.product-detail__description-item-num').html().split('#:')[1].trim();
                    var totalPrice = Number($('.product-detail__price-text').html().replace(/[^0-9\.]+/g, ''));
                    googleParams = {
                        ecomm_pagetype: 'product',
                        ecomm_prodid: productID,
                        ecomm_totalvalue: totalPrice
                    }

                    ;
                    hasLoaded = true;
                }
            });
        } else if (window.location.pathname.indexOf('/shopping-cart') > -1) {
            $(document).ajaxSuccess(function(event, xhr, settings) {
                if (!hasLoaded && settings.url.indexOf('/services/sportchek/cart/stockCart') > -1 && settings.type === 'GET') {
                    var cartData = JSON.parse(xhr.responseText);
                    var productID = [];
                    var totalPrice = Number(cartData.subTotal.value);
                    for (i = 0; i < cartData.entries.length; i++) {
                        productID.push(cartData.entries[i].product.code);
                    }

                    if (productID.length === 1) {
                        productID = productID[0];
                    }
                    googleParams = {
                        ecomm_pagetype: 'cart',
                        ecomm_prodid: productID,
                        ecomm_totalvalue: totalPrice
                    };
                    hasLoaded = true;
                }
            });
        } else if (window.location.pathname.indexOf('/search') > -1) {
            $(document).ajaxSuccess(function(event, xhr, settings) {
                if (!hasLoaded && settings.url.indexOf('/services/sportchek/search-and-promote/products') > -1 && settings.type === 'GET') {
                    googleParams = {
                        ecomm_pagetype: 'searchresults'
                    };
                    hasLoaded = true;
                }
            });
        } else if (window.location.pathname.indexOf('/checkout/confirmation') > -1) {
            $(document).ajaxSuccess(function(event, xhr, settings) {
                if (!hasLoaded && settings.url.indexOf('/services/sportchek/orders/') > -1 && settings.type === 'GET') {
                    var checkoutData = JSON.parse(xhr.responseText);
                    var productID = [];
                    var totalPrice = Number(checkoutData.subTotal.value);
                    for (i = 0; i < checkoutData.entries.length; i++) {
                        productID.push(checkoutData.entries[i].product.code);
                    }
                    if (productID.length === 1) {
                        productID = productID[0];
                    }

                    googleParams = {
                        ecomm_pagetype: 'purchase',
                        ecomm_prodid: productID,
                        ecomm_totalvalue: totalPrice
                    }

                    ;
                    conversionGooglePrice = totalPrice;
                    hasLoaded = true;
                    isConversionPage = true;
                }
            });
        } else {
            if (!hasLoaded) {
                googleParams = {
                    ecomm_pagetype: 'other'
                }

                ;
                hasLoaded = true;
            }
        }
    } catch (e) {}

})();
});
