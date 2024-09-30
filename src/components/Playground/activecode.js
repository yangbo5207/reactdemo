// UxFsdGVkX3xOPhN322
export const democode = ['UxFs', 'GVkX3xOPhN322'].join('d')

// pxFsdGVkX3xOPhN323
export const advcode = ['pxFs', 'GVkX3xOPhN323'].join('d')

export function getActiveCode(advance) {
  return advance ? advcode : democode
}
