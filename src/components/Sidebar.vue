<template>
    <div id="sidebar">
        <div class="sidebar-link">Getting Started</div>
        <div class="sidebar-link">Auth</div>
        <div class="sidebar-link">Users</div>
        <div class="sidebar-link">Collection</div>
    </div>
</template>

<script>
export default {
    name: 'sidebar',
    data: function() {
        return {};
    }
}
</script>

<style lang="scss">
@import "../assets/global-style.scss";

#sidebar {
    position: fixed;
    left: 0px;
    width: $sidebar-width;
    height: calc(100vh - (#{$main-nav-height} + #{$main-footer-height}));
    background-color: $blue;
    box-shadow: 3px 0px 3px -2px $dark;
}

.sidebar-link {
    padding: 6px;
    color: white;
    text-shadow: 1px 1px #3C3C3C;
    border-bottom: 1px solid hsl(217, 72%, 48%);
}

.sidebar-link:hover {
    cursor: pointer;
    background-color: hsl(217, 93%, 51%);
}
</style>
