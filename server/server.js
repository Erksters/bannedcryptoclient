const mysql = require("mysql");
const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");

var app = express();

app.use(formidable());
app.use(cors());

var db_con = mysql.createPool({
  host: "ls-f03221ff88128d4401cef40d51ea691e6f08dca4.cppsjjvfoag8.us-east-2.rds.amazonaws.com",
  user: "dbmasteruser",
  password: "x17L+;Uth18a%qi]O]6oa0nh%e^^Og%3",
  port: 3306,
  database: "banned_crypto",
  timeout: 1000000,
  connectionLimit: 1000,
  connectTimeout: 1000000,
});

db_con.getConnection(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

//Insert sketchy wallets
app.post("/api/insert_complaint", (req, res) => {
  db_con.getConnection((err, conn) => {
    if (err) {
      console.log("Database Connection Failed !!!", err);
    } else {
      conn.query(
        `
    INSERT INTO Wallets(ID, Address, Coin_ID)
    Values( default, "${req.fields.WalletAddress}", ${req.fields.Coin_ID})
    on duplicate key update ID=ID;
    `,
        function (error, results, fields) {
          if (error) throw error;
          console.log("Done");
        }
      );

      conn.query(
        `
    INSERT INTO Complaints( Wallet_ID, Notes, Primitive_Date)
    Select W.ID, 
    "${req.fields.Notes}" as Notes,
    '${req.fields.DateOfEvent}' as Primitive_Date
    From Wallets as W
    Inner Join Coins
    ON W.Coin_ID = Coins.ID
    Where W.Address = "${req.fields.WalletAddress}" and W.Coin_ID= ${req.fields.Coin_ID};
    `,
        function (error, results, fields) {
          if (error) throw error;
          console.log("Done");

          res.json(results);
        }
      );
    }
  });
});

//Quick Test
app.get("/", (req, res) => {
  console.log("Server is Awake!");
  res.send(
    JSON.stringify({ status: 200 }) // <==== req.body will be a parsed JSON object
  );
});

//Searching sketchy wallets
app.post("/api/search_by_wallet_with_exact", (req, res) => {
  db_con.getConnection((err, conn) => {
    if (err) {
      console.log("Database Connection Failed !!!", err);
    } else {
      if (
        req.fields.WalletAddress === "" ||
        req.fields.WalletAddress === undefined ||
        req.fields.WalletAddress === "undefined" ||
        req.fields.Coin_ID === undefined ||
        req.fields.Coin_ID === "undefined" ||
        req.fields.WalletAddress === null ||
        req.fields.WalletAddress === "null" ||
        req.fields.Coin_ID === null ||
        req.fields.Coin_ID === "null"
      ) {
        console.log("Search has undefined or null or empty Wallet Address");
        res.status(200).send([]);
      } else {
        conn.query(
          `
        SELECT Comp.ID, Comp.Notes, Comp.Primitive_Date
        FROM banned_crypto.Complaints as Comp
        Inner Join Wallets
        ON Wallets.ID = Comp.Wallet_ID
        Where Wallet_ID = (Select W.ID 
            From Wallets as W
            Inner Join Coins
            ON W.Coin_ID = Coins.ID
            Where W.address = "${req.fields.WalletAddress}" and W.Coin_ID = ${req.fields.Coin_ID});  
        `,
          function (error, results, fields) {
            if (error) {
              throw error;
            }
            console.log("Check this out");
            res.json(results);
          }
        );
      }
    }
  });
});

//Show Coin_Symb_and_count_by_coin_type
app.get("/api/show_Coin_Symb_and_count", (req, res) => {
  db_con.getConnection((err, conn) => {
    if (err) {
      console.log("Database Connection Failed !!!", err);
    } else {
      conn.query(
        `
      Select C.Coin_Symb, Count(*) as count
      From Wallets as W, Coins as C
      Where W.Coin_ID = C.ID
      Group By Coin_Symb_ID
      `,
        function (error, results, fields) {
          if (error) throw error;
          res.json(results);
        }
      );
    }
  });
});

//show top 100 newly added wallets
app.get("/api/show_recent_100", (req, res) => {
  db_con.getConnection((err, conn) => {
    if (err) {
      console.log("Database Connection Failed !!!", err);
    } else {
      conn.query(
        `
      Select W.ID, W.address, C.Coin_Symb
      From Wallets as W, Coins as C
      Where W.Coin_ID = C.ID
      order by W.ID DESC
      Limit 100
      `,
        function (error, results, fields) {
          if (error) throw error;
          res.json(results);
        }
      );
    }
  });
});

//get_all_known_coins
app.get("/api/get_all_known_coins", (req, res) => {
  db_con.getConnection((err, conn) => {
    if (err) {
      console.log("Database Connection Failed !!!", err);
    } else {
      conn.query(
        `
      SELECT * FROM banned_crypto.Coins;
      `,
        function (error, results, fields) {
          if (error) throw error;
          res.json(results);
          console.log("Pinged /get_all_known_coins");
        }
      );
    }
  });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
