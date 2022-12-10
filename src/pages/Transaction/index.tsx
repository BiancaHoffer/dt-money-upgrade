import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionContainer, TransactionsTable } from "./styles";

interface Transactions {
  id: number;
  category: string;
  description: string;
  price: number;
  type: "income" | "outcome";
  createdAt: string;
}

export function Transaction() {
  const [transactions, setTransactions] = useState<Transactions[]>([]);
  
  useEffect(() => {
    async function getTransaction() {
      const response = await fetch("http://localhost:8080/transactions")
      const data = await response.json();
      setTransactions(data)
    }

    getTransaction()
  })  
  
  return (
      <>
        <Header />
        <Summary />
  
        <TransactionContainer> 
          <SearchForm />
          <TransactionsTable>
            <tbody>
              {transactions.map(transaction => {
                return (
                  <tr>
                    <td width="50%">
                      {transaction.description}
                    </td>
                    <td>
                      <PriceHighLight variant={transaction.type}>
                        {transaction.type === "outcome" ? `- ${transaction.price}` : transaction.price }
                      </PriceHighLight>
                      
                    </td>
                    <td>
                      {transaction.category}
                    </td>
                    <td>
                      {transaction.createdAt}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </TransactionsTable>
        </TransactionContainer>
      </>
    );
  }