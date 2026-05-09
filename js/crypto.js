async function getCryptoPrices() {
    try {

        const response = await fetch(
            'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=eur'
        );

        const data = await response.json();

        document.getElementById('bitcoin-price').textContent =
            '€ ' + data.bitcoin.eur.toLocaleString('nl-BE');

        document.getElementById('ethereum-price').textContent =
            '€ ' + data.ethereum.eur.toLocaleString('nl-BE');

        document.getElementById('solana-price').textContent =
            '€ ' + data.solana.eur.toLocaleString('nl-BE');

    } catch (error) {
        console.error('Crypto API error:', error);
    }
}

getCryptoPrices();
setInterval(getCryptoPrices, 30000);