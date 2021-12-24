import  { useState} from "react";
import ExchangeRate from "./ExchangeRate";

const CurrencyConvertor = () => {

    const currencies = ['BTC', 'ETH', 'USD', 'PLN', 'LUNA']
    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC')
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC')

    return (
        <div className="currency-convertor">
            <h2>CurrencyConvertor</h2>

            <div className="input-box">
                <table>
                    <tbody>
                    <tr>
                        <td>Primary Currency:</td>
                        <td>
                            <input type="number" name="currency-amount-1" value={""}/>
                        </td>
                        <td>
                            <select
                                value={chosenPrimaryCurrency}
                                name="currency-option-1"
                                className="currency-option"
                                onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                            >
                                {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <td>Secondary Currency:</td>
                        <td>
                            <input type="number" name="currency-amount-2" value={""}/>
                        </td>
                        <td>
                            <select
                                value={chosenSecondaryCurrency}
                                name="currency-option-2"
                                className="currency-option"
                                onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                            >
                                {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                            </select>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>


            <ExchangeRate/>
        </div>
    )
}

export default CurrencyConvertor