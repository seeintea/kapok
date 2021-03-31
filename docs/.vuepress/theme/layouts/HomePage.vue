<template>
  <div>
    <Header :defaultAble="this.$store.state.darkMode" />
    <Personal />
    <main ref="articles">
      <ListView
        v-for="(item, idx) in auto"
        :key="idx"
        :title="item.title"
        :href="item.permalink"
        :summary="item.summary"
        :createTime="item.create_time"
      />
    </main>
    <Footer />
  </div>
</template>

<script>
import autoData from "../../auto.json";

import Header from "../components/Header";
import Personal from "../components/Personal";
import ListView from "../components/ListView";
import Footer from "../components/Footer";

export default {
  name: "HomePage",
  components: {
    Header,
    Personal,
    ListView,
    Footer,
  },
  data: () => {
    return {
      auto: autoData,
    };
  },
};
</script>