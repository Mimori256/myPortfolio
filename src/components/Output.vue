<template>
  <div class="output">
    <h1>作ったもの一覧</h1>
    <hr>
    <div class="content" v-for="item of items">
      <h3> {{ item.name }} </h3>
      <div class="text"><p> {{ item.text }} </p></div>
      <div class="lang"><p> {{ item.lang }} </p></div>
    <p> <a v-bind:href="item.src">ソース(GitHub)</a> </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Output',
  data () {
    return {

    items: [
  {
    "name": "Twins-notify",
    "text": "Twinsの掲示板の更新をメールで知らせる",
    "src" : "https://github.com/Mimori256/Twins-notify-Tutorial",
    "lang": "GAS"
  },

  {
    "name": "Atcoder_tester",
    "text": "Atcoderの問題のサンプルの取得とテストを自動で行う",
    "src": "https://github.com/Mimori256/Atcoder_tester",
    "lang": "Python"
  },
  {
    "name": "myPortfolio",
    "text": "このWebページのこと、アウトプットをまとめている",
    "src": "https://github.com/Mimori256/myPortfolio",
    "lang": "Vue",
  }
  ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.output {
  text-align: center;
}

div.content {
  background-color: #eee;
  display: inline-block;
  margin: 10px;
  width: 30%;
}

div.text {
  color: gray;
}

div.lang {
    display:inline-block;
    padding: 0.2em 0.5em;
    margin: 1em 0;
    color: #FFF;
    background: green;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
}
div.lang p {
    margin: 0; 
    padding: 0;
}
  

h1 {
  color: forestgreen;
}

h3 {
  color: mediumseagreen;
  font-weight: bold;
}

p {
  width: 90%;
  display: inline-block;
  text-align: center;
}

</style>
