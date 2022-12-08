import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { Close, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';
import { X, ArrowCircleUp, ArrowCircleDown } from 'phosphor-react'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>
          Nova Transação
        </Dialog.Title>
        <Close>
          <X size={24} />
        </Close>

        <form>
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <TransactionType>
            <TransactionTypeButton type="button" variant="income" value="income" >
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>
            <TransactionTypeButton type="button" variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">
            Cadastrar
          </button>
        </form>

        
      </Content>
    </Dialog.Portal>
  );
}