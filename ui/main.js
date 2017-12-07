//
//
//

// reset to load main page

let database = null;

$(() => {
  const config = {
    apiKey: "AIzaSyBQ238RTvSh5Gj5DSrkBFb1S2zDICielZI",
    authDomain: "node-xmas-ctf.firebaseapp.com",
    databaseURL: "https://node-xmas-ctf.firebaseio.com",
    storageBucket: "node-xmas-ctf.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  database = firebase.database();

  init();
});

var savedTeams = null;

const init = () => {
  $(window).on("hashchange", function() {
    console.log("NEW SCREEN!");
    displaySelectedTeam();
  });

  let solvedRef = firebase.database().ref("solved");

  console.log("initilizing");

  solvedRef.on("value", snapshot => {
    console.log("new value");
    console.log(snapshot.val());

    let teams = $.map(snapshot.val(), (v, i) => {
      return {
        name: i,
        solved: $.map(v, (v2, i2) => [i2])
      };
    });

    console.log(teams);

    savedTeams = teams;

    displayTeams(teams);
    displaySelectedTeam();
  });
};

const displayTeams = teams => {
  // sort teams by score
  teams = teams.sort((a, b) => b.solved.length - a.solved.length);
  console.log(teams);

  $("#team-leaderboard-names").empty();

  teams.forEach(team => {
    const html = [
      "<tr>",
      `<td><a href="#${team.name}">${team.name}</a></td>`,
      `<td>${team.solved.length}</td>`,
      "</tr>"
    ].join();
    $("#team-leaderboard-names").append(html);
  });
};

const displaySelectedTeam = () => {
  let teamName = location.hash.substring(1);
  console.log("Displaying team " + teamName);

  // find team
  let team = null;

  savedTeams.forEach(t => {
    if (t.name === teamName) {
      team = t;
    }
  });

  if (!team) {
    // no team found
    console.log("No team matches " + teamName);
    return;
  }

  // sort puzzles by name
  team.solved = team.solved.sort((a, b) => a.localeCompare(b));

  $("#teamname").text(teamName);

  $("#teamtable tbody").empty();

  team.solved.forEach(puz => {
    let el = "<tr><td>" + decodeURI(puz) + "</td></tr>";

    $("#teamtable tbody").append(el);
  });
};
