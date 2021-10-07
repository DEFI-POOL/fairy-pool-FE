// First time connection

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
    } else {
        return {
          address: "",
          status: (
            <span>
              <p>
                {" "}
                🦊{" "}
                <a target="_blank" href={`https://metamask.io/download.html`}>
                  Please, follow this link to quickly set up metamask(a virtual Ethereum wallet). 
                </a>
              </p>
            </span>
          ),
        };
      }
}