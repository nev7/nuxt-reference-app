<template>
<v-container v-show="isVisible">
    <v-progress-linear :indeterminate="true"></v-progress-linear>
</v-container>
</template>

<script>
export default {
    name: 'ProgressBar',
    props: {
        isVisible: false,
    }
}
</script>

<style>
</style>
