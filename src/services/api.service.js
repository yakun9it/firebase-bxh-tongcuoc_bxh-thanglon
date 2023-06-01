export const get_time = async () => {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    return fetch("https://api-bxh.khuyenmai.app/main/weekly?site=shbet", requestOptions)
        .then(response => response.json())
        .then(result => {
            return result
        })
        .catch(error => {
            return 500
        });
};



export const find_player_tongcuoc = async (seach_input) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({ "group_game_categories": "group_a", "type": "tongcuoc", "player": seach_input, "week": 0 });
    var requestOptions = { method: 'POST', headers: myHeaders, body: raw, redirect: 'follow' };

    return fetch("https://api-bxh.khuyenmai.app/main/weekly-find-player?site=shbet", requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.status_code === 200) {
                return result.result
            }
            if (result.status_code === 404) {
                return [];
            }

        })
        .catch(error => { return 500 });
}


export const find_player_thanglon = async (seach_input) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({ "group_game_categories": "group_a", "type": "thanglon", "player": seach_input, "week": 0 });
    var requestOptions = { method: 'POST', headers: myHeaders, body: raw, redirect: 'follow' };

    return fetch("https://api-bxh.khuyenmai.app/main/weekly-find-player?site=shbet", requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.status_code === 200) {
                return result.result
            }
            if (result.status_code === 404) {
                return [];
            }

        })
        .catch(error => { return 500 });
}

export const get_tongcuoc_weeks = async (week) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({ "week": week, "group_game_categories": "group_a", "type": "tongcuoc" });
    var requestOptions = { method: 'POST', headers: myHeaders, body: raw, redirect: 'follow' };

    return fetch("https://api-bxh.khuyenmai.app/main/weekly?site=shbet", requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.status_code === 200) {
                return result.result
            }
            if (result.status_code === 404) {
                return [];
            }

        })
        .catch(error => { return 500 });
}
export const get_thanglon_weeks = async (week_now) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({ "week": week_now, "group_game_categories": "group_a", "type": "thanglon" });
    var requestOptions = { method: 'POST', headers: myHeaders, body: raw, redirect: 'follow' };

    return fetch("https://api-bxh.khuyenmai.app/main/weekly?site=shbet", requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.status_code === 200) {
                return result.result
            }
            if (result.status_code === 404) {
                return [];
            }
        })
        .catch(error => { return 500 });
}