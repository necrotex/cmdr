<template>
    <div id="map"></div>
</template>

<script>

    export default {
        mounted() {
            let Map = require('../Map');
            let _vue = this;

            axios.get('/region/Curse')
                .then(response => {
                    let mapElement = document.getElementById('map');
                    let map = new Map(JSON.parse(response.data), mapElement.width, mapElement.height, _vue);
                    map.draw();
                });
        },

        methods: {
            openInfoPanel() {
                this.$root.$refs.asideLeft.open()
            },
            closeInfoPanel() {
                this.$root.$refs.asideLeft.close()
            },
        }
    }
</script>
