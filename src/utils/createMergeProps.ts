function createMergeProps<T>(newObject: T) {
  return Object.assign({}, newObject)
}

export default createMergeProps