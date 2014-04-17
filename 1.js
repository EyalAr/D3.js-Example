var data = [{
    x: '25%',
    y: '25%',
    r: '5%',
    c: 'red'
}, {
    x: '50%',
    y: '50%',
    r: '5%',
    c: 'green'
}, {
    x: '75%',
    y: '75%',
    r: '5%',
    c: 'blue'
}];;

var canvas = d3.select('#canvas');

var circles = canvas
    .selectAll('circle')
    .data(data);

circles
    .enter()
    .append('circle')
    .attr('cx', function(d) {
        return d.x;
    })
    .attr('cy', function(d) {
        return d.y;
    })
    .attr('fill', function(d){
        return d.c;
    })
    .attr('r', function(d) {
        return d.r;
    });