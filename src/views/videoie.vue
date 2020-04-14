<template>
    <div class="videoie">
        <video-player ref="videoPlayer" :options="videoOptions" class="vjs-custom-skin videoPlayer" :playsinline="true"></video-player>
    </div>
</template>

<script>
    import 'video.js/dist/video-js.css'
    import 'vue-video-player/src/custom-theme.css'
    import 'videojs-flash'

    import { videoPlayer } from 'vue-video-player'
    import SWF_URL from 'videojs-swf/dist/video-js.swf' // 也可以不加swf,加的话需要webpack配置，后面有说到

    export default {
        data() {
            return {
                rtmp: 'rtmp://10.0.16.11:1935/live/05428769630911160101',
                rtmp1: 'rtmp://58.200.131.2:1935/livetv/hunantv',
                videoOptions: {},
            }
        },
        mounted() {
            var self = this;
            self.video_options1();
        },
        methods: {
            video_options1() {
                var self = this;
                self.videoOptions = {
                    live: true,
                    autoplay: true, // 如果true，浏览器准备好时开始播放
                    muted: false, // 默认情况下将会消除任何音频
                    loop: false, // 是否视频一结束就重新开始
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
                    poster: "/poster.png", //你的封面地址
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar: {
                        timeDivider: false, //当前时间和持续时间的分隔符
                        durationDisplay: false, //显示持续时间
                        currentTimeDisplay: true, // 当前时间
                        remainingTimeDisplay: false, //是否显示剩余时间功能
                        playToggle: true, // 暂停和播放键
                        volumeControl: false, // 声音控制键
                        progressControl: true, // 进度条
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
                        type: 'rtmp/flv',
                        src: self.rtmp, //这是芒果TV现场直播视频，地址是可以用的，最后需要替换成后端给的项目地址
                    }]
                }
            }
        }
    }
</script>

<style scoped>

</style>
