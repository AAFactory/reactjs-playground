export const log = (prefix, message, depth) => {
  let prefixMessage = depth === 0 ? "💨💨🚀 " + prefix : "\t".repeat(depth) + prefix
  let printMessage = typeof message === 'object' ? JSON.stringify(message) : message  
  console.log(`${prefixMessage}: ${printMessage}`)
}