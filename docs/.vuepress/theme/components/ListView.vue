<template>
  <article class="xg-list">
    <h1>
      <router-link :to="href">{{ title }}</router-link>
    </h1>
    <div class="xg-list-date">
      <img :src="getImgSrc" />
      {{ createTime }}
    </div>
    <section>{{ summary }}</section>
  </article>
</template>

<script>
import { ListConf } from "../../blog.config";

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
.xg-list {
  margin: 0 0 3rem;
  line-height: 1.5;
  color: var(--gary2);

  h1 {
    margin: 0;
    font-weight: 600;
    font-size: 2rem;
  }

  a {
    color: var(--gary3);
    text-decoration: none;
  }

  section {
    font-size: 1.1rem;
  }
}

.xg-list-date {
  font-style: italic;
  font-size: 1rem;
  display: flex;
  align-items: center;
  color: var(--gary1);

  img {
    width: 1.2rem;
    margin: -0.1rem 0.1rem 0 0;
  }
}
</style>