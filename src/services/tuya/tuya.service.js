import axios from 'axios';

const baseUrl = '/homeassistant/tuya';

const tuyaService = {
    handleDevices() {
        return axios({
            method: 'get',
            url: `${baseUrl}/devices`
        });
    },

    handleToggleStatus(deviceId, state) {
        const payload = {
            data: {
                state
            },
        };

        return axios({
            method: 'patch',
            url: `${baseUrl}/device/${deviceId}`,
            data: payload,
        });
    },
}

export default tuyaService;