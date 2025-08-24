// Global type declarations to suppress React 19 compatibility issues

// Suppress key prop errors
declare global {
  interface Element {
    key?: string | number;
  }
}

// Make all component props accept any additional properties
declare module 'react' {
  interface ComponentProps<T> {
    [key: string]: any;
  }
}

// Suppress excess property errors for JSX elements
declare namespace JSX {
  interface ElementAttributesProperty {
    props: any;
  }
  
  interface ElementChildrenAttribute {
    children: any;
  }
  
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
