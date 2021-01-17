import axios from "axios";

const baseUrl = '/homeassistant/lgtv';

const lgtvService = {
    fetchTvStatus() {
        const url = `${baseUrl}/status`;
        return axios({
            method: "get",
            url,
        })
    },

    volumeMute() {
        const url = `${baseUrl}/volume/mute`;
        return axios({
            method: "get",
            url,
        })
    },

    volumeDown() {
        const url = `${baseUrl}/volume/down`;
        return axios({
            method: "get",
            url,
        })
    },

    volumeUp() {
        const url = `${baseUrl}/volume/up`;
        return axios({
            method: "get",
            url,
        })
    },

    tvOn() {
        const url = `${baseUrl}/turn-on`;
        return axios({
            method: "get",
            url,
        })
    },

    tvOff() {
        const url = `${baseUrl}/turn-off`;
        return axios({
            method: "get",
            url,
        })
    },

    source() {
        const url = `${baseUrl}/switch-input?input=HDMI_1`;
        return axios({
            method: "post",
            url,
        })
    },
}

export default lgtvService;