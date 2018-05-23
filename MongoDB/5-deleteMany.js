// Copyright 2013 Jacques Berger.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, client) {
  if (err) {
    console.log(err);
  } else {
    const db = client.db("inf4375");
    const collection = db.collection("disco");

    // Ajoutons plusieurs albums d'un même artiste. Nous les supprimerons
    // ensuite.
    let albums = [
      {
        artist: "Iron Maiden",
        title: "Iron Maiden",
        year: 1980
      },
      {
        artist: "Iron Maiden",
        title: "Killers",
        year: 1981
      },
      {
        artist: "Iron Maiden",
        title: "The Number of the Beast",
        year: 1982
      },
      {
        artist: "Iron Maiden",
        title: "Piece of Mind",
        year: 1983
      },
      {
        artist: "Iron Maiden",
        title: "Powerslave",
        year: 1984
      },
      {
        artist: "Iron Maiden",
        title: "Somewhere in Time",
        year: 1986
      },
      {
        artist: "Iron Maiden",
        title: "Seventh Son of a Seventh Son",
        year: 1988
      },
      {
        artist: "Iron Maiden",
        title: "No Prayer for the Dying",
        year: 1990
      },
      {
        artist: "Iron Maiden",
        title: "Fear of the Dark",
        year: 1992
      },
      {
        artist: "Iron Maiden",
        title: "The X Factor",
        year: 1995
      },
      {
        artist: "Iron Maiden",
        title: "Virtual XI",
        year: 1998
      },
      {
        artist: "Iron Maiden",
        title: "Brave New World",
        year: 2000
      },
      {
        artist: "Iron Maiden",
        title: "Dance of Death",
        year: 2003
      },
      {
        artist: "Iron Maiden",
        title: "A Matter of Life and Death",
        year: 2006
      },
      {
        artist: "Iron Maiden",
        title: "The Final Frontier",
        year: 2010
      },
      {
        artist: "Iron Maiden",
        title: "The Book of Souls",
        year: 2015
      }
    ];

    collection.insert(albums, function (err, result) {
      if (err) {
        console.log(err);
        client.close();
      } else {
        // On supprime tous les albums d'un seul coup.
        collection.deleteMany({artist: "Iron Maiden"}, function (err, result) {
          if (err) {
            console.log(err);
          } else {
            let plural = (result.deletedCount > 1) ? "s" : "";
            console.log(result.deletedCount + " album" + plural + " supprimé" + plural);
          }
          client.close();
        });
      }
    });
  }
});
