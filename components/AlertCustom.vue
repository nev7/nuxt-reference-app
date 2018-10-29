<template>
<v-alert :value="true" :color="aColor" :icon="aIcon" outline v-show="aVisible" transition="scale-transition"> {{ aText }} </v-alert>
</template>

<script>
export default {
    name: 'AlertCustom',
    props: {
        aColor: String,
        aIcon: String,
        aVisible: Boolean,
        aText: String,
    },
}
</script>

<style>

</style>
