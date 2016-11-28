
// BuyNowButton.js

(function (ns) {

    ns.BuyNowButton = function (id) {

        var b = $("#" + id);

        setInterval(function () {
            $({ xval: -30 }).animate({ xval: 300 },
                {
                    duration: 2000,
                    step: function (now) {
                        b.css('background', 'radial-gradient(circle 80px at ' + now + 'px 30px, #ffaaaa, red)');
                    }
                })
        }, 8000);

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

    }
}(window.PS = window.PS || {}));


