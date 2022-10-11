export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Coloca Seu Email Vai?"
  if (!re.test(email)) return 'Ooops! Precisamos De Algo Válido ;)'
  return alert ('logado')
}
