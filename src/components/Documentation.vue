<template>
    <div id="documentation">
        <sidebar></sidebar>
        <div id="documentation-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Sidebar from './Sidebar.vue';

export default {
    name: 'documentation',
    components: { Sidebar },
    data: function() {
        return {};
    }
}
</script>

<style lang="scss">
@import "../assets/global-style.scss";

#documentation-content {
    margin-left: $sidebar-width;
    padding: 12px;
    background-color: white;
}
</style>
