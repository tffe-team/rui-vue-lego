// promisify setTimeout
export function later(delay = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, delay)
  })
}
