<template>
  <div class="xg-ctx">
    <Header :defaultAble="this.$store.state.darkMode" />
    <main>
      <h1>{{$frontmatter.title}}</h1>
      <Content />
    </main>
    <Personal class="xg-ctx-self" />
    <Footer />
  </div>
</template>


<script>
import Header from "../components/Header";
import Personal from "../components/Personal";
import Footer from "../components/Footer";

export default {
  name: "Layout",
  components: {
    Header,
    Personal,
    Footer,
  },
};
</script>

<style lang="stylus">
.xg-ctx {
}

.xg-ctx-self {
  margin: 3rem 0;
}

code[class*='language-'], pre[class*='language-'] {
  font-size: 0.8rem;
}

.dark div[class*='language-'] {
  background-color: #011627;
}
</style>