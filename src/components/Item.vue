<!--
 * @Author: Yokee
 * @Date: 2020-11-28 09:45:19
 * @LastEditTime: 2020-11-28 09:56:38
 * @FilePath: \vegetables\src\components\Item.vue
-->
<template>
    <div class="item">
        <div class="img">图片</div>
        <span class="title">文字</span>
        <span>描述</span>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .item{
        width: 280px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px 10px 0;
    }
    .img{
        width: 280px;
        height: 340px;
        border: 1px solid;
    }
    .title{
        
    }
</style>