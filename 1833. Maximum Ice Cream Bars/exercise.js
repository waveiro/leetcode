/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
  const orderedCosts = costs.sort((a, b) => a - b)

  let totalBars = 0

  for (let i = 0; i < orderedCosts.length; i++) {
    if (orderedCosts[i] > coins) break

    totalBars++
    coins -= orderedCosts[i]
  }

  return totalBars
}
