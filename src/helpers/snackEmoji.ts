export function snackEmoji(name: string) {
  switch (name.toLowerCase()) {
    case 'cupcake':
      return '🍔'
    case 'burger':
      return '🍔'
    case 'pizza':
      return '🍕'
    case 'drink':
      return '🥤'
    case 'ice-cream':
      return '🍨'
    default:
      return '🧑‍🍳'
  }
}
