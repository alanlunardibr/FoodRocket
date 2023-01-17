import { Container } from "./styles";
import recepeit from "../../assets/recepeit.svg"
export function ButtonPedido({ title}){
    return(
        <Container>
            <img src={recepeit} alt="" />Meu Pedido
        </Container>
    )
}