import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionContainer, TransactionsTable } from "./styles";

export function Transaction() {
    return (
      <>
        <Header />
        <Summary />
  
        <TransactionContainer> 
          <SearchForm />
          <TransactionsTable>
            <tbody>
              <tr>
                <td width="50%">
                  Desenvolvimento de site
                </td>
                <td>
                  <PriceHighLight variant="income">
                    R$ 5.000,00
                  </PriceHighLight>
                  
                </td>
                <td>
                  Venda
                </td>
                <td>
                  13/04/2022
                </td>
              </tr>


              <tr>
                <td width="50%">
                  Desenvolvimento de site
                </td>
                <td>
                  <PriceHighLight variant="outcome">
                    - R$ 5.000,00
                  </PriceHighLight>
                </td>
                <td>
                  Venda
                </td>
                <td>
                  13/04/2022
                </td>
              </tr>
            </tbody>
          </TransactionsTable>
        </TransactionContainer>
      </>
    );
  }