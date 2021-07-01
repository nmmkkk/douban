<template>
<div id="jj">
 <s-hang></s-hang>
    <x-ia></x-ia>
     <i-you></i-you>
    <router-view/>

</div>
   
</template>
<script>
import sHang from '../components/shang';
import xIa from '../components/xia';
import iYou from '../components/you';

export default {
    components:{sHang,xIa,iYou,}
    
}
</script>
<style>

</style>