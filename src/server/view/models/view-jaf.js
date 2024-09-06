class ViewJaf {
  constructor(jaf) {
    this.id = jaf.id
    this.name = jaf.name
    this.summary = jaf.summary.job_summary
    this.comparisons = jaf.comparisons
  }
}

export { ViewJaf }
