// PieChart.js

(function (ns) {

    ns.PieChart = function (id, title, data) {
        var pieChart = $('#' + id);
        var slices;
        var centerX = 150;
        var centerY = 150;
        var radius = 100;

        var createSlices = function (data) {
            slices = [];
            var startAngle = 0;
            for (var i = 0; i < data.length; i++) {
                var slice = data[i];
                slices.push(slice);
                slice.canvas = $('<canvas class="pieSlice" width="300px" height="300px"></canvas>');
                pieChart.append(slice.canvas);

                // draw the slice in the canvas
                var c = slice.canvas[0];
                var context = c.getContext('2d');
                context.beginPath();
                context.moveTo(centerX, centerY);

                context.arc(centerX, centerY, radius, startAngle, startAngle + (slice.pct / 100) * Math.PI * 2, false);
                context.lineTo(centerX, centerY);

                context.fillStyle = slice.color;
                context.fill();

                context.lineWidth = 1;
                context.strokeStyle = 'black';
                context.stroke();

                startAngle = startAngle + (slice.pct / 100) * Math.PI * 2;
            }
        };

        
        createSlices(data);

    };

})(window.PS = window.PS || {});


