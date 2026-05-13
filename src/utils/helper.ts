export function calculateAmountSpent (
  tierTable: { [key: string]: { [price: string]: string | undefined }  | undefined },
  selectionMap: { [key: string]: string },
) {
  return Object.entries(selectionMap).reduce((acc, [key, value]) => {
    const tierMap = tierTable[key];

    const tierEntry  = tierMap && Object.entries(tierMap).find(([, v]) => v === value);

    return acc + (tierEntry ? Number(tierEntry[0]) : 0);
  }, 0);
}
