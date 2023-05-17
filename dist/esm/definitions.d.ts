export interface IWifiNetwork {
    level: number;
    SSID: string;
    BSSID: string;
    frequency: number;
    capabilities: string;
    timestamp: number;
    channelWidth?: number;
    centerFreq0?: number;
    centerFreq1?: number;
}
export interface WifiPlugin {
    scan(): Promise<{
        scan: IWifiNetwork[];
    }>;
    connect(options: {
        ssid: string;
        password?: string;
        authType?: string;
    }): Promise<{
        ssid: string;
    }>;
    disconnect(): Promise<void>;
    connectPrefix(options: {
        ssid: string;
        password?: string;
    }): Promise<{
        ssid: string;
    }>;
    getWifiIP(): Promise<{
        ip: string;
    }>;
    getConnectedSSID(): Promise<{
        ssid: string;
    }>;
}
