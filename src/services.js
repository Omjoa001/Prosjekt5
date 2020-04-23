import { pool } from './mysql_pool';

class ScoreBoardService {
  getScoreBoard(success) {
    pool.query("select * from Scoreboard ORDER BY poeng DESC LIMIT 20", (error, results) => {
      if (error) return console.error(error);
      success(results);
    });
  }
  //"select * from Scoreboard ORDER BY poeng DESC LIMIT 20"
}

export let scoreBoardService = new ScoreBoardService();
