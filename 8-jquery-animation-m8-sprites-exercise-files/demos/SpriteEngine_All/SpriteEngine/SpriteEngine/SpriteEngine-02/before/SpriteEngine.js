
// SpriteEngine.js

(function (ns) {

    ns.Sprite = function (img) {

        this.image = $('<img class="sprite" src="'+img+'" />');
        this.x = 0;
        this.y = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.loops;
    };

    ns.GameSurface = function (id) {

        this.surface = $('#' + id);
        this.sprites = [];
        this.timer;

        this.addSprite = function (s) {
            this.sprites.push(s);
            this.surface.append(s.image);
        };

    };

})(window.PS = window.PS || {});