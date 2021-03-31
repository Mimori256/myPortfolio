<template>
  <transition>
  <div class="top">
    <h1>{{ msg }}</h1>
    <p>3月から自分の作ったものをまとめておく場所、デザインはまだ終わってない</p>
    <div class="wallpaper" align="center">
      <img src="@/assets/img/sakura.jpg" alt="桜" width="850" height="500">
    </div>
    <h2>勉強中</h2>
    <div class="learn" align="center">
      {{ learn }}
    </div>
    <h2>SNS</h2>
    <div class="sns" align="center">
      <p>
        <a href="https://twitter.com/OkppGbFhZoJQRgL"><img src="@/assets/img/twitter.png" alt="Twitter" width="64" height="64" hspace="10"></a>
        <a href="https://github.com/Mimori256"><img src="@/assets/img/github.png" alt="GitHub" hspace="10"></a>
      </p>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      msg: "ポートフォリオ(製作中)",
      learn: ["Python", "C++", "JavaScript", "Vue", "GitHub", "Linux"].join(" / ")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  background-color: white;
}

p {
  color: gray;
}

h1 {
  color: forestgreen;
}

h2 {
  color: forestgreen;
}
.v-enter {
  transform: translate(-100px, 0);
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: all 1s 0s ease;
}

</style>
