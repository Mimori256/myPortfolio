<template>
  <transition appear>
  <div class="about">
    <h1>このページについて</h1>
    <div class="desc">
      <p>このWebページはVue.jsとGitHub Pagesを使って作られています。
         ページの表示などに問題があったら、<a href="https://github.com/Mimori256/myPortfolio">GitHub</a>からIssueで連絡してください。
      </p>
    </div>
    <div class="time">
      <p>最終更新日: 2021/04/02</p>
    </div>
  </div>
  </transition>
</template>

<style scoped>
  
  h1 {
      color: forestgreen;
  }

 .desc {
     color: gray; 
 } 

 .v-enter {
  opacity: 0;
}

.v-enter-to {
  opacity: 1;
}

.v-enter-active {
  transition: all 500ms;
}

</style>
