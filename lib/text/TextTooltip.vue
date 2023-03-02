<script lang="ts" setup>
import Text from './Text.vue'
// TODO 正在评估引入其他框架成本。

</script>

<template>
  <Text class="i-texttooltip" :class="[
    $attrs.color !== 'disabled' ? '' : 'i-texttooltip--' + $attrs.color,
  ]" v-bind="$attrs">
    <!-- -->
    <slot />
    不可用
  </Text>
</template>

<style lang="scss">
.i-texttooltip {
  cursor: pointer;

  &:hover {
    color: $color-primary;
  }
}

.i-texttooltip--disabled {
  pointer-events: none;

  &:hover {
    color: $text-color-disabled;
  }
}
</style>
