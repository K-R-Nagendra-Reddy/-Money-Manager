import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: 0,
    optionId: transactionTypeOptions[0].optionId,
    historyList: [],
  }

  addNewTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const option = transactionTypeOptions.find(
      each => each.optionId === optionId,
    )
    const {displayText} = option
    const newItem = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      historyList: [...prevState.historyList, newItem],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeTitle = event => this.setState({titleInput: event.target.value})

  onChangeAmount = event => this.setState({amountInput: event.target.value})

  onChangeType = event => this.setState({optionId: event.target.value})

  deleteAnItem = id => {
    const {historyList} = this.state
    this.setState({
      historyList: historyList.filter(eachList => eachList.id !== id),
    })
  }

  getIncome = () => {
    const {historyList} = this.state
    let incomeAmount = 0
    historyList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        incomeAmount += each.amount
      }
    })
    return incomeAmount
  }

  getExpenses = () => {
    const {historyList} = this.state
    let ExpensesAmount = 0
    historyList.forEach(each => {
      if (each.type === transactionTypeOptions[1].displayText) {
        ExpensesAmount += each.amount
      }
    })
    return ExpensesAmount
  }

  getBalance = () => {
    const {historyList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0
    historyList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        incomeAmount += each.amount
      } else {
        expensesAmount += each.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  render() {
    const {titleInput, amountInput, optionId, historyList} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()
    return (
      <div className="bg-container">
        <div className="user-name-container">
          <h1 className="profile">Hi, Richard</h1>
          <p className="about-profile">
            Welcome back to your <span className="span">Money Manager</span>
          </p>
        </div>

        <div className="money-details-container">
          <MoneyDetails
            balance={balanceAmount}
            income={incomeAmount}
            expensive={expensesAmount}
          />
        </div>
        <div className="Transaction-history-container">
          <div className="Add-Transaction-container">
            <form onSubmit={this.addNewTransaction}>
              <h1 className="heading-add">Add Transaction</h1>
              <div>
                <label htmlFor="title">TITLE</label>
                <input
                  type="text"
                  id="title"
                  onChange={this.onChangeTitle}
                  value={titleInput}
                />
              </div>
              <div>
                <label htmlFor="amount">AMOUNT</label>
                <input
                  type="text"
                  id="amount"
                  onChange={this.onChangeAmount}
                  value={amountInput}
                />
              </div>
              <div className="add-margin">
                <label htmlFor="type">TYPE</label>
                <select id="type" onChange={this.onChangeType} value={optionId}>
                  {transactionTypeOptions.map(each => (
                    <option value={each.optionId}>{each.displayText}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>

          <ul className="History-container">
            <h1 className="history-heading">History</h1>

            <li className="title-amount-type">
              <p className="history-text">Title</p>
              <p className="history-text">Amount</p>
              <p className="history-text">Type</p>
            </li>

            {historyList.map(each => (
              <TransactionItem
                key={each.id}
                details={each}
                deleteDelete={this.deleteAnItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default MoneyManager
