/* расчет доставки, чтобы показать пользователю сумму */
export const handleShipping = (
  e: React.MouseEvent<HTMLInputElement, MouseEvent>
) => {
  const target = e.target as HTMLInputElement
  if (target.value === 'PochtaRussia') {
    return 500
  } else if (target.value === 'Cdek') {
    return 700
  } else {
    return 0
  }
}
