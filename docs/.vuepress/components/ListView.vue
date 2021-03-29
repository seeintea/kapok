<template>
  <article class="article-view">
    <h1>
      <a :href="href">{{ title }}</a>
    </h1>
    <div class="date">
      <img :src="getImgSrc" />
      {{ createTime }}
    </div>
    <section>{{ summary }}</section>
  </article>
</template>

<script>
import { ListConf } from "../blog.config";

export default {
  name: "ListView",
  props: {
    title: String,
    summary: String,
    createTime: String,
    href: String,
  },
  data: function () {
    return {
      conf: ListConf,
    };
  },
  computed: {
    getImgSrc: function () {
      if (this.conf.date === undefined || this.conf.date === "") {
        return "/date.svg";
      }
      return this.conf.date;
    },
  },
};
</script>

<style lang="stylus">
article.article-view {
  margin: 1rem 0;
  line-height: 1.5;
  color: #333333;

  h1 {
    margin: 0;
    font-weight: 600;
    font-size: 2rem;
  }

  a {
    color: #596d55;
    text-decoration: none;
  }

  .date {
    font-style: italic;
    font-size: 1rem;
    display: flex;
    align-items: center;
    color: #999999;

    img {
      width: 1.2rem;
      margin: -0.1rem 0.1rem 0 0;
    }
  }

  section {
    font-size: 1.1rem;
  }
}
</style>