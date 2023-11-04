<template>
    <div>
        <h1>test</h1>
        <XmlToVue html="<p>p</p><vue-para>vue-para</vue-para>"/>
    </div>
</template>

<!-- <script>
    import XmlToVue from '~/components/XmlToVue.vue'

    export default {
        components: {
            XmlToVue
        }
    }
</script> -->

<style scoped>
</style>

<!-- <page-query>
    query ($path: String) {
        currentPage: paligoPage (path: $path) {
            xml
        }
        pages: allPaligoPage {
            edges {
                node {
                    path,
                    resourceId,
                    uid
                }
            }
        }
    }
</page-query> -->