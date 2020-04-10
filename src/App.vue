<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">加载MP4视频</router-link> |
            <router-link to="/about">创建flv视频</router-link> |
            <router-link to="/index">创建vlc视频</router-link>
        </div>
        <router-view />
    </div>
</template>

<style>
    html,body{
        margin: 0;
        padding: 0;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 10px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
