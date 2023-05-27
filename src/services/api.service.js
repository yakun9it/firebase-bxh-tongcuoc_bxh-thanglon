export const get_time = async () => {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    return fetch("https://api-bxh.khuyenmai.app/valid-bet/weekly?site=shbet", requestOptions)
        .then(response => response.json())
        .then(result => {
            // console.log(result)
            return result
        })
        .catch(error => {
            // console.log('error', error)/
            return 500
        });
};


export const get_tongcuocs = async (week) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({ "week": week, "group_game_categories": "group_a", "type": "tongcuoc" });
    var requestOptions = { method: 'POST', headers: myHeaders, body: raw, redirect: 'follow' };

    return fetch("https://api-bxh.khuyenmai.app/valid-bet/weekly?site=shbet", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log("tongcuoc " + result.result.length)
            return result.result
        })
        .catch(error => console.log('error', error));
}
export const get_thanglons = async (week_now) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({ "week": week_now, "group_game_categories": "group_a", "type": "thanglon" });
    var requestOptions = { method: 'POST', headers: myHeaders, body: raw, redirect: 'follow' };

    return fetch("https://api-bxh.khuyenmai.app/valid-bet/weekly?site=shbet", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log("thanglon " + result.result.length)
            return result.result
        })
        .catch(error => console.log('error', error));
}