<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">加载MP4视频</router-link> |
            <router-link to="/about">创建flv视频</router-link> |
            <router-link to="/videoie">创建vlc视频</router-link>
        </div>
        <div id="content">
            <router-view />
        </div>
    </div>
</template>

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

    #nav {
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
        padding: 0 10px;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }

    #content {
        height: calc(100% - 50px);
    }
</style>
