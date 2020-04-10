<template>
    <div class="video-js">
        <video-player class="video-player vjs-custom-skin" :playsinline="true" :options="playerOptions"></video-player>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                playerOptions: {
                    live: true,
                    autoplay: true, // 如果true，浏览器准备好时开始播放
                    muted: false, // 默认情况下将会消除任何音频
                    loop: false, // 是否视频一结束就重新开始
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    playbackRates : [ 0.5, 1.0, 1.5, 2.0 ], //可选择的播放速度
                    poster : "/poster.png", //你的封面地址
                    controlBar: {
                        timeDivider: true, //当前时间和持续时间的分隔符
                        durationDisplay: true, //显示持续时间
                        currentTimeDisplay: true, // 当前时间
                        remainingTimeDisplay: false, //是否显示剩余时间功能
                        playToggle: true, // 暂停和播放键
                        volumeControl: true, // 声音控制键
                        progressControl: true, // 进度条
                        fullscreenToggle: true // 全屏按钮
                    },
                    sources: [{
                        type: 'video/mp4',
                        src: '/v.f30.mp4'
                    }],
                    // sources: [{
                    //     type: 'rtmp/flv',
                    //     src: 'rtmp://60.10.57.51:19020/live/camera1'
                    // }],
                    notSupportedMessage: '此视频暂无法播放，请稍后再试' // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
                }
            }
        }
    }
</script>

<style scoped>
    .video-js {
        width: 100%;
        height: 100%;
    }

    .no-video {
        display: flex;
        height: 100%;
        font-size: 14px;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
</style>
