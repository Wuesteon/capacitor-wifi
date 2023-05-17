var capacitorPlugin = (function (exports, core) {
    'use strict';

    const Wifi = core.registerPlugin("Wifi", {
        web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.WifiWeb()),
    });

    class WifiWeb extends core.WebPlugin {
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

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        WifiWeb: WifiWeb
    });

    exports.Wifi = Wifi;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
