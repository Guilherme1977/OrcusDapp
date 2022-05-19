import {InjectedConnector} from "@web3-react/injected-connector";
import USDCIcon from "../assets/icons/USDCIcon";
import LogoIcon from "../assets/icons/LogoIcon";
import OUSDIcon from "../assets/icons/OUSDIcon";
import ORUIcon from "../assets/icons/ORUIcon";



export const MetaMask = new InjectedConnector({
    supportedChainIds: [31337, 592]
});

export const JSON_RPC_URL = "https://astar.blastapi.io/5d08b0bf-97fc-4387-968c-548c2ae8cea8";
export const MAX_INT = "115792089237316195423570985008687907853269984665640564039457584007913129639935";

export const CONTRACT_ADDRESSES = {
    ORU: "0xCdB32eEd99AA19D39e5d6EC45ba74dC4afeC549F", // Check +
    OUSD: "0x29F6e49c6E3397C3A84F715885F9F233A441165C", // Check +
    WASTR: "0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720", // Check +
    USDC: "0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98", // Check +

    BANK: "0x9F1629D7e349b8aa379DD09eC161E7d8242C2102", // Check +
    BANK_SAFE: "0xd89dEa2daC8Fb73F4107C2cbeA5Eb36dab511F64", // Check +
    ORU_STAKE: "0x243e038685209B9B68e0521bD5838C6C937d666A", // Check +
    PRICE_ORACLE: "0xD3f407b4c61b90ABFDD55A6099327EB30C358e71", // Check +
    OUSD_USDC_ORACLE: "0xc701FF0eF3a134c1b9455e0c456b23d51E792A50", // Check +
    MASTER_CHEF: "0xfa1Cfa75bFae8303A9Fe8aF711AacD59015eE6d4", // Check +

    ORU_USDC: "0x43783EcE7b46BB026D4CeBfd3e29f539Ff1914fB", // Check +
    OUSD_USDC: "0xCf83a3d83c1265780d9374e8a7c838fE22BD3DC6", // Check +
    OUSD_ORU: "0xE5A11AfBed6a0fC59e69493F7142ef7e454e809f", // Check +

    OUSD_METAPOOL: "0xD18AbE9bcedeb5A9a65439e604b0BE8db0bdB176", // Check +
    SRS: "0x9448610696659de8F72e1831d392214aE1ca4838", // Check +
    GAGUE_CONTROLLER: "0x9464c206e0BF6310a130e690209dbFf1a7D4Dc65", // Check +
    SRS_LP_TOKEN: "0x2425947FD79cbf4C2C2deeD0246b0C9EdC65EB7D", // Check +
    GAGUE_OUSD: "0x5FF4735274b0C7ADf7de52768645aA08AE4bcB20", // Check +

    ROUTER: "0xE915D2393a08a00c5A463053edD31bAe2199b9e7", // Check +

    DUSTBIN: "0x91F62d51a0Eb14e7671473C5D5f1528aDF8EdE49", // Check
    TREASURY: "0x9F02Aa523342c45874986F8Cd48397778201FA09" // Check
}
export const ORU_PER_BLOCK = 4.466;

export const MASTER_CHEF_POOLS = [
    {name: "ORU/USDC", address: "0x0D02dFE1E662FbB70255D61b85ABE267D0179ee8", mobileToken0Icon: <ORUIcon ratio={'5vw'}/>, token0Icon: <ORUIcon ratio={'1.192vw'}/>,mobileToken1Icon: <USDCIcon ratio={'5vw'}/>, token1Icon: <USDCIcon ratio={'1.192vw'}/>, token0: "ORU", token1: "USDC"},
    {name: "oUSD/USDC", address: "0x8C6d6Ec1B320f38D4cd58Cac30562A35DA0F1EE6",mobileToken0Icon: <OUSDIcon ratio={'5vw'}/>,  token0Icon: <OUSDIcon ratio={'1.192vw'}/>,mobileToken1Icon: <USDCIcon ratio={'5vw'}/>, token1Icon: <USDCIcon ratio={'1.192vw'}/>, token0: "OUSD", token1: "USDC"},
    {name: "oUSD/ORU", address: "0x318d0540aec0709dDDD67480eFAC0EeF217Dfcf0", mobileToken0Icon: <OUSDIcon ratio={'5vw'}/>, token0Icon: <OUSDIcon ratio={'1.192vw'}/>,mobileToken1Icon: <ORUIcon ratio={'5vw'}/>, token1Icon: <ORUIcon ratio={'1.192vw'}/>, token0: "OUSD", token1: "ORU"},
]
