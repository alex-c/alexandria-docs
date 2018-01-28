<template>
    <div id="main-page">
        <div class="container" style="padding:12px;">
            <div class="tile is-ancestor">
                <div class="tile is-8 is-parent">
                    <div class="tile">
                        <article class="tile is-child notification">
                            <p class="title">Welcome to Alexandria</p>
                            <p class="subtitle">The headless CMS based on Node.js and MongoDB.</p>
                            <div class="content">
                                Alexandria is a
                            </div>
                        </article>
                    </div>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification is-warning">
                        <div class="content">
                            <p class="title">Getting started</p>
                            <p class="subtitle">Jump right into Alexandria with the <router-link to="/docs">Getting Started</router-link> guide.</p>
                            <div class="content">
                                Hello
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
        <div class="hero is-light">
            Hero element --
        </div>
    </div>
</template>

<script>
export default {
    name: 'mainpage',
    components: {},
    data: function() {
        return {};
    }
}
</script>

<style lang="scss">
@import "../assets/global-style.scss";

#main-page {
    height: 100%;
    background-color: $blue;
}
</style>
