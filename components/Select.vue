<template>
  <div :class="$style.select">
    <div>
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

    <div :class="$style.list" v-if="isVisible">
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
.select {
  margin-top: 10px;
}
.btn {
  padding: 0px;
  width: 43px;
  height: 21px;
  border: none;
  background: none;
  outline: none;
  color: #59606d;
  font-size: 16px;
  cursor: pointer;
  font-family: "PT sans";
  margin-left: auto;
}
.triangle {
  margin-bottom: 2px;
}
.sort {
  line-height: 21px;
}
.list {
  float: right;
  width: 160px;
  min-height: 68px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 8px 0 12px 0;
  animation: rotateY 400ms ease-in-out forwards;
  transform-origin: top center;
  margin-top: 6px;

  @keyframes rotateY {
    0% {
      transform: rotateY(90deg);
    }
    80% {
      transform: rotateY(-10deg);
    }
    100% {
      transform: rotateY(0);
    }
  }

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
</style>