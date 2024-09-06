class ViewComparison {
  constructor(jaf, compared) {
    this.baseJafName = jaf.name
    this.comparisonJafName = compared.name

    const { comparison } = compared

    this.comparison = {
      summary: comparison.summary.summary,
      keyDifferences: comparison.summary.key_differences,
      tasks: comparison.tasks,
      competencies: comparison.competencies,
      linkage: comparison.linkage
    }
  }
}

export { ViewComparison }
