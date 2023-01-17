import { Container, PolygonCont,SearchFood, SignOut } from "./styles";
import polygon from "../../assets/polygon.svg"
import lupa from "../../assets/lupa.svg"
import {ButtonPedido } from "../ButtonPedido"
import signOut from "../../assets/signOut.svg"

export function Header(){
    return(
        <Container>
            <PolygonCont>
                <img src={polygon} alt="teste" />
                <span>food explorer</span>
            </PolygonCont>
            <span>Meus Favoritos</span>
            <SearchFood>
                <img src={lupa} alt="" />
                <input type="text" placeholder="Busque pelas opções de pratos" />
            </SearchFood>
            <ButtonPedido />
            <SignOut type="button">
                <img src={signOut} alt="" />
            </SignOut>
            
        </Container>
    )
}