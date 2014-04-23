(function() {

    var pi = Math.PI,
        cos = Math.cos,
        sin = Math.sin,
        pr = 33, // path radius
        pcx = 50, // path center x
        pcy = 50, // path center y
        fps = 24,
        T = 1000 / fps,
        nc = 50; // number of circles

    function toRad(deg) {
        return (+deg) * pi / 180;
    }

    function getX(a) {
        return pcx + pr * cos(toRad(a));
    }

    function getY(a) {
        return pcy + pr * sin(toRad(a));
    }

    var data = [];
    // generate circles:
    for (var i = 0; i < nc; i++) {
        data.push({
            a: i * (360 / nc),
            r: '2%',
            c: d3.hsl(i * (360 / nc), 1, 0.5).toString()
        });
    }

    var canvas = d3.select('#canvas');

    canvas
        .selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', function(d) {
            return getX(d.a) + '%';
        })
        .attr('cy', function(d) {
            return getY(d.a) + '%';
        })
        .attr('fill', function(d) {
            return d.c;
        })
        .attr('r', 0)
        .transition()
        .ease('elastic')
        .duration(250)
        .attr('r', function(d) {
            return d.r;
        });

    function redraw() {

        var circles = canvas
            .selectAll('circle')
            .data(data);

        circles
            .transition()
            .ease('linear')
            .duration(T)
            .attr('cx', function(d) {
                return getX(d.a) + '%';
            })
            .attr('cy', function(d) {
                return getY(d.a) + '%';
            });

    }

    setInterval(function() {
        for (var i = 0; i < data.length; i++) {
            data[i].a = ++data[i].a % 360;
        }
        redraw();
    }, T);

})();