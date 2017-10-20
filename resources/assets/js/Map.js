class Map {

    constructor(data, width, height, vue) {
        this.data = data;
        this.raphael = require('raphael');
        this.paper = this.raphael(document.getElementById('map'), width, height);
        this.vue = vue;
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

            this.paper.path(`M${x1},${y1}L${x2},${y2}`)
                .attr({stroke:'#C00',width:50, fill:'#c00'});
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

            this.paper.text(x + drawSystemOffsetX + drawSystemSize/2 + 8, y + drawSystemOffsetY - 6, name)
                .attr({fill:'#000', font:'Helvetica', fontsize: 9});

            if (region != undefined) {
                this.paper.text(x + drawSystemOffsetX + drawSystemSize/2 + 8, y + drawSystemOffsetY - 6, region)
                    .attr({fill:'#00f', font:'Helvetica', fontsize: 9});
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
                let sys = this.paper.rect(x + drawSystemOffsetX - drawSystemSize/2, y + drawSystemOffsetY  - drawSystemSize/2, drawSystemSize, drawSystemSize)
                    .attr({fill: '#000'})
                    .click(() => {
                        this.vue.openInfoPanel();
                    });
            } else {
                let sys = this.paper.circle(x + drawSystemOffsetX, y + drawSystemOffsetY, drawSystemSize/2)
                    .attr({fill: '#00f'})
                    .click(() => {
                        this.vue.openInfoPanel();
                    });
            }

        }
    }

}

module.exports = Map;