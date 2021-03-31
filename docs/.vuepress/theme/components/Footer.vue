<template>
  <footer class="xg-ft">
    <div class="xg-link-x">
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
    <div class="xg-side-x">
      <a href="//beian.miit.gov.cn" target="_blank" class="miit">{{ conf.miit }}</a>
      <div v-if="conf.vuepress" class="znp-ft-power">
        Power by
        <a href="https://vuepress.vuejs.org/" target="_blank">VuePress</a>
      </div>
    </div>
  </footer>
</template>

<script>
import { FootConf } from "../../blog.config";

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
.xg-ft {
  margin: 3rem 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.xg-link-x {
  a {
    margin: 0 0.5rem 0 0;
  }

  img {
    width: 1.3rem;
    height: 1.3rem;
  }
}

.xg-side-x {
  font-size: 0.8rem;
  color: var(--gary1);

  a {
    color: var(--gary1);
  }

  .miit {
    text-decoration: none;
  }
}
</style>