export type TextColor = 'primary' | 'danger' | 'success' | 'warning' | 'info' | 'exception' | 'error' | 'paragraph' | 'regular' | 'secondary' | 'placeholder' | 'disabled' | 'current';
export interface ITextProps {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'current';
    align?: 'left' | 'center' | 'right' | 'justify';
    color?: TextColor;
    italic?: boolean;
    truncate?: boolean;
    block?: boolean;
    bold?: boolean;
    uppercase?: boolean;
    underline?: boolean;
    content?: string;
    truncateTooltip?: boolean;
}
declare const _sfc_main: import("vue").DefineComponent<{
    size: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    align: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    color: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    italic: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    truncate: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    block: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    bold: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    uppercase: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    underline: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    content: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    truncateTooltip: {
        type: BooleanConstructor;
        required: false;
    };
}, {
    text: import("vue").Ref<HTMLElement | null | undefined>;
    props: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    align: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    color: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    italic: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    truncate: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    block: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    bold: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    uppercase: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    underline: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    content: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    truncateTooltip: {
        type: BooleanConstructor;
        required: false;
    };
}>>, {
    size: string;
    align: string;
    color: string;
    italic: boolean;
    truncate: boolean;
    block: boolean;
    bold: boolean;
    uppercase: boolean;
    underline: boolean;
    content: string;
    truncateTooltip: boolean;
}>;
export default _sfc_main;
