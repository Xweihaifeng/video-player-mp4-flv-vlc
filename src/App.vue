<template>
    <div id="app">
        <vHeaders></vHeaders>
        <div id="content">
            <router-view />
        </div>
    </div>
</template>

<script>
    import vHeaders from '@/components/header.vue';
    export default {
        data() {
            return {}
        },
        created() {
            var self = this;
            self.myBrowser();
            console.info('当前浏览器：', self.myBrowser());
        },
        components: {
            vHeaders
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
            }
        }
    }
</script>

<style>
    html,
    body {
        margin: 0;
        padding: 0;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    #app {
        width: 100%;
        height: 100%;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #content {
        height: calc(100% - 80px);
        padding: 15px;
    }

    .video {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
