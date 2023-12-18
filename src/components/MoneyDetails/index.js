// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {key, balance, income, expensive} = props
  console.log(key)
  return (
    <div className="money-details">
      <div className="item1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="small-image"
        />
        <div>
          <p className="balance">Your Balance</p>
          <p className="rupees">Rs</p>
          <p data-testid="balanceAmount">{balance}</p>
        </div>
      </div>
      <div className="item2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="small-image"
        />
        <div>
          <p className="balance">Your Income</p>
          <p className="rupees"> Rs</p>
          <p data-testid="incomeAmount">{income}</p>
        </div>
      </div>
      <div className="item3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="small-image"
          alt="expenses"
        />
        <div>
          <p className="balance">Your Expenses</p>
          <p className="rupees">Rs</p>
          <p data-testid="expensesAmount">{expensive}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
