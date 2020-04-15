<template>
    <section class="video">
        <vueVideoPlayer :src="rtmp" />
    </section>
</template>

<script>
    import vueVideoPlayer from './videoswitch.vue'

    export default {
        data() {
            return {
                rtmp: 'rtmp://223.70.215.65:22005/live/05428769639468880101',
                rtmp1: 'rtmp://58.200.131.2:1935/livetv/hunantv',
            }
        },
        components: {
            vueVideoPlayer
        },
        mounted() {
            var self = this;
            self.switchUrl();
        },
        methods: {
            switchUrl() {
                var self = this;
                self.rtmp = self.rtmp1;
            }
        }
    }
</script>

<style scoped>

</style>
