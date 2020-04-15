<template>
    <section class="video">
        <div class="video-TcPlayer">
            <div id="video-container" autoplay></div>
        </div>
    </section>
</template>

<script>
    import { TcPlayer } from '../../public/js/tcplayer/TcPlayer-2.3.2.js'
    export default {
        name: 'videoTcPlayer',
        data() {
            return {
                tcplayer: null
            }
        },
        mounted() {
            var self = this;
            self.videoPlay();
        },
        methods: {
            videoPlay() {
                var self = this;
                self.tcplayer = new TcPlayer('video-container', {
                    mp4_hd: '/mp4/v.f30.mp4',
                    autoplay: true,
                    live: true,
                    width: '565',
                    height: '320',
                    volume: 0.5,
                    x5_player: true,
                    h5_flv: true,
                });
            }
        }
    }
</script>

<style scoped>
    .video-TcPlayer {
        width: 800px;
        min-height: 400px;
        display: flex;
        justify-content: center;
    }
</style>
