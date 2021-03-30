<template>
  <footer class="site-ft">
    <div class="link">
      <a
        v-for="(item, idx) in conf.link"
        :key="idx"
        :href="item.href"
        :title="item.name"
        target="_blank"
      >
        <img :src="item.data" />
      </a>
    </div>
    <div class="copyright">
      <a href="//beian.miit.gov.cn" target="_blank" class="miit">{{ conf.miit }}</a>
      <div v-if="conf.vuepress" class="power">
        Power by
        <a href="https://vuepress.vuejs.org/" target="_blank">VuePress</a>
      </div>
    </div>
  </footer>
</template>

<script>
import { FootConf } from "../blog.config";

export default {
  name: "Footer",
  data: () => {
    return {
      conf: FootConf,
    };
  },
};
</script>

<style lang="stylus">
footer.site-ft {
  margin: 3rem 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .link {
    a {
      margin: 0 0.5rem 0 0;
    }

    img {
      width: 1.3rem;
      height: 1.3rem;
    }
  }

  .copyright {
    font-size: 0.8rem;
    color: #999999;

    a {
      color: var(--linkTitle);
    }

    .miit {
      text-decoration: none;
    }
  }
}
</style>