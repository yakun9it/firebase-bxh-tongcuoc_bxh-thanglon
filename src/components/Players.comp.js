import "../assets/style/reset.css";
import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import moment from "moment/moment";
import { get_tongcuoc_weeks, get_thanglon_weeks, find_player_tongcuoc, find_player_thanglon } from "../services/api.service";
import { FormControl, IconButton, InputBase, InputLabel, MenuItem, Paper, Select } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';




const Players = () => {
    const [weekSelect, setWeekSelect] = React.useState('');
    // all player //
    const [player_wins, setPlayer_wins] = React.useState([]);
    const [player_total_bets, setPlayer_total_bets] = React.useState([]);
    const [input_search, setInput_search] = React.useState('');
    // one player search // 

    const [value, setValue] = React.useState('1');
    const week_now = moment().isoWeek();
    //==================== all player ========================//
    let handle_get_tongcuocs = async (week_now) => { let get_tongcuocs_res = await get_tongcuoc_weeks(week_now); setPlayer_wins(get_tongcuocs_res); };
    let handle_get_thanglons = async (week_now) => { let get_thanglons_res = await get_thanglon_weeks(week_now); setPlayer_total_bets(get_thanglons_res); };
    // =================== one player search ======================= //
    let handle_find_player_tongcuoc = async () => {
        let get_tongcuoc_re = await find_player_tongcuoc(input_search);

        setPlayer_wins(get_tongcuoc_re);
    };
    let handle_find_player_thanglon = async () => {
        let get_thanglon_re = await find_player_thanglon(input_search); setPlayer_total_bets(get_thanglon_re);
    };
    //
    const handleChangeWeek = (event) => { setInput_search(""); setWeekSelect(event.target.value); handle_get_tongcuocs(event.target.value); handle_get_thanglons(event.target.value); };
    const handleChangeTask = (event, newValue) => { setValue(newValue) }
    const handleChangeInput = (event) => setInput_search(event.target.value)
    //=== event form search submmit ===//
    const handleSubmitFormFindName = (event) => {
        event.preventDefault();
        if (!input_search) {
            window.location.reload(true)
            return;
        }
        setWeekSelect(week_now);
        handle_find_player_tongcuoc();
        handle_find_player_thanglon();
    }

    useEffect(() => {
        setWeekSelect(week_now);
        handle_get_tongcuocs(week_now);
        handle_get_thanglons(week_now);
    }, [week_now])

    return (
        <div className="body">
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <div className="bxh-find-player">
                        <Paper className="bxh-form-find-name" component="form" id="form_search_name" onSubmit={handleSubmitFormFindName} sx={{
                            p: '2px 4px', display: 'flex',
                            m: "auto", b: "none", borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
                            maxWidth: '210px', borderRadius: "0", backgroundColor: 'unset', boxShadow: 'unset'
                        }} >
                            <InputBase sx={{ ml: 1, flex: 1, fontSize: "14px", fontStyle: 'italic' }}
                                placeholder="Tìm TOP của bạn ..."
                                inputProps={{ 'aria-label': 'findtop' }}
                                id="seach_input"
                                value={input_search}
                                onChange={handleChangeInput}
                            />
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSubmitFormFindName}>
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </div>

                    <FormControl className="bxh-select-week-mobile" variant="standard" sx={{ m: 1, minWidth: 180 }}>
                        <InputLabel id="bxh-select-week-label-mobile">Tuần</InputLabel>
                        <Select labelId="bxh-select-week-label-mobile" id="bxh-select-week-select-mobile" value={weekSelect} onChange={handleChangeWeek} label="Tuần">
                            <MenuItem value={week_now}>Tuần {week_now} (Từ {moment().startOf('isoweek').format('DD/MM') + "-" + moment().endOf('isoweek').format('DD/MM')})</MenuItem>
                            <MenuItem value={week_now - 1}>Tuần {week_now - 1} (Từ {moment().subtract(1, 'week').startOf('isoweek').format('DD/MM') + "-" + moment().subtract(1, 'week').endOf('isoweek').format('DD/MM')})</MenuItem>
                            <MenuItem value={week_now - 2}>Tuần {week_now - 2} (Từ {moment().subtract(2, 'week').startOf('isoweek').format('DD/MM') + "-" + moment().subtract(2, 'week').endOf('isoweek').format('DD/MM')})</MenuItem>
                            <MenuItem value={week_now - 3}>Tuần {week_now - 3} (Từ {moment().subtract(3, 'week').startOf('isoweek').format('DD/MM') + "-" + moment().subtract(3, 'week').endOf('isoweek').format('DD/MM')})</MenuItem>
                        </Select>
                    </FormControl>
                    <Box className="bxh-box-tablist" sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChangeTask} aria-label="API bxh" className="bxh-nav">
                            <Tab label="BXH tổng cược" value="1" className="bxh-nav-item" />
                            <Tab label="BXH thắng lớn" value="2" className="bxh-nav-item" />
                        </TabList>
                        <FormControl className="bxh-select-week" variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="bxh-select-week-label">Tuần</InputLabel>
                            <Select labelId="bxh-select-week-label" id="bxh-select-week-select" value={weekSelect} onChange={handleChangeWeek} label="Tuần">
                                <MenuItem value={week_now}>Tuần {week_now} (Từ {moment().startOf('isoweek').format('DD/MM') + "-" + moment().endOf('isoweek').format('DD/MM')})</MenuItem>
                                <MenuItem value={week_now - 1}>Tuần {week_now - 1} (Từ {moment().subtract(1, 'week').startOf('isoweek').format('DD/MM') + "-" + moment().subtract(1, 'week').endOf('isoweek').format('DD/MM')})</MenuItem>
                                <MenuItem value={week_now - 2}>Tuần {week_now - 2} (Từ {moment().subtract(2, 'week').startOf('isoweek').format('DD/MM') + "-" + moment().subtract(2, 'week').endOf('isoweek').format('DD/MM')})</MenuItem>
                                <MenuItem value={week_now - 3}>Tuần {week_now - 3} (Từ {moment().subtract(3, 'week').startOf('isoweek').format('DD/MM') + "-" + moment().subtract(3, 'week').endOf('isoweek').format('DD/MM')})</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <TabPanel value="1" className="panel-table">
                        <table className="table-bxh">
                            <thead className="table-thead">
                                <tr>
                                    <th className="table-th">Xếp hạng</th>
                                    <th className="table-th">Người chơi</th>
                                    <th className="table-th">Tổng cược</th>
                                    <th className="table-th">Tiền thưởng</th>
                                    <th className="table-th">Thời gian cập nhật cuối</th>
                                </tr>
                            </thead>
                            <tbody className="table-tbody">
                                {player_wins.length > 0 && player_wins.map((player, index) => (
                                    <tr key={player.rank + player.updateAt}>
                                        <td className="table-td">{player.rank}</td>
                                        <td className="table-td">{player.player}</td>
                                        <td className="table-td">{
                                            Number(player.result).toLocaleString('id')
                                        }</td>
                                        <td className="table-td">{player.point}</td>
                                        <td className="table-td">{player.updateAt}</td>
                                    </tr>
                                ))
                                }
                                {player_wins.length === 0 &&
                                    <tr>
                                        <td colSpan={5} className="no-data">Không có dữ liệu xếp hạng!</td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </TabPanel>
                    <TabPanel value="2" className="panel-table">
                        <table className="table-bxh">
                            <thead className="table-thead">
                                <tr>
                                    <th className="table-th">Xếp hạng</th>
                                    <th className="table-th">Người chơi</th>
                                    <th className="table-th">Tổng thắng</th>
                                    <th className="table-th">Tiền thưởng</th>
                                    <th className="table-th">Thời gian cập nhật cuối</th>
                                </tr>
                            </thead>
                            <tbody className="table-tbody">
                                {player_total_bets.length > 0 && player_total_bets.map((player, index) => (
                                    <tr key={player.rank + player.updateAt}>
                                        <td className="table-td">{player.rank}</td>
                                        <td className="table-td">{player.player}</td>
                                        <td className="table-td">{
                                            Number(player.result).toLocaleString('id')
                                        }</td>
                                        <td className="table-td">{player.point}</td>
                                        <td className="table-td">{player.updateAt}</td>
                                    </tr>
                                ))
                                }
                                {player_total_bets.length === 0 &&
                                    <tr>
                                        <td colSpan={5} className="no-data">Không có dữ liệu xếp hạng!</td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </TabPanel>
                </TabContext>
            </Box>
        </div >
    )
}
export default Players
