<template>
  <div :class="$style.select">
    <div :class="$style.header">
      <span :class="$style.sort">Сортировать по:</span>
      <button @click="setIsVisible" :class="$style.btn">
        {{ options.find((el) => el.id === activeOptionId).name }}
        <img
          :class="$style.triangle"
          src="~/assets/icons/select_trngl.svg"
          alt="triangle"
        />
      </button>
    </div>

    <div
      v-if="isVisible"
      :class="$style.list"
      :style="!isVisible ? { 'z-index': -1 } : { 'z-index': 1 }"
    >
      <div
        :class="$style.list_item"
        v-for="option in options"
        :key="option.id"
        @click="clickHandler(option)"
      >
        {{ option.text }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      options: "select/options",
      activeOptionId: "select/activeOptionId",
      isVisible: "select/isVisible",
    }),
  },
  methods: {
    ...mapMutations({
      setIsVisible: "select/setIsVisible",
      setActiveOption: "select/setActiveOption",
    }),
    clickHandler(option) {
      this.setActiveOption(option.id);
      this.setIsVisible();
    },
  },
};
</script>

<style module lang="scss">
.active {
  min-height: 20px;
}
.select {
  z-index: 1000;
  margin-top: 10px;
  max-height: 20px;

  .header {
    min-width: 160px;

    .btn {
      padding: 0px;
      height: 21px;
      border: none;
      background: none;
      outline: none;
      color: #59606d;
      font-size: 16px;
      cursor: pointer;
      font-family: "PT sans";
      margin-left: 2px;

      .triangle {
        margin-bottom: 2px;
      }
    }
    .sort {
      line-height: 21px;
    }
  }

  .list {
    background: #fff;
    float: right;
    width: 160px;
    min-height: 68px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    padding: 8px 0 12px 0;
    margin-top: 6px;

    &_item {
      width: 160px;
      height: 26px;
      font-size: 14px;
      line-height: 18px;
      color: #959dad;
      text-align: left;
      padding: 4px 0 4px 12px;
      transition: 100ms;
      &:hover {
        color: #1f1f1f;
        background: #f8f8f8;
        cursor: pointer;
      }
    }
  }
}
</style>