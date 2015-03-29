var db = {
  getConnection: function () {
    return window.openDatabase("mydb.db", "", "Test App DB", 1000000);
  },

  migrateDb: function (callback) {
    var conn = this.getConnection();
    if (conn.version === "") {
      conn.changeVersion("", "1.0", function (tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS interactions (id integer primary key, first_name varchar(100), last_name varchar(100), email varchar(100), completed_at varchar(100))");
        callback();
      });
    }
    else {
      callback();
    }
  },

  runQuery: function (sql, args, success, fail) {
    var conn = db.getConnection();
    conn.transaction(function (tx) {
      tx.executeSql(sql, args, success, fail);
    });
  }
};