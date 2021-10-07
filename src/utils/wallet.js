export const connectWallet = async () => {
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
              method: "eth_requestAccounts",
            });
            const obj = {
              status: "You're all set!!! Deposit! Win pool interest! Never Lose!",
              address: addressArray[0],
            };
            return obj;
          } catch (err) {
            return {
              address: "",
              status: "😥 " + err.message,
            };
          }



    }
}