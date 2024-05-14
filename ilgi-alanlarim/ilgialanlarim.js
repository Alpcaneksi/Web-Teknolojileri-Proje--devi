const apiKey = '11xX5GACZTB4dewSI2Goa8DFZx9OrQY4GaFoN88j';  // Burada 'your_api_key_here' yerine kendi API anahtarınızı kullanın

document.getElementById('teamForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const teamName = document.getElementById('teamName').value;
    getTeamInfo(teamName);
});

async function getTeamInfo(teamName) {
    const url = `https://www.thesportsdb.com/api/v1/json/${apiKey}/searchteams.php?t=${teamName}`;
    const response = await fetch(url);
    const data = await response.json();
    const team = data.teams ? data.teams[0] : null;
    if (team) {
        displayTeamInfo(team);
        getRecentMatches(team.idTeam);
    } else {
        document.getElementById('teamInfo').innerHTML = '<p>Takım bulunamadı.</p>';
        document.getElementById('recentMatches').innerHTML = '';
    }
}

function displayTeamInfo(team) {
    const teamInfoHtml = `
        <h2>${team.strTeam}</h2>
        <p><strong>Kuruluş Yılı:</strong> ${team.intFormedYear}</p>
        <p><strong>Stadyum:</strong> ${team.strStadium}</p>
        <p><strong>Stadyum Kapasitesi:</strong> ${team.intStadiumCapacity}</p>
        <p><strong>Lokasyon:</strong> ${team.strStadiumLocation}</p>
        <p><strong>Açıklama:</strong> ${team.strDescriptionEN}</p>
        <p><img src="${team.strTeamBadge}" alt="Team Badge"></p>
    `;
    document.getElementById('teamInfo').innerHTML = teamInfoHtml;
}

async function getRecentMatches(teamId) {
    const url = `https://www.thesportsdb.com/api/v1/json/${apiKey}/eventslast.php?id=${teamId}`;
    const response = await fetch(url);
    const data = await response.json();
    displayRecentMatches(data.results);
}

function displayRecentMatches(matches) {
    let matchesHtml = '<h2>Son Maçlar</h2><ul>';
    matches.forEach(match => {
        matchesHtml += `<li>${match.strEvent} - ${match.dateEvent} - ${match.strVenue}</li>`;
    });
    matchesHtml += '</ul>';
    document.getElementById('recentMatches').innerHTML = matchesHtml;
}