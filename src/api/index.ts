import { BitKeepAdapter } from "@tronweb3/tronwallet-adapters";
// 通过插件new出来的方法，里面包含很多方法
// 连接钱包
let adapter: any = null;
export const connectedWalletT = async () => {
  try {
    adapter = new BitKeepAdapter();
    console.log("adapter", adapter);

    // const res = await adapter.connect();
    // return res;
  } catch (error: any) {
    console.log("error", error);
  }
};
// 签名
export const signatureT = async (message: string) => {
  try {
    const res = await adapter.signMessage(message);
    return res;
  } catch (e) {
    console.log("e", e);
  }
};
