<template>
  <div class="article-ctx">
    <Header />
    <Content />
    <Personal class="personal" />
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
.article-ctx {
  .personal {
    margin: 3rem 0;
  }
}
</style>