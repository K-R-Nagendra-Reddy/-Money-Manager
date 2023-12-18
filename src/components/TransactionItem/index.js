// Write your code here
import './index.css'

const TransactionItem = props => {
  const {details, deleteDelete} = props
  const {id, title, amount, type} = details

  const onDeleteItem = () => {
    deleteDelete(id)
  }

  return (
    <li className="list-container">
      <p className="paragraph">{title}</p>
      <p className="paragraph">{`Rs ${amount}`}</p>
      <p className="paragraph">{type}</p>
      <button type="button" data-testid="delete" onClick={onDeleteItem}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default TransactionItem
