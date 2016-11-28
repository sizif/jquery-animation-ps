
// BuyNowButton.js

(function (ns) {

    ns.BuyNowButton = function (id) {

        var b = $("#" + id);

        b.fadeIn('slow', function () {
            setInterval(function () {
                $({ xval: -30 }).animate({ xval: 300 },
                    {
                        duration: 2000,
                        step: function (now) {
                            b.css('background', 'radial-gradient(circle 80px at ' + now + 'px 30px, #ffaaaa, red)');
                        }
                    })
            }, 8000);
        });

        b.hover(function () {
            $({
                sc: '1'
            }).animate({
                sc: '1.1'
            }, {
                duration: 1000,
                easing: 'easeOutElastic',
                step: function (now, tween) {
                    b.css('transform', 'scale(' + now + ')');
                    b.children().css('transform', 'scale(' + now * 1.1 + ')');
                }
            });
        },

            function () {
                $({
                    sc: '1.1'
                }).animate({
                    sc: '1'
                }, {
                    duration: 1000,
                    easing: 'easeOutElastic',
                    step: function (now, tween) {
                        b.css('transform', 'scale(' + now + ')');
                        b.children().css('transform', 'scale(' + now + ')');
                    }
                });
            });


        b.click(function () {

            b.unbind('mouseenter mouseleave click');

            // fade the text
            b.find('span').fadeOut(500);

            // move the shopping cart
            b.find('i').animate({ left: '235' }, 2000, 'easeOutBounce');

            // tilt the entire button
            $({ tilt: 0 }).animate({ tilt: 20 },
                {
                    duration: 1000,
                    step: function (tilt) {
                        b.css('transform', 'rotate(' + tilt + 'deg)');
                    }
                });

        });


    }
}(window.PS = window.PS || {}));


