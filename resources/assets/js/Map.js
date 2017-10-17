class Map {

    constructor(data) {
        this.data = data;
        this.raphael = require('raphael');
        this.paper = this.raphael(document.getElementById('map'), 1024, 786);
    }

    draw() {

        this.drawConnections(this.data.map.connections);
        this.drawSystemNames(this.data.map.systems);
        this.drawSystems(this.data.map.systems);
    }

    drawConnections(connections){

        for(let i in connections) {

            let x1 = connections[i]['x1'];
            let y1 = connections[i]['y1'];
            let x2 = connections[i]['x2'];
            let y2 = connections[i]['y2'];

            let ps = this.paper.path(`M${x1},${y1}L${x2},${y2}`);
            ps.attr({stroke:'#C00',width:50, fill:'#c00'});
        }
    }

    drawSystemNames(systems) {

        let drawSystemOffsetX = 42;
        let drawSystemOffsetY = 15;
        let drawSystemSize = 12;

        for (let i in systems) {
            let x = Math.floor(systems[i]['x']);
            let y = Math.floor(systems[i]['y']);

            let name = systems[i]['name'];
            let region = systems[i]['region'];

            let ts = this.paper.text(x + drawSystemOffsetX + drawSystemSize/2 + 8, y + drawSystemOffsetY - 6, name);
            ts.attr({fill:'#000', font:'Helvetica', fontsize: 9});

            if (region != undefined) {
                let rts = this.paper.text(x + drawSystemOffsetX + drawSystemSize/2 + 8, y + drawSystemOffsetY - 6, region);
                rts.attr({fill:'#00f', font:'Helvetica', fontsize: 9});
            }

        }

    }

    drawSystems(systems) {
        let drawSystemOffsetX = 28;
        let drawSystemOffsetY = 14;
        let drawSystemSize = 12;

        for (let i in systems) {
            let x = Math.floor(systems[i]['x']);
            let y = Math.floor(systems[i]['y']);
            let name = systems[i]['name'];
            let stn = systems[i]['hasStation'];

            let drawXMax = Math.max(drawXMax, Math.floor(x * 1) + drawSystemOffsetX);
            let drawYMax = Math.max(drawYMax, Math.floor(y * 1) + drawSystemOffsetY);


            if (stn) {
                let ss = this.paper.rect(x + drawSystemOffsetX - drawSystemSize/2, y + drawSystemOffsetY  - drawSystemSize/2, drawSystemSize, drawSystemSize);
                ss.attr({fill: '#000'});
            } else {
                let ns = this.paper.circle(x + drawSystemOffsetX, y + drawSystemOffsetY, drawSystemSize/2);
                ns.attr({fill: '#00f'});
            }
        }
    }

}

module.exports = Map;