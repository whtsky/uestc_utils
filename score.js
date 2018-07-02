const scores = {}

const scoreRows = $('.grid table.gridtable tbody tr').toArray()
scoreRows.forEach(row => {
  if (row.children[8].innerText < 60) {
    return
  }
  const score = Number(row.children[5].innerText)
  const category = row.children[4].innerText
  const className = row.children[3].innerText
  console.log(`[${category}]: ${className} 学分 ${score}`)
  scores[category] = (scores[category] || 0) + score
})

console.log(scores)
