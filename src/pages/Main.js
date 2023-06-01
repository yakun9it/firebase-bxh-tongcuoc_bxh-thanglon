import Players from "../components/Players.comp"
import img_logo from '../assets/images/logo-bxh.png';
import img_title from '../assets/images/title-bxh-2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { Box, Button, Modal, Typography } from "@mui/material";
import React from 'react';
import { ArrowDropDown } from '@mui/icons-material';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    borderRadius: '15px',
    boxShadow: 24,
    p: 4,
};
const Main = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    library.add(faHouseChimney);
    return (
        <div className="bxh-main">
            <div className="bxh-container">
                <div className="bxh-nav-header">
                    <div className="bxh-logo-iconhome">
                        <img className="bxh-logo" src={img_logo} alt="" width="250" height="250" />
                        <div className="bxh-icon-home">
                            <Button onClick={handleOpen} sx={{ mr: 1, color: '#000', textTransform: 'none', fontSize: '13px', fontWeight: "bold" }}
                                endIcon={<ArrowDropDown sx={{ padding: '0', margin: '0' }}
                                />}>Cơ cấu giải thưởng</Button>
                            <Modal
                                keepMounted
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="keep-mounted-modal-title"
                                aria-describedby="keep-mounted-modal-description"
                            >
                                <Box sx={style}>
                                    <Box className="bxh-modal-giaithuong" sx={{ pb: "10px", mb: "5px", borderBottom: '1px solid #000' }}>
                                        <Typography id="keep-mounted-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center' }}>
                                            Đua tốp nhận thưởng
                                        </Typography>
                                    </Box>
                                    <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                                        Nội dung
                                    </Typography>
                                </Box>
                            </Modal>

                            <FontAwesomeIcon icon={faHouseChimney} />
                        </div>

                    </div>
                    <div className="bxh-title">
                        <img className="bxh-title" src={img_title} alt="" width="350" height="250" />
                    </div>
                </div>

                <Players />
            </div>
        </div >
    )
}

export default Main