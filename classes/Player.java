package classes;
// A Player represents a basketball player that has stats, a PER, winshares,
// salary, and a projcected salary.
public class Player {
  private Stats stats;
  private PER per;
  private WinShares winShares;
  private double salary;
  private double projSalary;

  public Player(Stats stats, PER per, WinShares winShares, double salary, double projSalary) {
    this.stats = stats;
    this.per = per;
    this.winShares = winShares;
    this.salary = salary;
    this.projSalary = projSalary;
  }

  private class Stats {
    public Stats() {

    }
  }

  private class PER {
    public PER() {

    }
  }

  private class WinShares {
    public WinShares() {

    }

  }

}
