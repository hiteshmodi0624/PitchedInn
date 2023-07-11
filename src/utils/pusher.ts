export function toPusherKey(k: string) {
  return k.replace(/:/g, '__')
}