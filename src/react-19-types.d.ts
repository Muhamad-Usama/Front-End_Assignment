// React 19 Type Declarations
declare module 'react' {
  export type ReactNode = any;
  export type FC<P = {}> = (props: P) => any;
  export type FunctionComponent<P = {}> = FC<P>;
  
  // React hooks
  export function useState<T>(initialValue: T): [T, (value: T) => void];
  export function useEffect(effect: () => void, deps?: any[]): void;
  export function useMemo<T>(factory: () => T, deps?: any[]): T;
  export function useRef<T>(initialValue: T): { current: T };
  
  // React types
  export namespace React {
    interface SVGProps<T> {
      [key: string]: any;
    }
  }
}

declare module 'react-dom/client' {
  export function createRoot(container: Element | null): {
    render(children: any): void;
  };
}

declare module 'react-dom' {
  export function createRoot(container: Element | null): {
    render(children: any): void;
  };
}

declare namespace JSX {
  interface Element {
    key?: string | number;
  }
  
  interface IntrinsicElements {
    [elemName: string]: any;
  }
  
  interface ElementAttributesProperty {
    props: any;
  }
  
  interface ElementChildrenAttribute {
    children: any;
  }
}

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
