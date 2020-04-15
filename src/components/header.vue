<template>
    <article id="Header">
        <aside>
            <!-- <router-link to="/">vue-video-player-mp4</router-link> |
            <router-link to="/videoTcplayer">Tcplayer-mp4</router-link> |
            <router-link to="/videoflv">flv-live</router-link> |
            <router-link to="/videoie">vue-video-player-rtmp</router-link> -->
            <template v-for="(v, k) in menu">
                <router-link :to="{ name: v.path }">{{ v.name }}</router-link> |
            </template>
        </aside>
    </article>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                menu: [
                    { id: 1, name: 'vue-video-player-mp4', path: '/' },
                    { id: 2, name: 'Tcplayer-mp4', path: 'videoTcplayer' },
                    { id: 3, name: 'flv-live', path: 'videoflv' },
                    { id: 4, name: 'vue-video-player-rtmp', path: 'videoie' }
                ]
            };
        },
        components: {},
        computed: {
            num() {
                return function(o) {
                    var self = this;
                    console.log(o);
                };
            }
        },
        created() {},
        mounted() {},
        methods: {}
    };
</script>

<style scoped>
    #Header {
        width: 100%;
        height: 3rem;
        background-color: #ececec;
    }

    #Header>aside {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #Header>aside>a {
        height: 2rem;
        line-height: 2rem;
        color: #2c3e50;
        position: relative;
        top: -0.14rem;
        margin: 0 0.12rem;
        padding: 0 0.8rem 0 0.8rem;
        background-repeat: no-repeat;
        font-weight: bold;
    }

    #Header>aside>a:hover,
    #Header>aside>a.nav-active,
    #Header>aside>a.router-link-exact-active{
        color: #42b983;
    }

    #Header>aside>div.nav-center {
        width: 17rem;
        height: 100%;
        margin: 0 0.1rem;
    }
</style>
