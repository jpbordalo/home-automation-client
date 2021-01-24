import lgtvService from "@/services/lgtv/lgtv.service";

const ACTIONS = {
    TV_POWER_ON: "TV_POWER_ON",
    TV_POWER_OFF: "TV_POWER_OFF",
    TV_VOLUME_UP: "TV_VOLUME_UP",
    TV_VOLUME_DOWN: "TV_VOLUME_DOWN",
    TV_VOLUME_MUTE: "TV_VOLUME_MUTE",
};

const ACTIONS_MAP = [
    {
        voiceCommand: "ligar televisão",
        commandKey: ACTIONS.TV_POWER_ON,
        action: () => {
            lgtvService.tvOn().then((res) => {
                console.log(res);
            });
        },
    },
    {
        voiceCommand: "desligar televisão",
        commandKey: ACTIONS.TV_POWER_OFF,
        action: () => {
            lgtvService.tvOff().then((res) => {
                console.log(res);
            });
        },
    },
    {
        voiceCommand: "mais alto",
        commandKey: ACTIONS.TV_VOLUME_UP,
        action: () => {
            lgtvService.volumeDown().then((res) => {
                console.log(res);
            });
        },
    },
    {
        voiceCommand: "mais baixo",
        commandKey: ACTIONS.TV_VOLUME_DOWN,
        action: () => {
            lgtvService.volumeUp().then((res) => {
                console.log(res);
            });
        },
    },
    {
        voiceCommand: "mute",
        commandKey: ACTIONS.TV_VOLUME_MUTE,
        action: () => {
            lgtvService.volumeMute().then((res) => {
                console.log(res);
            });
        },
    },
];

export { ACTIONS, ACTIONS_MAP };