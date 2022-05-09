package pt;

//This is the Algorithm class for PerfectTeam.
//This will take any potential 12 person team and predict its potential Win/Loss record over a season.

public class Algorithm {
  private final double totalMins = 240.0;
  private double pts;
  private double ftm;
  private double oreb;
  private double dreb;
  private double ast;
  private double tov;
  private double stl;
  private double blk;
  private double pf;
  /*  This takes the data from the team and stores it to be used later for calculating winP.

      @Spec.requires team size to be 12
      @Spec.modifies fields
  */
  public Algorithm(Team team) {
    double playingTimeScale = 0;
    double totalPlayingTime = 0.0;
    for (Player player : team.getPlayers()) {
      totalPlayingTime += player.getStats().getPlayingTime();
    }
    playingTimeScale = totalPlayingTime/totalMins;
    for (Player player : team.getPlayers()) {
      pts += player.getStats().getPoints() * playingTimeScale;
      ftm += player.getStats().getFreeThrows() * playingTimeScale;
      oreb += player.getStats().getOffRebounds() * playingTimeScale;
      dreb += player.getStats().getDefRebounds() * playingTimeScale;
      ast += player.getStats().getAssists() * playingTimeScale;
      tov += player.getStats().getTurnovers() * playingTimeScale;
      stl += player.getStats().getSteals() * playingTimeScale;
      blk += player.getStats().getBlocks() * playingTimeScale;
      pf += player.getStats().getPersonalFouls() * playingTimeScale;
    }
  }
  /*
      This calculates the win percentage using the data gathered from the team.
      This will return a number between 0 and 1.
  */
  public double winPercentage(double pts, double ftm, double oreb, double dreb, double ast, double tov, double stl, double blk, double blka, double pf) {
    return 0.5 - 0.033 * Math.log(pts) + 0.0587 * ftm + 0.0186 * Math.log(oreb) + 0.0543 * Math.log(dreb) + 0.0376 * Math.log(ast)
    - 0.048 * tov + 0.0408 * stl + 0.0186 * Math.log(blk) - .0988 - 0.0107 * pf;
  }
}
