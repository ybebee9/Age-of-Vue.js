<template>
  <div>
<!--    <app-header v-bind:하위컴포넌트에서 정의한 props 속성 이름="상위컴포넌트 데이터 이름"></app-header>-->
    <app-header
            v-bind:propsdata="str"
            v-on:renew="renewStr"
    ></app-header>
  </div>
</template>

<script>
  import AppHeader from "./components/AppHeader";

  export default {
  data: function () {
    return {
      str: 'header'
    }
  },
  components: {
    'app-header': AppHeader
  },
  methods: {
      renewStr: function () {
        this.str = 'hi';
      }
  }
}
</script>

<style>

</style>