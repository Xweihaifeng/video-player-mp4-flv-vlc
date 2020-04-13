<template>
    <div class="videoie">
        <video-player ref="videoPlayer" :options="videoOptions" class="vjs-custom-skin videoPlayer" :playsinline="true"></video-player>
    </div>
</template>

<script>
    import 'video.js/dist/video-js.css'
    import {
        videoPlayer
    } from 'vue-video-player'
    import 'videojs-flash'
    import SWF_URL from 'videojs-swf/dist/video-js.swf' // 也可以不加swf,加的话需要webpack配置，后面有说到
    export default {
        data() {
            return {
                rtmp: 'rtmp://223.70.215.65:22000/live/05428769630911160101',
                flv: 'http://223.70.215.65:22000/live?port=1935&app=live&stream=05428769630911160101',
                videoOptions: {
                    live: true,
                    autoplay: true,
                    fluid: true,
                    notSupportedMessage: '暂时无法播放',
                    controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: false,
                        fullscreenToggle: true // 全屏按钮
                    },
                    techOrder: ['flash'],
                    flash: {
                        hls: {
                            withCredentials: false
                        },
                        swf: SWF_URL // 引入静态文件swf
                    },
                    sources: [{ // 流配置，数组形式，会根据兼容顺序自动切换
                        type: 'rtmp/mp4',
                        src: 'rtmp://58.200.131.2:1935/livetv/hunantv' //这是芒果TV现场直播视频，地址是可以用的，最后需要替换成后端给的项目地址
                    }],
                    /* sources: [{
                        type: 'rtmp/mp4',
                        src: 'rtmp://223.70.215.65:22000/live/05428769630275010101'
                    }] */
                }
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>
