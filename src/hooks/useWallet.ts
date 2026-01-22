"use client";

import { useAccount, useDisconnect, useBalance, useChainId } from "wagmi";
import { useConnectModal, useAccountModal, useChainModal } from "@rainbow-me/rainbowkit";

export function useWallet() {
    const { address, isConnected, isConnecting, isDisconnected } = useAccount();
    const { disconnect } = useDisconnect();
    const chainId = useChainId();

    const { data: balance } = useBalance({
        address: address,
    });

    const { openConnectModal } = useConnectModal();
    const { openAccountModal } = useAccountModal();
    const { openChainModal } = useChainModal();

    return {
        // Account state
        address,
        isConnected,
        isConnecting,
        isDisconnected,
        chainId,
        balance,

        // Actions
        disconnect,
        openConnectModal,
        openAccountModal,
        openChainModal,
    };
}
