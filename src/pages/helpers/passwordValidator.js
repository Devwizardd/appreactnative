export function passwordValidator(password) {
  if (!password) return "A Senha Não Pode Ser Vazia"
  if (password.length < 5) return 'Opssss, Pelo Menos 5 Caracteres'
  return ''
}
