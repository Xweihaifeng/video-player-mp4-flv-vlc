<template>
    <div class="flv">
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
            myBrowser() {
                var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
                var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
                var isIE = userAgent.indexOf("Trident") > -1 && !isOpera; //判断是否IE浏览器
                var isEdge = userAgent.indexOf("Edge") > -1; //判断是否IE的Edge浏览器
                var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
                var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
                var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器
                if (isIE) return "IE";
                if (isOpera) return "Opera";
                if (isEdge) return "Edge";
                if (isFF) return "FF";
                if (isSafari) return "Safari";
                if (isChrome) return "Chrome";
            },
            flv_load(o) {
                var self = this;
                console.log('当前浏览器：', self.myBrowser());
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
