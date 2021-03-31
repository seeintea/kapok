<template>
  <aside class="xg-self">
    <img class="xg-self-avatar" :src="conf.avatar" />
    <div class="xg-self-info">
      <div v-if="conf.name !== undefined && conf.mail !== undefined">
        Personal blog by
        <a :href="'mailto:' + conf.mail">{{ conf.name }}</a>
      </div>
      {{ conf.slogan }}
    </div>
  </aside>
</template>

<script>
import { InfoConf } from "../../blog.config";

export default {
  name: "Personal",
  data: function () {
    return {
      conf: InfoConf,
    };
  },
};
</script>

<style lang="stylus">
.xg-self {
  display: flex;
  align-items: center;
  margin: 0 0 3rem;
  font-size: 1.2rem;
  line-height: 1.5;
  color: var(--gary3);
}

.xg-self-avatar {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  margin: 0 1rem 0 0;
}

.xg-self-info {
  a {
    color: var(--gary2);
  }
}
</style>
