<template>
    <div id="map" width="1024" height="786"></div>
</template>

<script>
    export default {
        mounted() {
            let Map = require('../Map');

            axios.get('/region/Curse')
                .then(response => {
                    let map = new Map(JSON.parse(response.data));
                    map.draw();
                });
        },
    }
</script>
