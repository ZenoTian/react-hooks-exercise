const Notebook = ({classes}) => {
  const StatefulReader = statefulWrapper(MarkdownReader,{content:""})
  return (
    <div className={classes.root}> 
      <Grid className={classes.root} container layout={"row"} spacing={8}>
        <React.Fragment>
          <Grid item xs={24}>
            <Paper className={classes.treeViewPaper}>
              <StatefulTreeView itemOnClick={
                content => StatefulReader.ss({content:content})}
                />
            </Paper>
          </Grid>
          <Container>
            <Paper className={classes.contentPaper}>
              <StatefulReader.Com />
            </Paper>
          </Container>
        </React.Fragment>
      </Grid>
    </div>
  )
}