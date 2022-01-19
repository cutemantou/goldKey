<template>
    <div>
        <headerDiv></headerDiv>
        <slot></slot>
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