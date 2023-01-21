declare module 'react-3d-hover' {
  export default function React3dHover({
    scale,
    perspective,
    speed,
    children,
  }: {
    scale: number
    perspective: number
    speed: number
    children: JSX.Element | JSX.Element[]
  }): any
}
