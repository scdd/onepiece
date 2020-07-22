<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/*通用初始化样式*/
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td{margin:0;padding:0}
table{border-collapse:collapse;border-spacing:0}
fieldset,img{border:0}
address,caption,cite,code,dfn,em,strong,th,var{font-style:normal;font-weight:normal}
ol,ul{list-style:none}
caption,th{text-align:left}
h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}
q:before,q:after{content:''}
abbr,acronym{border:0;font-variant:normal}
sup{vertical-align:text-top}
a{text-decoration:none}
sub{vertical-align:text-bottom}
input,textarea,select{font-family:inherit;font-size:inherit;font-weight:inherit}
input,textarea,select{*font-size:100%}
html,body .ost_box{min-width:980px;}
.wrapper{position:relative;*zoom:1;margin:0 auto;overflow:hidden;background-color: #e9e9e9;background: linear-gradient(rgb(255, 255, 255) 0%, rgb(233, 233, 233) 100%);}
body,button,select,textarea,input {font-family:'\5FAE\8F6F\96C5\9ED1', Tahoma, SimSun, Verdana;}
.clearfix:after{clear:both;display:block;visibility:hidden;height:0;content:" ";font-size:0}.clearfix{*zoom:1}
.fl{float:left;_display:inline;}
.fr{float:right;_display:inline;}
</style>
