declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
  
  interface ElementAttributesProperty {
    props: any;
  }
  
  interface ElementChildrenAttribute {
    children: any;
  }
  
  interface Element {
    key?: string | number;
  }
}

// Global event types
declare global {
  interface ChangeEvent<T = Element> {
    target: T & {
      value: string;
    };
  }
  
  interface MouseEvent<T = Element> {
    stopPropagation(): void;
  }
}
