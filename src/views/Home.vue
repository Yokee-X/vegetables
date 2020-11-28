<!--
 * @Author: Yokee
 * @Date: 2020-11-28 00:39:04
 * @LastEditTime: 2020-11-28 10:01:58
 * @FilePath: \vegetables\src\views\Home.vue
-->
<template>
  <div class="container">
    <div class="header">
      <div class="header_container"><span>标题栏 导航栏</span></div>
    </div>
    <div class="main">
      <div class="main_header"> <span>轮播图 筛选框、、、</span>   </div>
      <div class="main_container" >
        <Item v-for="(item,index) in list" :key="index"></Item>
      </div>
    </div>
    <div class="footer">
      <div class="footer_container"><span>底部  联系电话、邮箱、、、</span></div>
    </div>
  </div>
</template>

<script>
import Item from "../components/Item";
export default {
  components: {
    Item
  },
  data(){
    return{
      list:[]
    }
  },
  beforeMount(){
    this.run()
  },
  methods:{
    run(){
      for(let i=0;i<50;i++){
        this.list.push(i)
      }
    }
  }
  
}
</script>

<style scoped>
span{
  font-size: 28px;
}
.header{
  height: 100px;
  width: 100%;
  min-width: 1200px;
}
.header_container{
  height: 100px;
  width: 1200px;
  border: 1px solid;
  margin: 0 auto;
}
.main{
  width: 100%;
}
.main_header{
  width: 1200px;
  height: 500px;
  margin: 0 auto;
  border: 1px solid;;
}
.main_container{
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-end;
}
.footer{
  margin-top: 120px;
  height: 400px;
  width: 100%;

}
.footer_container{
  height: 400px;
  width: 1200px;
  margin: 0 auto;
  border: 1px solid;
}
</style>