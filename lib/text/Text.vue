<script lang="ts" setup>
import { ref } from 'vue';

export type TextColor = 'primary' | 'danger' | 'success' | 'warning' | 'info' | 'exception' | 'error' |
        'paragraph' | 'regular' | 'secondary' | 'placeholder' | 'disabled' |
        'current';

export interface ITextProps {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'current',
    align?: 'left' | 'center' | 'right' | 'justify',
    color?: TextColor,
    italic?: boolean,
    truncate?: boolean,
    block?: boolean,
    bold?: boolean,
    uppercase?: boolean,
    underline?: boolean,
    content?: string,
    truncateTooltip?: boolean,
}

const text = ref<HTMLElement | null>();

const props = withDefaults(
    defineProps<ITextProps>(),
    {
        size: 'md',
        align: 'left',
        color: 'current',
        italic: false,
        truncate: false,
        block: false,
        bold: false,
        uppercase: false,
        underline: false,
        content: '',
    }
);

</script>
<template>
<span 
    class="i-text"
    v-bind="$attrs"
    :class="[
        props.italic ? 'i-text-italic' : '',
        props.truncate ? 'i-text-truncate' : '',
        props.block ? 'i-text-block' : '',
        props.uppercase ? 'i-text-uppercase' : '',
        props.underline ? 'i-text-underline' : '',
        props.bold ? 'i-text-bold' : '',
        'i-text-' + props.align,
        props.size === 'current' ? '' : 'i-text-' + props.size,
        props.color === 'current' ? '' : 'i-text-color-' + props.color,
    ]"
    ref="text"
>
    <slot />
</span>
</template>
<style lang="scss">
.sjc-tooltip {
    max-width: 50%;
}
.i-text {
    display: inline;
    color: currentColor;
}

.i-text-underline {
    text-decoration-line: underline;
}

.i-text.i-text-block {
    display: block;
}

.i-text.i-text-bold {
    font-weight: 700;
}

.i-text-italic {
    font-style: italic;
}

.i-text-center {
    text-align: center;
}

.i-text-right {
    text-align: right;
}

.i-text-justify {
    text-align: justify;
}


.i-text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.i-text-uppercase {
    text-transform: uppercase;
}

.i-text-xs {
    font-size: 0.75rem;
    line-height: 1.125rem;
}

.i-text-sm {
    font-size: 0.875rem;
    line-height: 1.375rem;
}

.i-text-md {
    font-size: 1rem;
    line-height: 1.5rem;
}


.i-text-lg {
    font-size: 1.25rem;
    line-height: 1.75rem;
}

.i-text-xl {
    font-size: 1.5rem;
    line-height: 2rem;
}

.i-text-color-primary {
    color: var(--el-color-primary);
}
.i-text-color-exception,
.i-text-color-error,
.i-text-color-danger {
    color: var(--el-color-danger);
}
.i-text-color-success {
    color: var(--el-color-success);
}
.i-text-color-warning {
    color: var(--el-color-warning);
}

.i-text-color-info {
    color: var(--el-color-info);
}

.i-text-color-paragraph {
    color: var(--i-text-color-primary);
}

.i-text-color-regular {
    color: var(--i-text-color-regular);
}

.i-text-color-secondary {
    color: var(--i-text-color-secondary);
}

.i-text-color-placeholder {
    color: var(--i-text-color-placeholder);
}

.i-text-color-disabled {
    color: var(--i-text-color-disabled);
}
</style>
