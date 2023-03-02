<script lang="ts" setup>
withDefaults(
    defineProps<{
        horizontal?: 'start' | 'center' | 'end',
        vertical?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
        gap?: 'none' | 'line' | 'xs' | 'sm' | 'md' | 'lg'
        full?: boolean
    }>(),
    {
        horizontal: 'center',
        vertical: 'start',
        gap: 'none',
        full: false
    }
);
</script>
<template>
    <div class="i-flex-column" v-bind="$attrs" :class="[
        'i-flex-column-vertical-' + vertical,
        'i-flex-column-horizontal-' + horizontal,
        'i-flex-column-gap-' + gap,
        full ? 'i-flex-column-full' : '',
    ]">
        <slot />
    </div>
</template>
<style lang="scss">
.i-flex-column {
    display: flex;
    flex-direction: column;
}

.i-flex-column-full {
    flex: 1;
}

.i-flex-column-horizontal-center {
    align-items: center;
}

.i-flex-column-horizontal-start {
    align-items: flex-start;
}

.i-flex-column-horizontal-end {
    align-items: flex-end;
}

.i-flex-column-vertical-start {
    justify-content: flex-start;
}

.i-flex-column-vertical-center {
    justify-content: center;
}

.i-flex-column-vertical-end {
    justify-content: flex-end;
}

.i-flex-column-vertical-between {
    justify-content: space-between;
}

.i-flex-column-vertical-around {
    justify-content: space-around;
}

.i-flex-column-vertical-evenly {
    justify-content: space-evenly;
}

.i-flex-column-gap-line {
    gap: $gap-line;
}
.i-flex-column-gap-xs {
    gap: $gap-xs;
}
.i-flex-column-gap-sm {
    gap: $gap-sm;
}
.i-flex-column-gap-md {
    gap: $gap-md;
}
.i-flex-column-gap-lg {
    gap: $gap-lg;
}

.i-flex-column-gap-xl {
    gap: $gap-xl;
}
</style>
