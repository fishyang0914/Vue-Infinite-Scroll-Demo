<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    components:{
    },
    data () {
        return {
            userId: 'fishyang0914',
            vb: null,
            scrollY: 0
        }
    },
    computed: {
        ...mapGetters([
            'repo',
        ]),
    },
    methods:{
        ...mapActions([
            'getRepo',
        ]),
    },
    created(){
        this.getRepo(this.userId)
    },
    mounted(){
        // this.getRepo(this.userId)
        this.vb = this.$refs.vb
        this.vb.addEventListener('scroll', () => {
            this.scrollY = this.$refs.vb.scrollTop
            console.log(this.$refs.vb.scrollTop)

            if(this.scrollY > 150) this.getRepo(this.userId)
        }, false)
    }
}
</script>
<template>
    <article>
        <h2 class="title"> Infinite Scroll Demo</h2>
        <div class="viewBox" ref="vb">
        <section v-for="(obj, idx) in repo" :key="obj.id + idx">
            <h3>Title: {{obj.name}}</h3>
            <p>Desc: {{obj.description}}</p>
            <p>Url: {{obj.html_url}}</p>
        </section>
    </div>
    </article>
</template>
<style lang='scss' scoped>
.title {
    margin-bottom: 10px;
}
.viewBox {
    height: 69px;
    overflow: auto;
}
</style>