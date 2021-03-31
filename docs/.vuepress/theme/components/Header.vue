<template>
  <header class="xg-hd">
    <a href="/" class="xg-site">{{ conf.title }}</a>
    <div v-if="conf.dark" @click="darkMode" class="xg-dark">
      <img
        src="data:image/png;base64,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"
      />

      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAE/0lEQVRYR9WWbUxbVRjHn3NvW9pSYNTxUmBQigLisEtoC5ubxhGNQHVxuvrBbTqjUYcQ2DCSbA5ITByGDLIsWdiURLcJlr0gsCEGlcwh40UZA2QJWcs7AlIYLy3Q3nvM7XJd6dpSupnF86VJz3Of/+/8z/OccxA84oEesT48EID5nCqfWQD3zVbrryfDYwBGnMZIy+MBWMxY4ymExwBUuSqPIOgmMIquWXjGXFsArE2MY9xAmpY/V3PFLQCqmJfHJCKzlwtsEzrbAnsAfJwXhzKXHcK4BWC/iiTpS9Lr/T/0r7Y6Zp4RxxTSIhJrHEG4DZAY+crTEgmRYzbDi3PztP5qb/Xm1QBYcQzwFALocQRxHwDVmWWtaFJe8m9lK2RpWQij4oy3xZaq+jnz4F+WPe26mguMgHWvndi7ZgcYcUSAdb8xDQUMhEKqzgsJ4hwsOhzi4+dDwK4PByev9lYHsslXA2Dj3K4BWweUMvW+J6P4pcV5Eq6/HwmNzfNQePLvuvqOqlRX9j+ULkgMT4kT+XHbzh4PFwat51j1Tn9rgMrLd4oabn7/8X8CYEuukKkv7UgWPXsoM1jMip2/cge+ODmZ395fu6IdGddsa8YVnH3siiJkARSF8j7O9Ijx5Odhhk1xAut+M6N/eBnSD4221P1RlWQrQndldRLxJfLVuoKZdwnAJlBFvbx9g9iirSyL4QOAt23iba/dXjKakKxjqHrUWrQkvI6A0mAgtZiC8+46weZ0eA4opOr8d5MX8t7Piu/DQDxhC5D+6cicbsB8qr6jKof9n+7O6iY2lmx05gBzktqfoi4BrFaVq/QoIrYXfMQptomHx8yg2T9IWyw4ub2/ttGRrfYgawZgHNBsNr6Vs9trHMJjEu0TMu342YmJmdlZ+lUWwmVXfJf0DHrjepOjmBVbYDwmCBUeMI0kSFMTYyT0pTOZBgmKVd4ADneT/cdMS35ZYQBvIXnUZKLKWnS1ffYxCpk6db0fcXSrSvjO4dKKdpcAjLgXooeXMBHGQGyNTjNeyDEIAoKFfSCNDwMEAvsE07MUlJ4xTFT/NCt+TiU80fjr4mlvX5zB5aJIjOFxIR8FLy9a5q/cqA125pBDB5hgZaT67J5tRmV6ynw0ERj+Gw4M2+K0yGgMJIFAP2iGzl4TyMJ5EBHKg4pzt0fK6ojyNn2N9eBi2tz+jeD0NlRGpG1BJPz89UfTXtESCyBxSDMEbfADkrReQC4HRd0a6NQvafJBTgAhb9FX32TEaQprCRJpbCFcXsfKSPV7Ij4+1nBkUnRXEFlQqKwJrQsIw4iIcggxM9lq1OtUmV/5DnUNkEdaDzS0shfRmhxgLVPmBmT48mF30d4ZkTxi+Z4mlz+G/NYNA09kpE1zQmLJKIZFU+joFOZ/cMp/fHyGvNjWX7OfLvbqJrKXnJ4RTh1gaDGFtYhEGuUnAc/7CHDuDoXJ6wX5YkBsiOW+xd8a5UBjjxdUt/GHpubJwrbsH3+hKdgFgBYAsDdBQqXbLyJW/N5LBmkUueEjvgLjQYTxPl8BxgqZedFMQahhAWHdGGdxYo58zF9El07NUgW/D9SPMY+VuwAABEbNwMHDbgOw9lMU/oYk0V77yk2I2CkhSXMCTWMFgXAPIkDHNYPu2uDlaXtrPN6C1Qrd3XlXL2JrWbubyFEc7sraaU0SX3LR0zz/bwBPV2373QM58DAA/gF/A1E/8ZFNzQAAAABJRU5ErkJggg=="
      />
      <div :class="this.$store.state.darkMode ? 'dot clicked' : 'dot'"></div>
    </div>
  </header>
</template>

<script>
import { HeadConf } from "../../blog.config";

export default {
  name: "Header",
  data: () => {
    return {
      conf: HeadConf,
    };
  },
  methods: {
    darkMode: function () {
      this.$store.commit("updateDarkMode");
      if (this.$store.state.darkMode) {
        document.querySelector("body").className += "dark";
        return;
      }
      document.querySelector("body").className = "";
    },
  },
};
</script>

<style lang="stylus">
.xg-hd {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 3rem;
}

.xg-site {
  font-weight: 600;
  font-size: 2.3rem;
  color: var(--gary3);
  text-decoration: none;
}

.xg-dark {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 0.2rem;
  width: 3rem;
  height: 1.5rem;
  cursor: pointer;
  border-radius: 1rem;
  background-color: #0f1114;
  position: relative;

  img {
    width: 1.2rem;
    height: 1.2rem;
  }

  .dot {
    width: 1.4rem;
    height: 1.4rem;
    background-color: #ffffff;
    border-radius: 50%;
    transition: all 0.2s ease;
    position: absolute;
    top: 0.05rem;
    left: 0.05rem;
  }

  .dot.clicked {
    transform: translateX(1.5rem);
  }

  .dot:hover {
    box-shadow: 0 1px 5px 5px rgba(0, 0, 0, 0.1);
  }
}
</style>