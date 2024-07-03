export const STORE_SHOES = "STORE_SHOES";

export function storeShoes(shoes) {
  return {
    type: STORE_SHOES,
    shoes,
  };
}
