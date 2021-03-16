<template>
  <div class="top">
    <h1>{{ msg }}</h1>
    3月から自分の作ったものをまとめておく場所、デザインはまだ終わってない
    <hr>
    <h2>SNS</h2>
    <span id="sns" align="center">
      <p>
      <a href="https://twitter.com/OkppGbFhZoJQRgL"><img src="@/assets/img/twitter.png" alt="Twitter" width="4%" height="12.5%"></a>
      <a href="https://github.com/Mimori256"><img src="@/assets/img/github.png" alt="GitHub"></a>
      </p>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      msg: "ポートフォリオ的な"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  background-color: white;
  height: 500px;
}
h1 {
  color: black;
}
</style>
