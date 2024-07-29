export function formatDate(dateString: string) {
  const date = new Date(`${dateString}T00:00:00Z`);

  // Obter o mês (abreviado), dia e ano separadamente
  const month = date.toLocaleString('pt-BR', { month: 'short', timeZone: 'UTC' });
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  // Formatar a data no formato desejado
  return `${month} ${day}, ${year}`;
}
