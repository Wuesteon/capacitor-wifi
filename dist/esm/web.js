import { WebPlugin } from "@capacitor/core";
export class WifiWeb extends WebPlugin {
    constructor() {
        super({
            name: "Wifi",
            platforms: ["web"],
        });
    }
    async scan() {
        return { scan: [] };
    }
    async connect(_options) {
        return { ssid: "" };
    }
    async disconnect() {
        return;
    }
    async connectPrefix(_options) {
        return { ssid: "" };
    }
    async getConnectedSSID() {
        return { ssid: "" };
    }
    async getWifiIP() {
        return { ip: "" };
    }
}
//# sourceMappingURL=web.js.map