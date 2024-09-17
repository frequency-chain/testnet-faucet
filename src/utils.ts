import { getNetworkData } from "../src/networkData";
import { config } from "./config";

export function isAccountPrivileged(sender: string): boolean {
  const networkName = config.Get("NETWORK");
  const networkData = getNetworkData(networkName);

  return networkData.matrixWhitelistPatterns.some((pattern) => pattern.test(sender));
}
