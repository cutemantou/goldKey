<template>
    <div>
        <headerDiv></headerDiv>
        <div style="margin-top:88px;">这是首页内容</div>
        <router-view></router-view>
        <foot></foot>
    </div>
</template>
<script>
import foot from '@/page/footer.vue'
import headerDiv from '@/page/header.vue'
export default{
   components:{
     foot,
     headerDiv
   },
   data(){
     return {
     };
   },
   methods:{

   }
}
</script>
<style>

</style>