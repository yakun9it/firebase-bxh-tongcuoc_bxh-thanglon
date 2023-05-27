import "../assets/style/reset.css"
import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import moment from "moment/moment";
import { get_tongcuocs, get_thanglons } from "../services/api.service";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
const Players = () => {
    const [weekSelect, setWeekSelect] = React.useState('');
    const [player_wins, setPlayer_wins] = React.useState([]);
    const [player_total_bets, setPlayer_total_bets] = React.useState([]);
    const [value, setValue] = React.useState('1');
    const week_now = moment().isoWeek();
    let handle_get_tongcuocs = async (week_now) => { console.log(week_now); let get_tongcuocs_res = await get_tongcuocs(week_now); setPlayer_wins(get_tongcuocs_res); };
    let handle_get_thanglons = async (week_now) => { let get_thanglons_res = await get_thanglons(week_now); setPlayer_total_bets(get_thanglons_res); };

    const handleChangeWeek = (event) => { setWeekSelect(event.target.value); handle_get_tongcuocs(event.target.value); handle_get_thanglons(event.target.value); };
    const handleChangeTask = (event, newValue) => {
        setValue(newValue);
        console.log('change');
    }
    useEffect(() => {

        handle_get_tongcuocs(week_now);
        handle_get_thanglons(week_now);
    }, [])

    return (
        <div className="body">
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <FormControl className="bxh-select-week-mobile" variant="standard" sx={{ m: 1, minWidth: 180 }}>
                        <InputLabel id="bxh-select-week-label-mobile">Tuần</InputLabel>
                        <Select labelId="bxh-select-week-label-mobile" id="bxh-select-week-select-mobile" value={weekSelect} onChange={handleChangeWeek} label="Tuần">
                            <MenuItem value={week_now}>Tuần {week_now}(Từ {moment().startOf('isoweek').format('DD/MM') + "-" + moment().endOf('isoweek').format('DD/MM')})</MenuItem>
                            <MenuItem value={week_now - 1}>Tuần {week_now - 1}(Từ {moment().subtract(1, 'week').startOf('isoweek').format('DD/MM') + "-" + moment().subtract(1, 'week').endOf('isoweek').format('DD/MM')})</MenuItem>
                            <MenuItem value={week_now - 2}>Tuần {week_now - 2}(Từ {moment().subtract(2, 'week').startOf('isoweek').format('DD/MM') + "-" + moment().subtract(2, 'week').endOf('isoweek').format('DD/MM')})</MenuItem>
                            <MenuItem value={week_now - 3}>Tuần {week_now - 3}(Từ {moment().subtract(3, 'week').startOf('isoweek').format('DD/MM') + "-" + moment().subtract(3, 'week').endOf('isoweek').format('DD/MM')})</MenuItem>
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
                                <MenuItem value={week_now}>Tuần {week_now}(Từ {moment().startOf('isoweek').format('DD/MM') + "-" + moment().endOf('isoweek').format('DD/MM')})</MenuItem>
                                <MenuItem value={week_now - 1}>Tuần {week_now - 1}(Từ {moment().subtract(1, 'week').startOf('isoweek').format('DD/MM') + "-" + moment().subtract(1, 'week').endOf('isoweek').format('DD/MM')})</MenuItem>
                                <MenuItem value={week_now - 2}>Tuần {week_now - 2}(Từ {moment().subtract(2, 'week').startOf('isoweek').format('DD/MM') + "-" + moment().subtract(2, 'week').endOf('isoweek').format('DD/MM')})</MenuItem>
                                <MenuItem value={week_now - 3}>Tuần {week_now - 3}(Từ {moment().subtract(3, 'week').startOf('isoweek').format('DD/MM') + "-" + moment().subtract(3, 'week').endOf('isoweek').format('DD/MM')})</MenuItem>
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
                                    <tr key={player.rank}>
                                        <td className="table-td">{player.rank}</td>
                                        <td className="table-td">{player.player}</td>
                                        <td className="table-td">{player.result}</td>
                                        <td className="table-td">{player.point}</td>
                                        <td className="table-td">{player.updateAt}</td>
                                    </tr>
                                ))
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
                                    <th className="table-th">Tổng cược</th>
                                    <th className="table-th">Tiền thưởng</th>
                                    <th className="table-th">Thời gian cập nhật cuối</th>
                                </tr>
                            </thead>
                            <tbody className="table-tbody">
                                {player_total_bets.length > 0 && player_total_bets.map((player, index) => (
                                    <tr key={player.rank}>
                                        <td className="table-td">{player.rank}</td>
                                        <td className="table-td">{player.player}</td>
                                        <td className="table-td">{player.result}</td>
                                        <td className="table-td">{player.point}</td>
                                        <td className="table-td">{player.updateAt}</td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </table>
                    </TabPanel>
                </TabContext>
            </Box>
        </div>
    )
}
export default Players  