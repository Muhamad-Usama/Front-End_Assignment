declare module 'react-dom' {
  export function createRoot(container: Element | null): {
    render(children: any): void;
  };
}
