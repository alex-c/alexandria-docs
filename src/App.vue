<template>
    <div id="app">
        <div id="main-nav">
            <nav class="navbar shadowed" role="navigation" aria-label="main navigation" >
                <div class="container">
                    <div class="navbar-brand">
                        <router-link to="/">
                            <span class="navbar-item">
                                <img id="logo" src="./assets/Alexandria-32.png" alt="Alexandria" /> Alexandria
                            </span>
                        </router-link>
                    </div>
                    <div class="navbar-menu">
                        <div class="navbar-end">
                            <a class="navbar-item" target="_blank" href="https://github.com/alex-c/alexandria">
                                <b-icon icon="github-circle" type="is-dark" />
                            </a>
                            <div class="navbar-item">
                                <router-link to="/docs"><button class="button is-link">Documentation</button></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <div id="main-content">
            <router-view></router-view>
        </div>
        <footer id="main-footer" class="footer shadowed">
            <div class="container">
                <div class="content has-text-centered">
                    <p>
                        Text here
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'app',
    data: function() {
        return {};
    }
}
</script>

<style lang="scss">
@import "./assets/global-style.scss";

body {
    margin: 0px;
    padding: 0px;
}

#app {
    /*font-family: 'Raleway', sans-serif;*/
}

#main-nav {
    height: $main-nav-height;
    font-family: 'Old Standard TT', serif;
    font-size: 24px;
}

#logo {
    float: left;
    margin-right: 8px;
}

#main-content {
    height: calc(100vh - (#{$main-nav-height} + #{$main-footer-height}));
}

#main-footer {
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
}
</style>
