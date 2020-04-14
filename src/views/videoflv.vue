<template>
    <div class="videoflv">
        <video id="videoElement" class="centeredVideo" autoplay controls muted>
            Your browser is too old which doesn't support HTML5 video.
        </video>
    </div>
</template>

<script>
    import flvjs from 'flv.js'
    export default {
        data() {
            return {
                player: null,
                url: 'http://223.70.215.65:22000/live?port=1935&app=live&stream=05428769630911160101'
            }
        },
        mounted() {
            var self = this;
            self.flv_load(self.url);
        },
        methods: {
            flv_load(o) {
                var self = this;
                console.log('浏览器是否支持flv: ' + flvjs.isSupported());
                console.log('浏览器支持flv参数: ', flvjs.getFeatureList());
                if (self.player) self.flv_destroy();

                self.player = flvjs.createPlayer({
                    type: 'flv',
                    isLive: true,
                    url: o
                });
                self.player.attachMediaElement(document.getElementById('videoElement'));
                self.player.load();
            },
            flv_start() {
                var self = this;
                self.player.play();
            },
            flv_pause() {
                var self = this;
                self.player.pause();
            },
            flv_destroy() {
                var self = this;
                self.player.pause();
                self.player.unload();
                self.player.detachMediaElement();
                self.player.destroy();
                self.player = null;
            }
        }
    }
</script>

<style scoped>
    .centeredVideo {
        width: 100%;
    }
</style>
