package pt;

import org.junit.Test;
import java.util.*;

import static org.junit.Assert.*;

/**
 * Test class for the Team implementation.
 */
public class TeamTest {
  private static double EPS = 1e-9;

  public Stats getStats() {
    return new Stats(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
  }

  public Player getPlayer() {
    return new Player(getStats(), 1, 1, 1, 1, "https://image.png", "Player Test", 30);
  }

  @Test
  public void testAddPlayer_LargeTeam() {
    Team team = new Team();
    Stats stats = getStats();
    for (int i = 0; i < 12; i++) {
      team.addPlayer(new Player(stats, 1, 1, 1, 1, "https://image.png", "Player " + i, 30));
    }
    Player player = getPlayer();
    assertFalse(team.addPlayer(player));
  }

  @Test
  public void testAddPlayer_PastSalaryCap() {
    Team team = new Team();
    Player player = new Player(getStats(), 1, 1, 1000000000, 1, "https://image.png", "Player Test", 30);
    assertFalse(team.addPlayer(player));
  }

  @Test
  public void testAddPlayer_DuplicatePlayer() {
    Team team = new Team();
    Player player = getPlayer();
    assertTrue(team.addPlayer(player));
    assertFalse(team.addPlayer(player));
  }

  @Test
  public void testAddPlayer_PlayerAdded() {
    Team team = new Team();
    Player player = getPlayer();
    assertTrue(team.addPlayer(player));
    assertEquals(Arrays.asList(player), team.getPlayers());
  }

  @Test
  public void testAddPlayer_TotalSalaryUpdated() {
    Team team = new Team();
    Player player = getPlayer();
    assertTrue(team.addPlayer(player));
    assertEquals(1, team.getTotalSalary(), EPS);
  }

  @Test
  public void testRemovePlayer() {
    Team team = new Team();
    Player player = getPlayer();
    team.addPlayer(player);
    assertTrue(team.removePlayer(player));
    assertEquals(new ArrayList<Player>(), team.getPlayers());
  }

  @Test
  public void testQuickAdd() {
    Team team = new Team();
    assertTrue(team.quickAdd("CLE"));
  }
}